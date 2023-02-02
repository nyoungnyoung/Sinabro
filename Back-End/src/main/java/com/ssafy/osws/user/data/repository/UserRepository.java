package com.ssafy.osws.user.data.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ssafy.osws.user.data.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	public User findByUserId(String userId);
	public User findByPhone(String phone);
	public boolean existsByUserId(String userId);
	public Optional<User> findByEmail(String email);
}