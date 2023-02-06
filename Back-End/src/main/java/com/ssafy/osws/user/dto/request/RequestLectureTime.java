package com.ssafy.osws.user.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class RequestLectureTime {
	private int day;
	private String startTime; 	// "kk:mm:ss" 형식
	private String runTime;		// "kk:mm:ss" 형식
}
