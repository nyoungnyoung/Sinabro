package com.ssafy.osws.main.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ssafy.osws.main.data.entity.SubCategory;

public interface SubCategoryRepository extends JpaRepository<SubCategory, Integer>{
	// Query 사용시 sub_category는 entity 클래스명과 동일하게 해줘야 mapped 에러가 안 난다. 
	@Query("select s from SubCategory s \r\n" + 
			"where s.categoryToSubCategory = :categoryNumber")
	List<SubCategory> findSubCategory(@Param("categoryNumber") int categoryNumber);
}
