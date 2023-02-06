package com.ssafy.osws.user.data.entity;

import java.sql.Time;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	
	@Column(name="lecture_to_lecture_time", nullable=false)
	private int lectureToLectureTime;
	
	@Column(name="day", nullable=false)
	private int day;
	
	@Column(name="start_time", nullable=false)
	private String startTime;
	
	@Column(name="runtime", nullable=false)
	private String runTime;

	@Builder
	public LectureTime(int no, int lectureToLectureTime, int day, String startTime, String runtime) {
		this.no = no;
		this.lectureToLectureTime = lectureToLectureTime;
		this.day = day;
		this.startTime = startTime;
		this.runTime = runtime;
	}

	public void setLectureToLectureTime(int lectureToLectureTime) {
		this.lectureToLectureTime = lectureToLectureTime;
	}
	
	
}
