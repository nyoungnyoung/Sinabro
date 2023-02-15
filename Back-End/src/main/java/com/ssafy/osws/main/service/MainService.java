package com.ssafy.osws.main.service;

import java.util.List;

import com.ssafy.osws.lecture.dto.response.ResponseLectureDetail;
import com.ssafy.osws.main.dto.response.ResponseCategory;
import com.ssafy.osws.main.dto.response.ResponsePriorityNotice;
import com.ssafy.osws.main.dto.response.ResponseSubCategory;

public interface MainService {
	ResponsePriorityNotice getPriorityNotice() throws Exception;
	List<ResponseCategory> getCategoryList() throws Exception;
	List<ResponseSubCategory> getSubCategoryList(String categoryNumber);
	List<ResponseLectureDetail> getLectureListByCategory(String categoryNumber, String phone);
	List<ResponseLectureDetail> getLectureListBySubCategory(String categoryNumber, String phone);
	List<ResponseLectureDetail> searchLectureList(String query, String phone);
}
