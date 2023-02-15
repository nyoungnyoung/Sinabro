package com.ssafy.osws.user.dto.response;

import com.ssafy.osws.user.data.entity.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseSignIn {
	private String role;
	private String accessToken;
	private String refreshToken;
	
	public User toEntitiy(User user) {
		return User.builder()
				.no(user.getNo())
				.originalName(user.getOriginalName())
				.savedName(user.getSavedName())
				.name(user.getName())
				.password(user.getPassword())
				.phone(user.getPhone())
				.role(user.getRole())
				.refreshToken(refreshToken)
				.build();
	}
}
