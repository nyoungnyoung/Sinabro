package com.ssafy.osws.main.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.ssafy.osws.lecture.dto.response.ResponseLectureDetail;
import com.ssafy.osws.main.dto.response.ResponseCategory;
import com.ssafy.osws.main.dto.response.ResponsePriorityNotice;
import com.ssafy.osws.main.dto.response.ResponseSubCategory;

public interface MainService {
	ResponsePriorityNotice getPriorityNotice() throws Exception;
	List<ResponseCategory> getCategoryList() throws Exception;
	List<ResponseSubCategory> getSubCategoryList(String categoryNumber);
	List<ResponseLectureDetail> getLectureListByCategory(String categoryNumber, HttpServletRequest request);
	List<ResponseLectureDetail> getLectureListBySubCategory(String categoryNumber, HttpServletRequest request);
	List<ResponseLectureDetail> searchLectureList(String query, HttpServletRequest request);
}
