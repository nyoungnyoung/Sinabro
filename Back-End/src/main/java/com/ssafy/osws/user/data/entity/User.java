package com.ssafy.osws.user.data.entity;


import java.util.Collection;

import javax.persistence.*;

import org.springframework.security.core.GrantedAuthority;
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
	
	@Column(name="id", nullable=false)
	private String id;
	
	@Column(name="email", nullable=true)
	private String email;
	
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
	public User(String originalName, String savedName, String id, String email, String phone, String password,
			String refreshToken, String name, String role) {
		this.originalName = originalName;
		this.savedName = savedName;
		this.id = id;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.refreshToken = refreshToken;
		this.name = name;
		this.role = role;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
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
}
