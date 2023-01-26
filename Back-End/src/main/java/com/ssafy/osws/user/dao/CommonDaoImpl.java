package com.ssafy.osws.user.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssafy.osws.user.data.entity.User;
import com.ssafy.osws.user.data.repository.UserRepository;

@Repository
public class CommonDaoImpl implements CommonDao {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User signIn(String userId) {
		return userRepository.getByUserId(userId);
	}

	@Override
	public User save(User user) {
		return userRepository.save(user);
	}

}