package com.ssafy.osws.user.data.repository;

import java.util.List;

import com.ssafy.osws.user.data.entity.User;

public interface UserQueryDSLRepository {
	
	List<User> findAllByLectureNo(int lectureNo);
}
