package com.ssafy.osws.notice.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseNotice {
	private int no;
	private String subject;
	private String registeredDate;
}
