package com.ssafy.osws.config.security;


import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class SecurityConfiguration {
	
	// jwtProvider
	private final JwtProvider jwtProvider;
	
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		
		configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000", "https://i8d203.p.ssafy.io", "http://i8d203.p.ssafy.io"));

		configuration.setAllowedOriginPatterns(Arrays.asList("*"));
		configuration.setAllowedHeaders(Arrays.asList("*"));
		configuration.setAllowedMethods(Arrays.asList("HEAD", "GET", "POST", "DELETE", "PUT", "OPTIONS"));
		configuration.setAllowCredentials(true);
		
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	   return http
			.formLogin().disable()
	    	.httpBasic().disable()
	        .csrf().disable()
	        .headers().frameOptions().disable()
	        .and()
	        .cors().configurationSource(corsConfigurationSource())
	        .and()
	        .sessionManagement()
	        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
	        .and()
	        .authorizeRequests()
	        .antMatchers(HttpMethod.OPTIONS).permitAll() // 브라우저가 보낸 preflight 요청 해결
	        .antMatchers("/", "/css/**", "/images/**", "/js/**", "/favicon.ico", "/h2-console/**").permitAll()
	        .antMatchers("/normal/**").hasAnyRole("normal", "admin")
	        .antMatchers("/teacher/**").hasAnyRole("teacher", "admin")
	        .antMatchers(HttpMethod.DELETE).hasAnyRole("teacher", "admin")
	        .antMatchers("/common/sign-out").hasAnyRole("teacher", "admin", "normal")
	        .antMatchers("/common/**", "/login/**", "/api/**").permitAll()
	    	.and()
	    	//== 필터 설정 == //
	    	.addFilterBefore(new JwtAuthenticatioFilter(jwtProvider), UsernamePasswordAuthenticationFilter.class)
	        .build();
	  }
	
	@Bean
	public BCryptPasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}

}
