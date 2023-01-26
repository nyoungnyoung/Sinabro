package com.ssafy.osws.user.dao;

import com.ssafy.osws.user.data.entity.User;

public interface CommonDao {
	public User signIn(String userId);
	public User save(User user);
}
