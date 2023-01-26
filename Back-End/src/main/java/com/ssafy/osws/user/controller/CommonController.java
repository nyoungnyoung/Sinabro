package com.ssafy.osws.user.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.osws.user.dto.RequestAuthentificationNumber;
import com.ssafy.osws.user.dto.RequestSignIn;
import com.ssafy.osws.user.dto.ResponseSignIn;
import com.ssafy.osws.user.service.CommonService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/common")
public class CommonController {
	
	@Autowired
	private CommonService commonService;
	
	@ApiOperation(
			value="전화번호 조회",
			notes="DB 내부의 가입자 정보에 전화번호를 조회하고, 일치하는 정보가 있을 경우 True를, 없을 경우 False를 반환한다.")
	@PostMapping("/phone-check")
	public ResponseEntity<String> phoneCheck(@RequestBody RequestAuthentificationNumber requestAuthentificationNumber, HttpServletRequest request) {
		
		return null;
	}
	
	@ApiOperation(
			value="로그인",
			notes="일치하는 사용자가 있을 경우 아이디와 토큰들을, 없을 경우 null을 반환한다.")
	@PostMapping("/sign-in")
	public ResponseEntity<ResponseSignIn> signIn(@RequestBody RequestSignIn requestSignIn) {
		return new ResponseEntity<ResponseSignIn>(commonService.signIn(requestSignIn), HttpStatus.OK);
	}
}
