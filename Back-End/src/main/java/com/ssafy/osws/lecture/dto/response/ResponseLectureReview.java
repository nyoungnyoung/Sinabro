package com.ssafy.osws.lecture.dto.response;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseLectureReview {
	private int no;
	private String name;
	private LocalDateTime time;
	private String content;
	private int starPoint;
}
