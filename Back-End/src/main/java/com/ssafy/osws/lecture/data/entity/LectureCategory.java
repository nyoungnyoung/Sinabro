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
@IdClass(LectureCategoryPK.class)
@Table(name="lecture_category")
public class LectureCategory {
	@Id
	@Column(name="lecture_to_lecture_category", nullable=false)
	private int lectureToLectureCategory;
	
	@Column(name="sub_category_to_lecture_category", nullable=false)
	private int subCategoryToLectureCategory;

	@Builder
	public LectureCategory(int lectureToLectureCategory, int subCategoryToLectureCategory) {
		this.lectureToLectureCategory = lectureToLectureCategory;
		this.subCategoryToLectureCategory = subCategoryToLectureCategory;
	}
	
}
