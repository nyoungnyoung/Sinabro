package com.ssafy.osws.lecture.data.repository;

import java.util.List;

import com.ssafy.osws.lecture.data.entity.Lecture;

public interface LectureQueryDSLRepository {

	List<Lecture> findAllByPhone(String phone);

	Lecture findByLectureNo(int lectureNo);

	Lecture findByPhoneAndLectureNo(String phone, int lectureNo);
}
