package com.ssafy.osws.openvidu.dto.response;

import com.ssafy.osws.user.data.entity.User;

import lombok.Data;

@Data
public class ResponseCreateConnection {
	private String subject;
	private String name;
	private String token;
	private String role;
	public void setUserInfo(User user) {
		this.name = user.getName();
		this.role = user.getRole().split("_")[1];
		
	}
}
