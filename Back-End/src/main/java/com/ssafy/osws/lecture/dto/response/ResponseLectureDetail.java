package com.ssafy.osws.lecture.dto.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseLectureDetail {
	private int no;
	private String subject;
	private String name;
	private String startDate;
	private String endDate;
	private String content;
	private String savedName;
	@JsonProperty("isEnrolled")
	private Boolean enrolled;
	
	List<ResponseLectureTime> lectureTimeList;
	
	public boolean isEnrolled() {
		return this.enrolled;
	}

	@Override
	public String toString() {
		return "ResponseLectureDetail [no=" + no + ", subject=" + subject + ", name=" + name + ", startDate="
				+ startDate + ", endDate=" + endDate + ", content=" + content + ", savedName=" + savedName
				+ ", enrolled=" + enrolled + ", lectureTimeList=" + lectureTimeList + "]";
	}
	
}
