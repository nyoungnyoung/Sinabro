package com.ssafy.osws.user.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseUserDetailInfo {
	private int no;
	private String id;
	private String email;
	private String phone;
	private String name;
}
