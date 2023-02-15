package com.ssafy.osws.lecture.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name="enrollment")
@IdClass(EnrollmentPK.class)
public class Enrollment {
	
	@Id
	@Column(name="lecture_to_enrollment", nullable=false)
	private int lectureNo;
	
	@Id
	@Column(name="user_to_enrollment", nullable=false)
	private int userNo;
	
	@Builder
	public Enrollment(int lectureNo, int userNo) {
		this.lectureNo = lectureNo;
		this.userNo = userNo;
	}
}
