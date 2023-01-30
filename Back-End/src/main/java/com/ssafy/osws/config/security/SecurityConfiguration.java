package com.ssafy.osws.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

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
	        .antMatchers(HttpMethod.OPTIONS).permitAll() // 브라우저가 보낸 preflight 요청 해결
	        .antMatchers("/common/sign-out/{userId}").hasAnyRole("teacher", "admin", "normal")
	        .antMatchers("/common/**").permitAll()
	    	.and()
	    	.addFilterBefore(new JwtAuthenticatioFilter(jwtProvider), UsernamePasswordAuthenticationFilter.class)
	        .addFilterBefore(new JwtExceptionFilter(), JwtAuthenticatioFilter.class);
	    return http.build();
	  }
	
	@Bean
	public BCryptPasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}

}
