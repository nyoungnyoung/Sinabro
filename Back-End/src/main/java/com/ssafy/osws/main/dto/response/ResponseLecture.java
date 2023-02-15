package com.ssafy.osws.main.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseLecture {
	private int no;
	private String subject;
	private String startDate;
	private String endDate;
	private String content;
	private String savedName;
}
