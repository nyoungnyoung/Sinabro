package com.ssafy.osws.config.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;

public class JwtAuthenticatioFilter extends OncePerRequestFilter {
	private final JwtProvider jwtProvider;

	public JwtAuthenticatioFilter(JwtProvider jwtProvider) {
		this.jwtProvider = jwtProvider;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String accessToken = jwtProvider.resolveAccessToken(request);
	    String refreshToken = jwtProvider.resolveRefreshToken(request);
	    
	    if (accessToken != null) {
	    	try {
	    		String phone = jwtProvider.validateToken(accessToken);
	    		Authentication authentication = jwtProvider.getAuthentication(phone);
	    		SecurityContextHolder.getContext().setAuthentication(authentication);
	    	} catch (ExpiredJwtException e) {
	    		// accessToken 기간 만료, refreshToken 확인
	    		checkRefreshToken(refreshToken, response);
	    		return;
	    	} catch (JwtException e) {
	    		response.setStatus(500);
	    		return;
	      }
	    }
	    
	    filterChain.doFilter(request, response);
	}
	
	private void checkRefreshToken(String refreshToken, HttpServletResponse response) {
		if (refreshToken == null) {
			response.setStatus(401);
		} else {
			try {
				jwtProvider.validateToken(refreshToken);
			} catch (JwtException je) {
				response.setStatus(500);
			}
		}
	}

}
