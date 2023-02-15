package com.ssafy.osws.lecture.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.osws.lecture.data.entity.LectureReview;

public interface LectureReviewRepository extends JpaRepository<LectureReview, Integer> {

	List<LectureReview> findAllByLectureNo(int lectureNo);

}
