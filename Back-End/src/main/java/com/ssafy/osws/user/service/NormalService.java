package com.ssafy.osws.user.service;

import java.util.List;

import com.ssafy.osws.main.dto.response.ResponseLecture;

public interface NormalService {

	List<ResponseLecture> getLectureList(String userId);

	Boolean cancelEnrolledLecture(int lectureNo, String phone);

	Boolean enrollLecture(int lectureNo, String phone);

}
