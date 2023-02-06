package com.ssafy.osws.lecture.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ssafy.osws.lecture.data.entity.Enrollment;
import com.ssafy.osws.user.data.entity.User;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Integer> {
	@Query("select u from User u \r\n" + 
			"left join Enrollment e on e.userToEnrollment = u.no \r\n" + 
			"where e.lectureToEnrollment = :lectureNo") 
	List<User> findByLectureId(@Param("lectureNo") int lectureNo);
	
	void deleteByLectureNoAndUserNo(int lectureNo, int no);

}
