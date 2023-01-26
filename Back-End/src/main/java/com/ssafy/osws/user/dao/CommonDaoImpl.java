package com.ssafy.osws.user.dao;

import org.springframework.beans.factory.annotation.Autowired;

import com.ssafy.osws.user.data.entity.User;
import com.ssafy.osws.user.data.repository.UserRepository;

public class CommonDaoImpl implements CommonDao {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User signIn(String userId) {
		return userRepository.getById(userId);
	}

}
