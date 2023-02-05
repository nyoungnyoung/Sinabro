package com.ssafy.osws.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class RequestSignIn {

	private String phone;
	private String password;
}
