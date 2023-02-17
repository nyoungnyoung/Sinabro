package com.ssafy.osws.user.controller;

import java.util.List;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.osws.main.dto.response.ResponseLecture;
import com.ssafy.osws.user.service.NormalService;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/normal")
@RequiredArgsConstructor
public class NormalController {
	
	private final NormalService normalService;
	
	
	@ApiOperation(
			value = "신청한 강의 목록 반환", 
			notes = "신청한 강의 목록을 반환한다. 신청한 강의가 없으면 null 반환")
	@GetMapping("/lecture")
	public ResponseEntity<List<ResponseLecture>> getLectureList() {
		return new ResponseEntity<>(normalService.getLectureList(getPhone()), HttpStatus.OK);
	}
	
	@ApiOperation(
			value = "수강 신청 요청", 
			notes = "수강 신청 요청을 처리한다.. 성공하면 true, 실패하면 false 반환")
	@PostMapping("/lecture/{lectureNo}")
	public ResponseEntity<Boolean> enrollLecture(@PathVariable() int lectureNo) {
		try {
			return new ResponseEntity<>(normalService.enrollLecture(lectureNo, getPhone()), HttpStatus.OK);
		} catch (RuntimeException e ) {
			return new ResponseEntity<>(false, HttpStatus.OK);
		}
		
	}
	
	@ApiOperation(
			value = "취소 요청", 
			notes = "취소 요청을 처리한다. 성공하면 true 아니면 false 반환")
	@DeleteMapping("/lecture/{lectureNo}")
	public ResponseEntity<Boolean> cancelEnrolledLecture(@PathVariable int lectureNo) {
		try {
			return new ResponseEntity<>(normalService.cancelEnrolledLecture(lectureNo, getPhone()), HttpStatus.OK);
		} catch (RuntimeException e ) {
			return new ResponseEntity<>(false, HttpStatus.OK);
		}
	}
	
	private String getPhone() {
		return SecurityContextHolder.getContext().getAuthentication().getName();
	}
}
