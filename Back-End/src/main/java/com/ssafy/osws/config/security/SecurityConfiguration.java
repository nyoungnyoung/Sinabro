package com.ssafy.osws.config.security;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.ssafy.osws.user.service.impl.OAuth2UserServiceImpl;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class SecurityConfiguration {
	
	private final OAuth2UserServiceImpl oAuth2UserServiceImpl;
	//인증 성공 핸들러
    private final AuthenticationSuccessHandler authenticationSuccessHandler;
    //인증 실패 핸들러
    private final AuthenticationFailureHandler authenticationFailureHandler;
	
	// jwtProvider
	private final JwtProvider jwtProvider;
	
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		
		configuration.setAllowedOrigins(Arrays.asList("https://i8d203.p.ssafy.io/**", "http://localhost:3000/**"));
		configuration.setAllowedOriginPatterns(Arrays.asList("*"));
		configuration.setAllowedMethods(Arrays.asList("HEAD", "POST", "DELETE", "PUT", "OPTIONS"));
		configuration.setAllowedHeaders(Arrays.asList("*"));
		configuration.setAllowCredentials(true);
		
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	   return http
			.cors().configurationSource(corsConfigurationSource())
			.and()
			.formLogin().disable()
	    	.httpBasic().disable()
	        .csrf().disable()
	        .headers().frameOptions().disable()
	        .and()
	        .sessionManagement()
	        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
	        .and()
	        .authorizeRequests()
	        .antMatchers(HttpMethod.OPTIONS).permitAll() // 브라우저가 보낸 preflight 요청 해결
	        .antMatchers("/", "/css/**", "/images/**", "/js/**", "/favicon.ico", "/h2-console/**").permitAll()
	        .antMatchers("/normal/**").hasAnyRole("normal", "admin")
	        .antMatchers("/teacher/**").hasAnyRole("teacher", "admin")
	        .antMatchers("/common/sign-out").hasAnyRole("teacher", "admin", "normal")
	        .antMatchers("/common/**", "/login/**").permitAll()
	        //.antMatchers("/oauth2/**").authenticated() 소셜 로그인
	    	.and()
	    	//== 필터 설정 == //
	    	.addFilterBefore(new JwtAuthenticatioFilter(jwtProvider), UsernamePasswordAuthenticationFilter.class)
	        .addFilterBefore(new JwtExceptionFilter(), JwtAuthenticatioFilter.class)
		  	//== 소셜 로그인 설정 ==//
	        /*
	        .oauth2Login()
	        .userInfoEndpoint().userService(oAuth2UserServiceImpl)
	        .and()
	        .successHandler(authenticationSuccessHandler) //동의하고 계속하기를 눌렀을 때 Handler
	        .failureHandler(authenticationFailureHandler); //소셜 로그인 실패했을 때 Handler;
	        */
	        .build();
	  }
	
	@Bean
	public BCryptPasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}

}
