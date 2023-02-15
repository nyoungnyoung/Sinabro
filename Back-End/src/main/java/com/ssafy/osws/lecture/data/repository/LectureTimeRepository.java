package com.ssafy.osws.lecture.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.osws.lecture.data.entity.Lecture;
import com.ssafy.osws.lecture.data.entity.LectureTime;

public interface LectureTimeRepository extends JpaRepository<LectureTime, Integer> {
	
	List<LectureTime> findAllByLectureNo(int lectureNo);

	void deleteAllByLecture(Lecture lecture);

}
