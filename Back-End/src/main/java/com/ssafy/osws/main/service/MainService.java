package com.ssafy.osws.main.service;

import java.util.List;

import com.ssafy.osws.main.dto.response.ResponseCategory;
import com.ssafy.osws.main.dto.response.ResponsePriorityNotice;

public interface MainService {
	ResponsePriorityNotice getPriorityNotice() throws Exception;
	List<ResponseCategory> getCategoryList() throws Exception; 
}
