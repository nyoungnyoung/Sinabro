package com.ssafy.osws.user.data.entity;


import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name="user")
public class User implements UserDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;
	
	@Column(name="original_name", nullable=true)
	private String originalName;
	
	@Column(name="saved_name", nullable=true)
	private String savedName;
	
	@Column(name="phone", nullable=false)
	private String phone;
	
	@Column(name="password", nullable=true)
	private String password;
	
	@Column(name="refresh_token", nullable=true)
	private String refreshToken;
	
	@Column(name="name", nullable=false)
	private String name;
	
	@Column(name="role", nullable=false)
	private String role;

	@Builder
	public User(int no, String originalName, String savedName, String phone, String password,
			String refreshToken, String name, String role) {
		this.no = no;
		this.originalName = originalName;
		this.savedName = savedName;
		this.phone = phone;
		this.password = password;
		this.refreshToken = refreshToken;
		this.name = name;
		this.role = role;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<String> roles = new ArrayList<>();
		roles.add(role);
		return roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
	}

	@Override
	public boolean isAccountNonExpired() {
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.phone;
	}

	public void updateRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken; 
	}

	public void updatePassword(String encode) {
		this.password = encode;	
	}
}
