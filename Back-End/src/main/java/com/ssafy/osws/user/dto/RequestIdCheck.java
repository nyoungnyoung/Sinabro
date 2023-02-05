package com.ssafy.osws.user.dto;

import com.ssafy.osws.user.data.entity.User;

public class RequestIdCheck {
	private String id;
	
	/* DTO -> Entity */
    public User toEntity() {
        User user = User.builder()
        		.phone(id)
        		.build();
        return user;
    }
}
