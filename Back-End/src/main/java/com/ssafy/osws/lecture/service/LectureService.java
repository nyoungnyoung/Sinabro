package com.ssafy.osws.lecture.service;

import java.util.List;


import com.ssafy.osws.lecture.dto.response.ResponseLectureDetail;
import com.ssafy.osws.lecture.dto.response.ResponseLectureReview;

public interface LectureService {

	ResponseLectureDetail getLecture(int lectureNo, String phone);

	List<ResponseLectureReview> getLectureReview(int lectureNo);
}
