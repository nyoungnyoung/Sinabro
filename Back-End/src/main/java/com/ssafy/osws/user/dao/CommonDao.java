package com.ssafy.osws.user.dao;

import com.ssafy.osws.user.dto.RequestAuthentificationNumber;

public interface CommonDao {
	public RequestAuthentificationNumber getPhone(String phone) throws Exception;
}
