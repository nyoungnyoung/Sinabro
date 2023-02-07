package com.ssafy.osws.lecture.data.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ssafy.osws.lecture.data.entity.Lecture;

public interface LectureRepository extends JpaRepository<Lecture, Integer> {
	@Query("select l from Lecture l where l.no IN (select lc.lectureToLectureCategory from LectureCategory lc \r\n" + 
			"join SubCategory sc \r\n" + 
			"on lc.subCategoryToLectureCategory = sc.no \r\n" +  
			"where sc.categoryToSubCategory = :categoryNumber) ") 
	List<Lecture> findLectureByCategory(@Param("categoryNumber") int categoryNumber, Pageable pageable);

	@Query("select l from Lecture l order by no ASC") 
	List<Lecture> findAllLectures(PageRequest of);
	
	@Query("select l from Lecture l where l.no in " 
			+ "(select lc.lectureToLectureCategory from LectureCategory lc "
			+ "where lc.subCategoryToLectureCategory in :list) ") 
	List<Lecture> findLectureBySubCategory(@Param("list") List<Integer> list, Pageable pageable);

	@Query("Select l from Lecture l where l.subject like %:query%")
	List<Lecture> findBySubjectContaining(@Param("query") String query, Pageable pageable);
	
	@Query("select l from Lecture l " + 
			"left join User u on l.user.no = u.no where l.endDate > now() and u.phone = :phone") 
	List<Lecture> getInProgressLectureList(@Param("phone") String phone, Pageable pageable);
}