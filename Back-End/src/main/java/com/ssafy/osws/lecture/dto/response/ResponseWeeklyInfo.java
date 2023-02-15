package com.ssafy.osws.lecture.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseWeeklyInfo {
	private int no;
	private String content;
	private String originalName;
	private String savedName;
	private String extension;
}
