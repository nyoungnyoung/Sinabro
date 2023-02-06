package com.ssafy.osws.user.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.osws.config.security.JwtProvider;
import com.ssafy.osws.user.dto.request.RequestCreateLecture;
import com.ssafy.osws.user.dto.response.ResponseNormalInfo;
import com.ssafy.osws.user.dto.response.ResponseSimpleLecture;
//import com.ssafy.osws.user.service.TeacherService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/teacher")
public class TeacherController {
	// TODO 강의 주차별 파일 추가 만들기
	// TODO 강의 주차별 파일 삭제 만들기
	// TODO 주차별 파일 다운로드
//	@Autowired
//	private JwtProvider jwtProvider;
//	
//	private TeacherService teacherService;
//	
//	public TeacherController(TeacherService teacherService) {
//		this.teacherService = teacherService;
//	}
	
//	@ApiOperation(
//			value = "진행 중인 강의 목록 불러오기 (try it out 불가)", 
//			notes = "진행 중인 강의 목록을 반환한다. 진행 중인 강의가 없으면 null 반환")
//	@GetMapping("/lecture/in-progress")
//	public ResponseEntity<List<ResponseSimpleLecture>> getInProgressLectureList() {
//		// 날짜 기준으로 진행 중인 강의 반환
//		return null;
//	}
//	
//	@ApiOperation(
//			value = "완료한 강의 목록 불러오기 (try it out 불가)", 
//			notes = "완료한 강의 목록을 반환한다. 완료한 강의가 없으면 null 반환")
//	@GetMapping("/lecture/done")
//	public ResponseEntity<List<ResponseSimpleLecture>> getDoneLectureList() {
//		return null;
//	}
//		
//	@ApiOperation(
//			value = "예정된 목록 불러오기 (try it out 불가)", 
//			notes = "예정된 강의 목록을 반환한다. 예정된 강의가 없으면 null 반환")
//	@GetMapping("/lecture/not-started")
//	public ResponseEntity<List<ResponseSimpleLecture>> getNotStartedLectureList() {
//		return null;
//	}
	
	// 위 3개를 일단 한개로 합침. 
	@ApiOperation(	// 필요정보: 강사번호를 보내야하는데 GET이라서 어쩔수 없이 URL에 담아서보냄.
			value = "강의 목록 불러오기", 
			notes = "진행 중인 강의 목록을 반환한다. 진행 중인 강의가 없으면 null 반환")
	@GetMapping("/lecture/{teacherNo}/in-progress")
	public ResponseEntity<List<ResponseSimpleLecture>> getInProgressLectureList(@PathVariable int teacherNo, HttpServletRequest request) {
//		String phone = jwtProvider.validateToken(jwtProvider.resolveAccessToken(request));
//		System.out.println(teacherNo);
//		return new ResponseEntity<List<ResponseSimpleLecture>> (teacherService.getInProgressLectureList(teacherNo), HttpStatus.OK);
		return null;
	}
	
	@ApiOperation( // 필요한 정보: 강사번호를 dto에 같이 포함시켜 요청한다. => 다시하기 REDO 
			value = "<수정필요!!> : 강의 생성 (try it out 불가)", 
			notes = "강의 생성 요청을 처리한다. 성공하면 true, 실패하면 false")
	@PostMapping("/lecture")
	public ResponseEntity<Boolean> createLecture(@RequestBody RequestCreateLecture requestCreateLecture) {
		//return new ResponseEntity<Boolean> (teacherService.createLecture(requestCreateLecture), HttpStatus.OK);
		return null;
	}
	
//	@ApiOperation(
//			value = "강의 상세 요청 (try it out 불가)", 
//			notes = "강의 상세 내용을 반환한다. 없는 강의 번호면 null 반환")
//	@GetMapping("/lecture/{lectureNo}")
//	public ResponseEntity<List<ResponseLectureDetail>> getLectureList(@PathVariable int lectureNo) {
//		return null;
//	}
	
	@ApiOperation(
			value = "강의 참여자 정보 불러오기 (try it out 불가)", 
			notes = "강의 참여자 정보를 반환한다. 없는 강의 번호면 null 반환")
	@GetMapping("/lecture/{lectureNo}/enrollment") 
	public ResponseEntity<List<ResponseNormalInfo>> getEnrollmentList(@PathVariable int lectureNo) {
		//return new ResponseEntity<List<ResponseNormalInfo>> (teacherService.getEnrollmentList(lectureNo), HttpStatus.OK);
		return null;
	}
	
//	@ApiOperation(
//			value = "강의 참여자 정보 삭제하기 (try it out 불가)", 
//			notes = "강의 참여자 정보 삭제 요청을 처리한다. 성공하면 true, 실패하면 false 반환")
//	@GetMapping("/lecture/{lectureNo}/enrollment/{userNo}")
//	public ResponseEntity<Boolean> deleteEnrollment(@PathVariable int lectureNo) {
//		return null;
//	}
	
	@ApiOperation(
			value = "강의 편집하기 (try it out 불가)", 
			notes = "강의 편집 요청을 처리한다. 성공하면 true, 실패하면 false 반환")
	@PutMapping("/lecture/{lectureNo}")
	public ResponseEntity<Boolean> modifyLecture(@PathVariable int lectureNo, @RequestBody RequestCreateLecture requestCreateLecture) {
		//return new ResponseEntity<Boolean> (teacherService.modifyLecture(lectureNo, requestCreateLecture), HttpStatus.OK);
		return null;
	}
	
	
//	@ApiOperation(
//			value = "강의 편집하기 (try it out 불가)", 
//			notes = "강의 편집 요청을 처리한다. 성공하면 true, 실패하면 false 반환")
//	@GetMapping("/lecture")
//	public ResponseEntity<Boolean> getLectureList() {
//		return null;
//	}
	
//	@ApiOperation(
//			value = "내 정보 반환 (try it out 불가)", 
//			notes = "내 정보를 반환한다. ")
//	@GetMapping("/my-info")
//	public ResponseEntity<ResponseTeacherInfo> getUserInfo() {
//		return null;
//		
//	}
	
//	@ApiOperation(
//			value = "강사 경력 추가 (try it out 불가)", 
//			notes = "경력 추가 요청을 처리한다. 성공하면 true, 실패하면 false 반환 ")
//	@PostMapping("/carrer")
//	public ResponseEntity<Boolean> addCareer(@RequestBody RequestCareer requestCareer) {
//		return null;
//		
//	}
	
}
