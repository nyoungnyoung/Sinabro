package com.ssafy.osws.notice.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseNotice {
	private int no;
	private String subject;
	private String registeredDate;
}
