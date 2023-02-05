package com.ssafy.osws.user.controller;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.http.HttpStatus;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.osws.config.security.JwtProvider;
import com.ssafy.osws.main.dto.response.ResponseLecture;
//import com.ssafy.osws.user.dto.response.ResponseNormalInfo;
import com.ssafy.osws.user.service.CommonService;
import com.ssafy.osws.user.service.NormalService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/normal")
public class NormalController {
	
	private final NormalService normalService;
	
	public NormalController(NormalService normalService) {
		this.normalService = normalService;
	}
	// TODO 강의 입장 제작
	
	@Autowired
	private JwtProvider jwtProvider;
	
	@ApiOperation(
			value = "신청한 강의 목록 반환", 
			notes = "신청한 강의 목록을 반환한다. 신청한 강의가 없으면 null 반환")
	@GetMapping("/lecture")
	public ResponseEntity<List<ResponseLecture>> getLectureList(HttpServletRequest request) {
		String phone = jwtProvider.validateToken(jwtProvider.resolveAccessToken(request));
		return new ResponseEntity<>(normalService.getLectureList(phone), HttpStatus.OK);
	}
	
	@ApiOperation(
			value = "수강 신청 요청", 
			notes = "수강 신청 요청을 처리한다.. 성공하면 true, 실패하면 false 반환")
	@PostMapping("/lecture/{lectureNo}")
	public ResponseEntity<Boolean> enrollLecture(@PathVariable() int lectureNo, HttpServletRequest request) {
		String phone = jwtProvider.validateToken(jwtProvider.resolveAccessToken(request));
		try {
			return new ResponseEntity<>(normalService.enrollLecture(lectureNo, phone), HttpStatus.OK);
		} catch (RuntimeException e ) {
			return new ResponseEntity<>(false, HttpStatus.OK);
		}
		
	}
	
	@ApiOperation(
			value = "취소 요청", 
			notes = "취소 요청을 처리한다. 성공하면 true 아니면 false 반환")
	@DeleteMapping("/lecture/{lectureNo}")
	public ResponseEntity<Boolean> cancelEnrolledLecture(@PathVariable int lectureNo, HttpServletRequest request) {
		try {
			String phone = jwtProvider.validateToken(jwtProvider.resolveAccessToken(request));
			return new ResponseEntity<>(normalService.cancelEnrolledLecture(lectureNo, phone), HttpStatus.OK);
		} catch (RuntimeException e ) {
			return new ResponseEntity<>(false, HttpStatus.OK);
		}
	}
	
//	@ApiOperation(
//			value = "내 정보 반환 (try it out 불가)", 
//			notes = "내 정보를 반환한다. ")
//	@GetMapping("/my-info")
//	public ResponseEntity<ResponseNormalInfo> getUserInfo() {
//		return null;
//		
//	}
//	
//	@ApiOperation(
//			value = "내 정보 수정 요청 처리 (try it out 불가)", 
//			notes = "내 정보 수정 요청을 처리한다. 성공하면 true, 실패하면 false를 반환")
//	@PutMapping("/my-info")
//	public ResponseEntity<Boolean> modifyUserInfo() {
//		return null;
//		
//	}
}
