package com.ssafy.osws.user.service;

import java.util.List;


import com.ssafy.osws.user.dto.request.RequestCreateLecture;
import com.ssafy.osws.user.dto.request.RequestModifyLecture;
import com.ssafy.osws.user.dto.response.ResponseNormalInfo;
import com.ssafy.osws.user.dto.response.ResponseSimpleLecture;

public interface TeacherService {
	List<ResponseSimpleLecture> getInProgressLectureList(String phone);
	Boolean createLecture(RequestCreateLecture requestCreateLecture, String phone) throws RuntimeException;
	List<ResponseNormalInfo> getEnrollmentList(int lectureNo, String phone);
	Boolean modifyLecture(RequestModifyLecture requestModifyLecture, String phone);

}
