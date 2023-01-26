package com.ssafy.osws.user.service;

import com.ssafy.osws.user.dto.RequestSignUp;
import com.ssafy.osws.user.dto.RequestSignIn;
import com.ssafy.osws.user.dto.ResponseSignIn;

public interface CommonService {
	boolean signUp(RequestSignUp requestSignUp) throws RuntimeException;
	ResponseSignIn signIn(RequestSignIn requestSignIn);
	boolean isSaved(String phone) throws Exception;
}
