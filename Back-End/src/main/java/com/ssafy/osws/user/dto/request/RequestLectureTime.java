package com.ssafy.osws.user.dto.request;

import com.ssafy.osws.lecture.data.entity.Lecture;
import com.ssafy.osws.lecture.data.entity.LectureTime;

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
	
	public LectureTime toEntity(Lecture lecture) {
		return LectureTime.builder()
			.day(day)
			.startTime(startTime)
			.runTime(runTime)
			.lecture(lecture)
			.build();
	}
}
