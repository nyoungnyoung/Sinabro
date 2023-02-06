package com.ssafy.osws.user.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.osws.user.data.entity.LectureTime;

public interface LectureTimeRepository extends JpaRepository<LectureTime, Integer> {

}
