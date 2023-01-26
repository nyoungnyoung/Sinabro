package com.ssafy.osws.user.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssafy.osws.user.data.repository.UserRepository;

@Repository
public class CommonDaoImpl implements CommonDao {
	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public boolean isSaved(String phone) {
		if (userRepository.findByPhone(phone) != null) {
			return true;
		} else {
			return false;
		}
	}

}
