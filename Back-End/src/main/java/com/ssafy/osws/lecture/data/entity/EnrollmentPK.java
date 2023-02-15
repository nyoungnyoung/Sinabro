package com.ssafy.osws.lecture.data.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class EnrollmentPK implements Serializable {
	private int lectureNo;
	private int userNo;
}
