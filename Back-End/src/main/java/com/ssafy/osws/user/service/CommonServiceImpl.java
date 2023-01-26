package com.ssafy.osws.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.ssafy.osws.config.security.JwtProvider;
import com.ssafy.osws.user.dao.CommonDao;
import com.ssafy.osws.user.data.entity.User;
import com.ssafy.osws.user.dto.RequestSignIn;
import com.ssafy.osws.user.dto.ResponseSignIn;

public class CommonServiceImpl implements CommonService {

	@Autowired
	private CommonDao commonDao;
	
	@Autowired
	private JwtProvider jwtProvider;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Override
	public ResponseSignIn signIn(RequestSignIn requestSignIn) {
		User user = commonDao.signIn(requestSignIn.getId());
		ResponseSignIn responseSignIn = null;
		if(user != null && passwordEncoder.matches(requestSignIn.getPassword(), user.getPassword())) {
			responseSignIn = new ResponseSignIn();
			responseSignIn.setId(user.getId());
			responseSignIn.setAccessToken(jwtProvider.createAccessToken(user.getId()));
			responseSignIn.setRefreshToken(jwtProvider.createRefreshToken(user.getId()));
		}
		return responseSignIn;
	}

}
