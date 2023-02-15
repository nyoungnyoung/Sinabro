package com.ssafy.osws.user.dto.response;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseTeacherInfo {
	private String name;
	private String phone;
	private String email;
	private List<ResponseCareer> careerList;
}
