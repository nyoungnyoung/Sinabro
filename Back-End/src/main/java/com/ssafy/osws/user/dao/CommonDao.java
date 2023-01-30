package com.ssafy.osws.user.dao;

import com.ssafy.osws.user.data.entity.User;

public interface CommonDao {
	public User getUserByUserId(String userId);
	public User save(User user);
	public boolean isSaved(String phone);
	public boolean isSameId(String userId);
	public User getUserByPhone(String phone);
}
