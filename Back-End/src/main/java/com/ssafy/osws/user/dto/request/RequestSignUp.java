package com.ssafy.osws.user.dto.request;

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

	private String phone;
	private String password;
	private String name;
 
    /* DTO -> Entity */
    public User toEntity() {
        User user = User.builder()
        		.phone(phone)
        		.password(password)
                .name(name)
                .role("ROLE_normal")
                .build();
        return user;
    }
}
