package com.ssafy.osws.user.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name="enrollment")
public class Enrollment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int lectureToEnrollment;
	
	@Column(name="user_to_enrollment", nullable=false)
	private String userToEnrollment;

	@Builder
	public Enrollment(int lectureToEnrollment, String userToEnrollment) {
		this.lectureToEnrollment = lectureToEnrollment;
		this.userToEnrollment = userToEnrollment;
	}

}
