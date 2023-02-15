package com.ssafy.osws.user.service;

import com.ssafy.osws.user.dto.RequestSignUp;
import com.ssafy.osws.user.dto.RequestSignIn;
import com.ssafy.osws.user.dto.ResponseSignIn;

public interface CommonService {
	boolean signUp(RequestSignUp requestSignUp) throws RuntimeException;
	ResponseSignIn signIn(RequestSignIn requestSignIn);
	Boolean signOut(String userId);
	boolean isSaved(String phone) throws Exception;
	boolean checkId(String userId) throws RuntimeException;
	String sendAuthCode(String phone) throws Exception;
	void changePassword(String phone, String password) throws Exception;
}
