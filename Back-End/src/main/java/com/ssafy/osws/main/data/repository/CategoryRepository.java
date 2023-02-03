package com.ssafy.osws.main.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.osws.main.data.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {	
	
}
