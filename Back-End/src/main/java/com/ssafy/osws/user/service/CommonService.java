
package com.ssafy.osws.user.service;

import com.ssafy.osws.user.dto.request.RequestSignIn;
import com.ssafy.osws.user.dto.request.RequestSignUp;
import com.ssafy.osws.user.dto.response.ResponseSignIn;

public interface CommonService {
	boolean signUp(RequestSignUp requestSignUp) throws RuntimeException;
	ResponseSignIn signIn(RequestSignIn requestSignIn);
	Boolean signOut(String userId);
	boolean isSaved(String phone) throws Exception;
	boolean checkId(String userId) throws RuntimeException;
	String sendAuthCode(String phone);
	void changePassword(String phone, String password) throws Exception;
}