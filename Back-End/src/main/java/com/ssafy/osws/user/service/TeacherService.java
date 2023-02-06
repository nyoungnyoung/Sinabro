package com.ssafy.osws.user.service;

import java.util.List;

import com.ssafy.osws.user.dto.request.RequestCreateLecture;
import com.ssafy.osws.user.dto.response.ResponseNormalInfo;
import com.ssafy.osws.user.dto.response.ResponseSimpleLecture;

public interface TeacherService {
	List<ResponseSimpleLecture> getInProgressLectureList(int teacherNo);
	Boolean createLecture(RequestCreateLecture requestCreateLecture);
	List<ResponseNormalInfo> getEnrollmentList(int lectureNo);
	Boolean modifyLecture(int lectureNo, RequestCreateLecture requestCreateLecture);

}
