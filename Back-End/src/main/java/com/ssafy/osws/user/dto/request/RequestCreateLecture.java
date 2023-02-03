package com.ssafy.osws.user.dto.request;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class RequestCreateLecture {
	private String subject;
	private String startDate;
	private String endDate;
	private String content;
	private String originalName;
	private int maxOccupancy;
	
	private List<RequestLectureTime> lectureTimList;
	private List<RequestLectureWeeklyInfo> weeklyInfoList;

}
