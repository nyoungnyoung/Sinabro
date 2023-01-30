package com.ssafy.osws.lecture.dto.response;

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
	
	public boolean isEnrolled() {
		return this.enrolled;
	}

}
