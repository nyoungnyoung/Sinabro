package com.ssafy.osws.lecture.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.osws.lecture.data.entity.LectureCategory;

public interface LectureCategoryRepository extends JpaRepository<LectureCategory, Integer>{

	void deleteAllByLectureToLectureCategory(int lectureToLectureCategory);

}