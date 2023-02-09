package com.ssafy.osws.openvidu.service.impl;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.osws.lecture.data.repository.LectureRepository;
import com.ssafy.osws.openvidu.dto.response.ResponseCreateConnection;
import com.ssafy.osws.openvidu.service.OpenViduService;
import com.ssafy.osws.user.data.repository.UserRepository;
import com.ssafy.osws.user.service.TeacherService;
import com.ssafy.osws.user.service.impl.TeacherServiceImpl;

@Service
public class OpenViduServiceImpl implements OpenViduService {
	
	@Autowired
	private LectureRepository lectureRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TeacherServiceImpl teacherService;

	@Override
	public String getLectureName(int lectureNo) {
		return lectureRepository.findByNo(lectureNo).getSubject();
	}

	@Override
	public ResponseCreateConnection getUserName(int lectureNo, HttpServletRequest request) {
		ResponseCreateConnection responseCreateConnection = null;
		if(teacherService.isMine(lectureNo, request)) {
			responseCreateConnection = new ResponseCreateConnection();
			responseCreateConnection.setName(userRepository
					.findByPhone(teacherService.findPhone(request)).getName());
		}
		return responseCreateConnection;
	}

}
