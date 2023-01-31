package com.ssafy.osws.user.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.osws.user.dto.RequestSignUp;
import com.ssafy.osws.user.dto.response.ResponseUserDetailInfo;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@ApiOperation(
			value = "관리자가 강사와 사용자 회원가입 (try it out 불가)", 
			notes = "관리자가 강사와 사용자 회원가입을 해준다. 성공하면 true, 실패하면 false")
	@PostMapping("/sign-up")
	public ResponseEntity<Boolean> signUp(@RequestBody RequestSignUp requestSignUp) {
		return null;
	}
	
	@ApiOperation(
			value = "관리자 회원목록 조회 (try it out 불가)", 
			notes = "관리자가 강사나 사용자 목록을 반환한다. 없으면 null 반환")
	@GetMapping("/list/{role}")
	public ResponseEntity<List<ResponseUserDetailInfo>> getUserList(@PathVariable() String role) {
		return null;
	}
	
	@ApiOperation(
			value = "관리자 회원 상세 정보 조회 (try it out 불가)", 
			notes = "관리자가 강사나 사용자 상세 정보를 반환한다. 없으면 null 반환")
	@GetMapping("/my-info/{userNo}")
	public ResponseEntity<?> getUserInfo(@PathVariable() int userNo) {
		// 선생이면 ResponseTeacherInfo, 일반 사용자면 ResponseNormalInfo
		return null;
	}
	
	@ApiOperation(
			value = "관리자 회원 삭제 요청 (try it out 불가)", 
			notes = "관리자가 강사나 사용자 삭제 요청을 처리한다. 성공하면 true, 실패하면 false")
	@DeleteMapping("/my-info/{userNo}")
	public ResponseEntity<Boolean> deleteUser(@PathVariable() int userNo) {
		return null;
	}
	
	@ApiOperation(
			value = "관리자 검색 요청 (try it out 불가)", 
			notes = "검색한 내용과 같은 이름의 사용자 목록을 반환한다. 없으면 null 반환")
	@DeleteMapping("/search/{userName}")
	public ResponseEntity<List<ResponseUserDetailInfo>> searchUser(@PathVariable() String userName) {
		return null;
	}
}
