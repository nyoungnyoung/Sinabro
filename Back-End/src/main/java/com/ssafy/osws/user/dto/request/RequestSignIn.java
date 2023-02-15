package com.ssafy.osws.user.dto.request;

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
