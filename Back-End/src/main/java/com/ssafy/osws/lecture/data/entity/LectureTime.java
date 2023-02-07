package com.ssafy.osws.lecture.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity 
@Table(name="lecture_time")
public class LectureTime {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;
		
	@Column(name = "day", nullable = false)
	private int day;
	
	@Column(name = "start_time", nullable = false)
	private String startTime;
	
	@Column(name = "runtime", nullable = false)
	private String runTime;

//	@Column(name = "lecture_to_lecture_time", nullable = false)
//	private int lectureNo;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="lecture_to_lecture_time")
	Lecture lecture;
	
//	public void setLectureToLectureTime(int lectureNo) {
//		this.lectureNo = lectureNo;
//	}
	
	@Builder
	public LectureTime(int no, int day, String startTime, String runTime, Lecture lecture) {
		super();
		this.no = no;
		this.day = day;
		this.startTime = startTime;
		this.runTime = runTime;
		this.lecture = lecture;
	}
}
