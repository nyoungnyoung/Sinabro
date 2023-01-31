package com.ssafy.osws.user.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class RequestLectureTime {
	private int day;
	private String startTime;
	private String runTime;
}
