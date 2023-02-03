package com.ssafy.osws.config.oauth.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.ssafy.osws.config.security.JwtProvider;
import com.ssafy.osws.user.auth.AuthUser;
import com.ssafy.osws.user.data.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class AuthenticationSuccessHandlerImpl implements AuthenticationSuccessHandler {
	private final JwtProvider jwtProvider;
    private final UserRepository userRepository;
    
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		response.getWriter().write("z");
		// TODO 사용자 정보 확인 후 번호가 없으면 -> 임시 액세스 토큰과 함께 이름, 번호 입력창으로 리다이렉트
		// TODO 사용자 정보 확인 후 번호가 있으면 -> 액세스 토큰, 리프레시 토큰, 사용자 아이디와 액세스 토큰 저장해주는 사이트로 이동 -> 프론트가 토큰 저장 후 자체 메인으로 다이렉트
		try {
            AuthUser authUser = (AuthUser) authentication.getPrincipal();

            // 사용자 번호 확인
            if(authUser.getPhone() == null) {
            	// TODO 사용자 정보 확인 후 번호가 없으면 -> 임시 액세스 토큰과 함께 이름, 번호 입력창으로 리다이렉트
            	System.out.println(authUser);
                
            } else {
            	// TODO 사용자 정보 확인 후 번호가 있으면 -> 액세스 토큰, 리프레시 토큰, 사용자 아이디와 액세스 토큰 저장해주는 사이트로 이동 -> 프론트가 토큰 저장 후 자체 메인으로 다이렉트
            }
        } catch (Exception e) {
            throw e;
        }
		

	}

}
