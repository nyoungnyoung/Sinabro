package com.ssafy.osws.user.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssafy.osws.user.data.entity.User;
import com.ssafy.osws.user.data.repository.UserRepository;

@Repository
public class CommonDaoImpl implements CommonDao {
	
	@Autowired
	private UserRepository userRepository;
	
	public CommonDaoImpl(UserRepository userRepository) {
	    this.userRepository = userRepository;
	}

	@Override
	public User getUserByUserId(String userId) {
		return userRepository.findByUserId(userId);
	}

	@Override
	public User save(User user) {
		return userRepository.save(user);
	}
	
	@Override
	public boolean isSaved(String phone) {
		if (userRepository.findByPhone(phone) != null) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public boolean isSameId(String userId) {
		return userRepository.existsByUserId(userId);
	}

	public User getUserByPhone(String phone) {
		return userRepository.findByPhone(phone);
	}
}
