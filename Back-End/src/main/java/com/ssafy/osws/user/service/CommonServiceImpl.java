package com.ssafy.osws.user.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.osws.config.security.JwtProvider;
import com.ssafy.osws.user.dao.CommonDao;
import com.ssafy.osws.user.data.entity.User;
import com.ssafy.osws.user.dto.RequestSignIn;
import com.ssafy.osws.user.dto.RequestSignUp;
import com.ssafy.osws.user.dto.ResponseSignIn;

import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.service.DefaultMessageService;

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

	@Override
	public boolean checkId(String userId) throws RuntimeException {
		return commonDao.isSameId(userId);
	}

	public String sendAuthCode(String phone) throws Exception {
		DefaultMessageService messageService = NurigoApp.INSTANCE.initialize("NCSOY85XEGNVPAVE", "CVTX6F1GD29HY9YN48PRFTJBDWPRTVGB", "https://api.solapi.com");
		
		Message message = new Message();
		message.setFrom("01073071075");
		message.setTo(phone);
		Random random = new Random();
		String authCode = String.format("%04d", random.nextInt(10000));
		message.setText("[시나브로] 인증번호는 " + authCode + "입니다.");

		try {
			messageService.send(message);
			return authCode;
		} catch (NurigoMessageNotReceivedException exception) {
			// 발송에 실패한 메시지 목록을 확인할 수 있습니다!
			System.out.println(exception.getFailedMessageList());
			System.out.println(exception.getMessage());
			return "fail";
		} catch (Exception exception) {
			System.out.println(exception.getMessage());
			return "fail";
		}
	}

	@Override
	public void changePassword(String phone, String password) throws Exception {
		User user = commonDao.getUserByPhone(phone);
		try {
			user.updatePassword(passwordEncoder.encode(password));
			commonDao.save(user);
		} catch (Exception e) {
			System.out.println("Exception at changePassword");
		}
	}
}
