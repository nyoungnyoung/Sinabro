package com.ssafy.osws.lecture.data.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.osws.lecture.data.entity.Enrollment;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Integer> {
	
	void deleteByLectureNoAndUserNo(int lectureNo, int no);

}
