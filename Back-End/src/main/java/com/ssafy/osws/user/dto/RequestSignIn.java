package com.ssafy.osws.user.dto;

import com.ssafy.osws.user.data.entity.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class RequestSignIn {

	private String id;
	private String password;
}
