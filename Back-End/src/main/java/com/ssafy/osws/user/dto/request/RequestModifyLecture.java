package com.ssafy.osws.user.dto.request;

import java.util.Date;
import java.util.List;

import com.ssafy.osws.lecture.data.entity.Lecture;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class RequestModifyLecture {
	private int no;
	private String subject;
	private Date startDate;
	private Date endDate;
	private String content;
	private String originalName;
	private int maxOccupancy;
//	private int teacherToLecture;
	
	private List<RequestLectureTime> lectureTimeList;
//	private List<RequestLectureWeeklyInfo> weeklyInfoList;
	private List<Integer> subCategoryList;
	
	/* DTO -> Entity */
    public Lecture toEntity() {
    	Lecture lecture = Lecture.builder()
    			.no(no)
        		.subject(subject)
        		.startDate(startDate)
        		.endDate(endDate)
                .content(content)
                .originalName(originalName)
                .maxOccupancy(maxOccupancy)
                .build();
    	
        return lecture;
    }
    
}
