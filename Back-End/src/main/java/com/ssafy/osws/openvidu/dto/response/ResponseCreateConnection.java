package com.ssafy.osws.openvidu.dto.response;


import lombok.Data;

@Data
public class ResponseCreateConnection {
	private String subject;
	private String name;
	private String token;
	private String teacher;
}
