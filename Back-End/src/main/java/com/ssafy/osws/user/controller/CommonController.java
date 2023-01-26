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
import com.ssafy.osws.user.dto.RequestSignUp;
import com.ssafy.osws.user.dto.RequestSignIn;
import com.ssafy.osws.user.dto.ResponseSignIn;
import com.ssafy.osws.user.service.CommonService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/common")
public class CommonController {

	private CommonService commonService;

	@Autowired
	public CommonController(CommonService commonService) {
		this.commonService = commonService;
	}
	
	@ApiOperation(
			value="전화번호 조회",
			notes="DB 내부의 가입자 정보에 전화번호를 조회하고, 일치하는 정보가 있을 경우 True를, 없을 경우 False를 반환한다.")
	@PostMapping("/phone-check")
	public ResponseEntity<Boolean> phoneCheck(@RequestBody RequestAuthentificationNumber requestAuthentificationNumber, HttpServletRequest request) throws Exception {
		if (commonService.isSaved(requestAuthentificationNumber.getPhone())) {
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} else {
			return new ResponseEntity<Boolean>(false, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@ApiOperation(
			value="회원가입",
			notes="DB에 새로운 회원 정보를 저장하고, 정상적으로 회원가입이 되면 OK를, 실패할 경우 ERROR를 반환한다.")
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody RequestSignUp requestSignUp) {
	
		if (commonService.signUp(requestSignUp)) {
		return new ResponseEntity<String>("success", HttpStatus.OK);
		}
    	return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ApiOperation(
			value="로그인",
			notes="일치하는 사용자가 있을 경우 아이디와 토큰들을, 없을 경우 null을 반환한다.")
	@PostMapping("/sign-in")
	public ResponseEntity<ResponseSignIn> signIn(@RequestBody RequestSignIn requestSignIn) {
		return new ResponseEntity<ResponseSignIn>(commonService.signIn(requestSignIn), HttpStatus.OK);
	}
}
