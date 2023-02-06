package com.ssafy.osws.lecture.data.repository;

import java.util.List;

import com.ssafy.osws.lecture.data.entity.Lecture;

public interface LectureQueryDSLRepository {

	List<Lecture> findLectureByPhone(String phone);

	Lecture findByLectureNo(int lectureNo);
	
	List<Lecture> findLectureByPhone(String phone);

	Lecture findByPhoneAndLectureNo(String phone, int lectureNo);
}
