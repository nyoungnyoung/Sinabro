package com.ssafy.osws.main.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.osws.main.dto.response.ResponseCategory;
import com.ssafy.osws.main.dto.response.ResponseLecture;
import com.ssafy.osws.main.dto.response.ResponsePriorityNotice;
import com.ssafy.osws.main.dto.response.ResponseSubCategory;

import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/main")
public class MainController {
	
	@ApiOperation(
			value = "주요 공지 출력", 
			notes = "메인페이지에 띄우는 주요 공지를 반환한다. 주요 공지가 없으면 null 반환")
	@GetMapping("/notice")
	public ResponseEntity<ResponsePriorityNotice> getPriorityNotice() {
		return null;
		
	}
	
	@ApiOperation(
			value = "대분류 불러오기", 
			notes = "메인페이지에 띄우는 대분류를 반환한다.")
	@GetMapping("/category")
	public ResponseEntity<List<ResponseCategory>> getCategoryList() {
		return null;
		
	}
	
	@ApiOperation(
			value = "대분류에 따른 소분류 불러오기", 
			notes = "대분류 선택시 나오는 소분류를 반환한다. 대분류가 전체일 경우 null 반환")
	@GetMapping("/category/{categoryNumber}")
	public ResponseEntity<List<ResponseSubCategory>> getSubCategoryList(@PathVariable() String categoryNumber) {
		return null;
		
	}
	
	@ApiOperation(
			value = "대분류에 따른 강의 불러오기", 
			notes = "대분류 선택시 나오는 강의를 반환한다. 대분류가 전체일 경우 모든 강의 반환")
	@GetMapping("/lecture/{categoryNumber}")
	public ResponseEntity<List<ResponseLecture>> getLectureList(@PathVariable() String categoryNumber) {
		return null;
	}
	
	@ApiOperation(
			value = "소분류에 따른 강의 불러오기", 
			notes = "소분류 선택시 나오는 강의를 반환한다. ")
	@GetMapping("lecture/{categoryNumber}/{subCategoryNumberList}")
	public ResponseEntity<List<ResponseLecture>> getLectureList(
			@PathVariable() String categoryNumber,
			@Parameter(name="subCategoryNumberList", description = "1,2,3,.. 처럼 ,로 구분한다.") @PathVariable() String subCategoryNumberList) {
		// subCategoryNumberList 는 , 기준으로 나눠야 한다.
		return null;
	}
	
	@ApiOperation(
			value = "검색한 강의 불러오기", 
			notes = "검색한 내용을 제목에 포함하는 강의를 반환한다. 없으면 null 반환")
	@GetMapping("search/{query}")
	public ResponseEntity<List<ResponseLecture>> searchLectureList(@PathVariable() String query) {
		// query내용을 포함하는 강의 반환
		return null;
	}

}
