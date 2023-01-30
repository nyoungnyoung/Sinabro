package com.ssafy.osws.user.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.osws.main.dto.response.ResponseLecture;
import com.ssafy.osws.user.dto.response.ResponseUserInfo;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/normal")
public class NormalController {
	
	@ApiOperation(
			value = "신청한 강의 목록 반환", 
			notes = "신청한 강의 목록을 반환한다. 신청한 강의가 없으면 null 반환")
	@GetMapping("/lecture")
	public ResponseEntity<List<ResponseLecture>> getLectureList() {
		return null;
		
	}
	
	@ApiOperation(
			value = "내 정보 반환", 
			notes = "내 정보를 반환한다. ")
	@GetMapping("/my-info")
	public ResponseEntity<ResponseUserInfo> getUserInfo() {
		return null;
		
	}
	
	@ApiOperation(
			value = "내 정보 수정 요청 처리", 
			notes = "내 정보 수정 요청을 처리한다. 성공하면 true, 실패하면 false를 반환")
	@PutMapping("/my-info")
	public ResponseEntity<Boolean> modifyUserInfo() {
		return null;
		
	}
	
	// 강의 자료 다운로드 만들기 ㅎㅎ
}
