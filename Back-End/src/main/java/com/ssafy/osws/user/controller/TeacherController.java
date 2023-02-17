package com.ssafy.osws.user.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.osws.user.dto.request.RequestCreateLecture;
import com.ssafy.osws.user.dto.request.RequestModifyLecture;
import com.ssafy.osws.user.dto.response.ResponseNormalInfo;
import com.ssafy.osws.user.dto.response.ResponseSimpleLecture;
import com.ssafy.osws.user.service.TeacherService;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/teacher")
@RequiredArgsConstructor
@Slf4j
public class TeacherController {	
	private final TeacherService teacherService;
	
	// 3개를 일단 한개로 합침. 
	@ApiOperation(
			value = "강의 목록 불러오기", 
			notes = "진행 중인 강의 목록을 반환한다. 진행 중인 강의가 없으면 null 반환")
	@GetMapping("/lecture/in-progress")
	public ResponseEntity<List<ResponseSimpleLecture>> getInProgressLectureList() {
		return new ResponseEntity<List<ResponseSimpleLecture>> (teacherService.getInProgressLectureList(getPhone()), HttpStatus.OK);
	}
	
	@ApiOperation( // 필요한 정보: 강사번호를 dto에 같이 포함시켜 요청한다. => 다시하기 REDO 
			value = "강의 생성 (lectureTime에서 day는 0:월 ~ 6:일 )", 
			notes = "강의 생성 요청을 처리한다. 성공하면 true, 실패하면 false")
	@PostMapping("/lecture")
	public ResponseEntity<Boolean> createLecture(@RequestBody RequestCreateLecture requestCreateLecture) {
		try {
			return new ResponseEntity<Boolean> (teacherService.createLecture(requestCreateLecture, getPhone()), HttpStatus.OK);			
		} catch (RuntimeException re) {
			return new ResponseEntity<Boolean> (false, HttpStatus.OK);
		}
	}
	
	@ApiOperation(
			value = "강의 참여자 정보 불러오기 ", 
			notes = "강의 참여자 정보를 반환한다. 없는 강의 번호면 null 반환")
	@GetMapping("/lecture/{lectureNo}/enrollment") 
	public ResponseEntity<List<ResponseNormalInfo>> getEnrollmentList(@PathVariable int lectureNo) {
		return new ResponseEntity<List<ResponseNormalInfo>> (teacherService.getEnrollmentList(lectureNo, getPhone()), HttpStatus.OK);
	}
	
	@ApiOperation(
			value = "강의 편집하기 ", 
			notes = "강의 편집 요청을 처리한다. 성공하면 true, 실패하면 false 반환")
	@PutMapping("/lecture")
	public ResponseEntity<Boolean> modifyLecture(@RequestBody RequestModifyLecture requestModifyLecture) {
		try {
			return new ResponseEntity<Boolean> (teacherService.modifyLecture(requestModifyLecture, getPhone()), HttpStatus.OK);			
		} catch (RuntimeException e) {
			log.error(e.getMessage());
			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
		}
	}
	
	private String getPhone() {
		return SecurityContextHolder.getContext().getAuthentication().getName();
	}
	
	
}
