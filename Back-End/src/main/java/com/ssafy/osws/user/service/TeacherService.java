package com.ssafy.osws.user.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.ssafy.osws.user.dto.request.RequestCreateLecture;
import com.ssafy.osws.user.dto.request.RequestModifyLecture;
import com.ssafy.osws.user.dto.response.ResponseNormalInfo;
import com.ssafy.osws.user.dto.response.ResponseSimpleLecture;

public interface TeacherService {
	List<ResponseSimpleLecture> getInProgressLectureList(String phone);
	Boolean createLecture(RequestCreateLecture requestCreateLecture, HttpServletRequest request);
	List<ResponseNormalInfo> getEnrollmentList(int lectureNo);
	Boolean modifyLecture(RequestModifyLecture requestModifyLecture, HttpServletRequest request);

}
