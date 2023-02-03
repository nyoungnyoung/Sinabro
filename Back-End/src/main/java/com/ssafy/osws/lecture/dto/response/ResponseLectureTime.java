package com.ssafy.osws.lecture.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseLectureTime {
	private int day;
	private String startTime;
	private String runTime;

}
