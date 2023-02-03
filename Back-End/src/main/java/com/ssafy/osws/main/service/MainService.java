package com.ssafy.osws.main.service;

import java.util.List;

import com.ssafy.osws.main.dto.response.ResponseCategory;
import com.ssafy.osws.main.dto.response.ResponseLecture;
import com.ssafy.osws.main.dto.response.ResponsePriorityNotice;
import com.ssafy.osws.main.dto.response.ResponseSubCategory;

public interface MainService {
	ResponsePriorityNotice getPriorityNotice();
	List<ResponseCategory> getCategoryList(); 
	List<ResponseSubCategory> getSubCategoryList(String categoryNumber);
	List<ResponseLecture> getLectureListByCategory(String categoryNumber);
	List<ResponseLecture> getLectureListBySubCategory(String categoryNumber);
	List<ResponseLecture> searchLectureList(String query);
}
