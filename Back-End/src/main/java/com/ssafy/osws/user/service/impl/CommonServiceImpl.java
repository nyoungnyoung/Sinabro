package com.ssafy.osws.user.service.impl;


import javax.transaction.Transactional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.osws.config.security.JwtProvider;
import com.ssafy.osws.user.data.entity.User;
import com.ssafy.osws.user.data.repository.UserRepository;
import com.ssafy.osws.user.dto.request.RequestSignIn;
import com.ssafy.osws.user.dto.request.RequestSignUp;
import com.ssafy.osws.user.dto.response.ResponseSignIn;
import com.ssafy.osws.user.service.CommonService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.service.DefaultMessageService;

@Service
@Slf4j
@RequiredArgsConstructor
public class CommonServiceImpl implements CommonService {
	
	private final UserRepository userRepository;
	private final JwtProvider jwtProvider;
	
	private final String fromPhoneNumber = "01073071075";
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Override
	@Transactional
	public boolean signUp(RequestSignUp requestSignUp) {
		requestSignUp.setPassword(passwordEncoder.encode(requestSignUp.getPassword()));
	    
	    if(userRepository.save(requestSignUp.toEntity()) != null) {
	    	return true;
	    } else {
	    	return false;
	    }
	}
	
	@Override
	@Transactional
	public ResponseSignIn signIn(RequestSignIn requestSignIn) {
		User user = userRepository.findByPhone(requestSignIn.getPhone());
		
		ResponseSignIn responseSignIn = null;
		if(user != null && passwordEncoder.matches(requestSignIn.getPassword(), user.getPassword())) {
			responseSignIn = new ResponseSignIn();
			responseSignIn.setRole(user.getRole().split("_")[1]);
			responseSignIn.setAccessToken(jwtProvider.createAccessToken(user.getPhone()));
			responseSignIn.setRefreshToken(jwtProvider.createRefreshToken(user.getPhone()));
			userRepository.save(responseSignIn.toEntitiy(user));
			
		}
		return responseSignIn;
	}
	
	@Override
	public boolean isSaved(String phone) throws Exception {
		if (userRepository.findByPhone(phone) != null) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	@Transactional
	public Boolean signOut(String phone) {
		User user = userRepository.findByPhone(phone);
		user.updateRefreshToken(null);
		if(userRepository.save(user) != null)
			return true;
		else
			return false;
	}


	@Override
	public boolean checkId(String phone) throws RuntimeException {
		return userRepository.existsByPhone(phone);
	}

	@Override
	public String sendAuthCode(String phone) {
		DefaultMessageService messageService = NurigoApp.INSTANCE.initialize("NCSOY85XEGNVPAVE", "CVTX6F1GD29HY9YN48PRFTJBDWPRTVGB", "https://api.solapi.com");
		
		Message message = new Message();
		message.setFrom(fromPhoneNumber);
		message.setTo(phone);
		Random random = new Random();
		String authCode = String.format("%04d", random.nextInt(10000));
		message.setText("[시나브로] 인증번호는 " + authCode + "입니다.");

		try {
			messageService.send(message);
			return authCode;
		} catch (NurigoMessageNotReceivedException exception) {
			// 발송에 실패한 메시지 목록을 확인할 수 있습니다!
			log.error(exception.getFailedMessageList().toString());
			log.error(exception.getMessage());
			return "fail";
		} catch (Exception exception) {
			log.error(exception.getMessage());
			return "fail";
		}
	}

	@Override
	@Transactional(rollbackOn =  RuntimeException.class)
	public void changePassword(String phone, String password) throws RuntimeException {
		User user = userRepository.findByPhone(phone);
		user.updatePassword(passwordEncoder.encode(password));
		userRepository.save(user);
	}
}
