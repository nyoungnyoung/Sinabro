package com.ssafy.osws.config;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class CheckRole {
	public static boolean hasNormal() { 
		Collection<? extends GrantedAuthority> authorities = SecurityContextHolder.getContext().getAuthentication().getAuthorities();
		return authorities.stream().filter(o -> o.getAuthority().equals("ROLE_normal")).findAny().isPresent();
	}
	
	public static boolean hasTeacher() { 
		Collection<? extends GrantedAuthority> authorities = SecurityContextHolder.getContext().getAuthentication().getAuthorities();
		return authorities.stream().filter(o -> o.getAuthority().equals("ROLE_teacher")).findAny().isPresent();
	}

}
