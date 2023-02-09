package com.ssafy.osws.openvidu.service;

import javax.servlet.http.HttpServletRequest;

import com.ssafy.osws.openvidu.dto.response.ResponseCreateConnection;

public interface OpenViduService {

	String getLectureName(int parseInt);

	ResponseCreateConnection getUserName(int parseInt, HttpServletRequest request);

}
