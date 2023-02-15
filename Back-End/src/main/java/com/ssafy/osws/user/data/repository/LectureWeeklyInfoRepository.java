package com.ssafy.osws.user.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.osws.user.data.entity.LectureWeeklyInfo;

public interface LectureWeeklyInfoRepository extends JpaRepository<LectureWeeklyInfo, Integer> {
	
}
