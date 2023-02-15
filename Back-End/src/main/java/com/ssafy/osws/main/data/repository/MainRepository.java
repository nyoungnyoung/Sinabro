package com.ssafy.osws.main.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.osws.main.data.entity.Category;

public interface MainRepository extends JpaRepository<Category, Integer> {

	List<Category> findAllByOrderByNoAsc();

}
