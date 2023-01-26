package com.ssafy.osws.user.dto;

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
}
