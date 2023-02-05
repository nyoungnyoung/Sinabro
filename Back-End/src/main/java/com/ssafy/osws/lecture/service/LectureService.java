package com.ssafy.osws.lecture.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.ssafy.osws.lecture.dto.response.ResponseLectureDetail;
import com.ssafy.osws.lecture.dto.response.ResponseLectureReview;

public interface LectureService {

	ResponseLectureDetail getLecture(int lectureNo, HttpServletRequest request);

	List<ResponseLectureReview> getLectureReview(int lectureNo);
}
