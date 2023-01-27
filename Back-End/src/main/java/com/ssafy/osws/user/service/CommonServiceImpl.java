package com.ssafy.osws.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.osws.config.security.JwtProvider;
import com.ssafy.osws.user.dao.CommonDao;
import com.ssafy.osws.user.data.entity.User;
import com.ssafy.osws.user.dto.RequestSignIn;
import com.ssafy.osws.user.dto.RequestSignUp;
import com.ssafy.osws.user.dto.ResponseSignIn;

@Service
public class CommonServiceImpl implements CommonService {
	
	@Autowired
	private CommonDao commonDao;

	@Autowired
	private JwtProvider jwtProvider;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Override
	public boolean signUp(RequestSignUp requestSignUp) throws RuntimeException {
		//requestSignUp.toEntity();
		requestSignUp.setPassword(passwordEncoder.encode(requestSignUp.getPassword()));
		User user = requestSignUp.toEntity();
	    
	    User savedUser = commonDao.save(user);

	    if (!savedUser.getUserId().isEmpty()) {
	      return true;
	    }
	    return false;
	}
	
	@Override
	public ResponseSignIn signIn(RequestSignIn requestSignIn) {
		User user = commonDao.signIn(requestSignIn.getId());
		
		ResponseSignIn responseSignIn = null;
		if(user != null && passwordEncoder.matches(requestSignIn.getPassword(), user.getPassword())) {
			responseSignIn = new ResponseSignIn();
			responseSignIn.setId(user.getUserId());
			responseSignIn.setAccessToken(jwtProvider.createAccessToken(user.getUserId()));
			responseSignIn.setRefreshToken(jwtProvider.createRefreshToken(user.getUserId()));
			commonDao.save(responseSignIn.toEntitiy(user));
			
		}
		return responseSignIn;
	}
	
	@Override
	public boolean isSaved(String phone) throws Exception {
		return commonDao.isSaved(phone);
	}
}
