package com.ssafy.osws.config;

import java.security.Key;
import java.util.Calendar;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtProvider {
	// 랜덤 키
	private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
	
	/*
	 * access token 생성
	 */
	public String createAccessToken(String userId) {
        String jwt = Jwts.builder()
        		.setSubject(userId)
                .setExpiration(new Date(System.currentTimeMillis() + 1800000))
                .signWith(key).compact();
        return jwt;
    }
	
    /*
     * refresh token 생성
     */
    public String createRefreshToken(String userId) {
        Calendar expiredDate = Calendar.getInstance();
        expiredDate.add(Calendar.DAY_OF_MONTH, 14);
        String jwt = Jwts.builder()
        		.setSubject(userId)
                .setExpiration(expiredDate.getTime())
                .signWith(key).compact();
        return jwt;
    }
    
    /*
     * http 헤더에서 access 토큰 가져오기
     */
    public String resolveAccessToken(HttpServletRequest request) {
      return request.getHeader("X-ACCESS-TOKEN");
    }

    /*
     * http 헤더에서 refresh 토큰 가져오기
     */
    public String resolveRefreshToken(HttpServletRequest request) {
      return request.getHeader("X-REFRESH-TOKEN");
    }
    
    /*
     * 토큰에서 사용자 아이디를 찾아 반환한다.
     * 그 과정에서 토큰 유효 기간이 만료되면 ExpiredJwtException을 던지고
     * 토큰이 잘 못된 경우 JwtException을 던진다.
     */
    public String validateToken(String token) throws ExpiredJwtException, JwtException {
    	return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
