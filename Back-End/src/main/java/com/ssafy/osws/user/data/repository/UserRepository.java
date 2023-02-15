package com.ssafy.osws.user.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ssafy.osws.user.data.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	public User findByPhone(String phone);
	public boolean existsByPhone(String phone);
}