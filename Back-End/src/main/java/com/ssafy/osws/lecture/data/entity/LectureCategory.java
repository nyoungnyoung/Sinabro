package com.ssafy.osws.lecture.data.entity;

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
@Table(name="lecture_category")
public class LectureCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int lectureToLectureCategory;
	
	@Column(name="sub_category_to_lecture_category", nullable=false)
	private String subCategoryToLectureCategory;

	@Builder
	public LectureCategory(int lectureToLectureCategory, String subCategoryToLectureCategory) {
		this.lectureToLectureCategory = lectureToLectureCategory;
		this.subCategoryToLectureCategory = subCategoryToLectureCategory;
	}
	
}
