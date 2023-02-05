package com.ssafy.osws.lecture.service;

import javax.servlet.http.HttpServletRequest;

import com.ssafy.osws.lecture.dto.response.ResponseLectureDetail;

public interface LectureService {

	ResponseLectureDetail getLecture(int lectureNo, HttpServletRequest request);
}
