package com.ssafy.osws.lecture.data.entity;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.ssafy.osws.user.data.entity.User;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity 
@Table(name="lecture_time")
public class LectureTime {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;
	
	@Column(name = "lecture_to_lecture_time", nullable = false)
	private int lectureNo;
	
	@Column(name = "day", nullable = false)
	private int day;
	
	@Column(name = "start_time", nullable = false)
	private Timestamp startTime;
	
	@Column(name = "runtime", nullable = false)
	private Timestamp runTime;

	public void setLectureToLectureTime(int lectureNo) {
		this.lectureNo = lectureNo;
		
	}
}
