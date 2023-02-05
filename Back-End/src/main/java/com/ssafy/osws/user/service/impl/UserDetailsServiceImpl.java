package com.ssafy.osws.user.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ssafy.osws.user.data.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements org.springframework.security.core.userdetails.UserDetailsService {

	private final UserRepository userRepository;

	  @Autowired
	  public UserDetailsServiceImpl(UserRepository userRepository) {
	    this.userRepository = userRepository;
	  }
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return userRepository.findByPhone(username);
	}

}
