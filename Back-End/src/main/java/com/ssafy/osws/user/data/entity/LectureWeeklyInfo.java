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
@Table(name="lecture_weekly_info")
public class LectureWeeklyInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;
	
	@Column(name="lecture_to_lecture_weekly_info", nullable=false)
	private int lectureToLectureWeeklyInfo;
	
	@Column(name="content", nullable=false)
	private String content;
	
	@Column(name="original_name", nullable=true)
	private String originalName;
	
	@Column(name="saved_name", nullable=true)
	private String savedName;
	
	@Column(name="extension", nullable=true)
	private String extension;

	@Builder
	public LectureWeeklyInfo(int no, int lectureToLectureWeeklyInfo, String content, String originalName,
			String savedName, String extension) {
		super();
		this.no = no;
		this.lectureToLectureWeeklyInfo = lectureToLectureWeeklyInfo;
		this.content = content;
		this.originalName = originalName;
		this.savedName = savedName;
		this.extension = extension;
	}
	
}
