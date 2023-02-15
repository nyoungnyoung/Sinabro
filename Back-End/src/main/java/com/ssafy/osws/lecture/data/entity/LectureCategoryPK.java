package com.ssafy.osws.lecture.data.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class LectureCategoryPK implements Serializable{
	private int lectureToLectureCategory;
	private int subCategoryToLectureCategory;
}
