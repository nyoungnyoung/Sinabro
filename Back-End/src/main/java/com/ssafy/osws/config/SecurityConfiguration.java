package com.ssafy.osws.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {
	
	
	private final JwtProvider jwtProvider;
	
	@Autowired
	public SecurityConfiguration(JwtProvider jwtProvider) {
		this.jwtProvider = jwtProvider;
	}
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	    http.httpBasic().disable()
	        .csrf().disable()
	        .sessionManagement()
	        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
	        .and()
	        .authorizeRequests()
	        .antMatchers(HttpMethod.OPTIONS).permitAll(); // 브라우저가 보낸 preflight 요청 해결

	    return http.build();
	  }

}
