package com.ssafy.osws.user.dto;

import com.ssafy.osws.user.data.entity.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseSignIn {

	private String id;
	private String accessToken;
	private String refreshToken;
	
	public User toEntitiy() {
		return User.builder().userId(id).refreshToken(refreshToken).build();
	}
}
