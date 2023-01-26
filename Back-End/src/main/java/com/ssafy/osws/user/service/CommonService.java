package com.ssafy.osws.user.service;

import com.ssafy.osws.user.dto.RequestSignIn;
import com.ssafy.osws.user.dto.ResponseSignIn;

public interface CommonService {
	ResponseSignIn signIn(RequestSignIn requestSignIn);
}
