package com.ssafy.osws.user.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.osws.user.dto.request.RequestAuthentificationNumber;
import com.ssafy.osws.user.dto.request.RequestNewPassword;
import com.ssafy.osws.user.dto.request.RequestSignIn;
import com.ssafy.osws.user.dto.request.RequestSignUp;
import com.ssafy.osws.user.dto.response.ResponseSignIn;
import com.ssafy.osws.user.service.CommonService;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/common")
@RequiredArgsConstructor
public class CommonController {
	
	private final CommonService commonService;

	@ApiOperation(
			value = "전화번호 조회", 
			notes = "DB 내부의 가입자 정보에 전화번호를 조회하고, 일치하는 정보가 있을 경우 True를, 없을 경우 False를 반환한다.")
	@PostMapping("/phone-check")
	public ResponseEntity<Boolean> phoneCheck(@RequestBody RequestAuthentificationNumber requestAuthentificationNumber, HttpServletRequest request) throws Exception {
		
		return new ResponseEntity<Boolean>(commonService.isSaved(requestAuthentificationNumber.getPhone()), HttpStatus.OK);
		
	}

	@ApiOperation(
			value = "인증번호 발송", 
			notes = "입력된 전화번호로 인증번호를 발송하고, 발송된 인증번호를 반환한다. 실패할 경우 fail을 반환한다.")
	@PostMapping("/send-auth-code")
	public ResponseEntity<String> sendAuthCode(@RequestBody RequestAuthentificationNumber requestAuthentificationNumber, HttpServletRequest request) {
		try {
			String authCode = commonService.sendAuthCode(requestAuthentificationNumber.getPhone());
			return new ResponseEntity<String>(authCode, HttpStatus.OK);
		} catch (Exception exception) {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@ApiOperation(
			value = "비밀번호 변경",
			notes = "새로운 비밀번호를 입력 후 DB에 반영한다. 인증 단계에서 입력했던 전화번호와 새로운 비밀번호를 받는다. 성공 시 ture를, 실패할 시 false을 반환한다.")
	@PostMapping("/change-password")
	public ResponseEntity<Boolean> changePassword(@RequestBody RequestNewPassword requestNewPassword, HttpServletRequest request) throws Exception {
		try {
			commonService.changePassword(requestNewPassword.getPhone(), requestNewPassword.getPassword());
			return new ResponseEntity<>(true, HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@ApiOperation(
			value = "회원가입", 
			notes = "DB에 새로운 회원 정보를 저장하고, 정상적으로 회원가입이 되면 OK를, 실패할 경우 ERROR를 반환한다.")
	@PostMapping("/sign-up")
	public ResponseEntity<Boolean> signUp(@RequestBody RequestSignUp requestSignUp) {
		return new ResponseEntity<Boolean>(commonService.signUp(requestSignUp), HttpStatus.OK);
	}

	@ApiOperation(
			value = "로그인", 
			notes = "일치하는 사용자가 있을 경우 토큰들을, 없을 경우 null을 반환한다.")
	@PostMapping("/sign-in")
	public ResponseEntity<ResponseSignIn> signIn(@RequestBody RequestSignIn requestSignIn) {
		return new ResponseEntity<ResponseSignIn>(commonService.signIn(requestSignIn), HttpStatus.OK);
	}
	
	@ApiOperation(
			value="로그아웃",
			notes="성공적으로 로그아웃하면 true, 실패하면 false를 반환한다.")
	@GetMapping("/sign-out")
	public ResponseEntity<Boolean> signOut() {
		return new ResponseEntity<Boolean>(commonService.signOut(SecurityContextHolder.getContext().getAuthentication().getName()), HttpStatus.OK);
	}
}
