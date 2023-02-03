package com.ssafy.osws.user.dto;

import com.ssafy.osws.user.data.entity.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RequestSignUp {

	private String id;
	private String email;
	private String phone;
	private String password;
	private String name;
    private String role;
 
    /* DTO -> Entity */
    public User toEntity() {
        User user = User.builder()
        		.userId(id)
        		.email(email)
        		.phone(phone)
        		.password(password)
                .name(name)
                .role(role == null ? "ROLE_normal" : role)
                .build();
        return user;
    }
}
