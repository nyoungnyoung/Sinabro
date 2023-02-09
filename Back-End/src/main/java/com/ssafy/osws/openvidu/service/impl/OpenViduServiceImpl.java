package com.ssafy.osws.openvidu.service.impl;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.osws.config.CheckRole;
import com.ssafy.osws.lecture.data.repository.LectureRepository;
import com.ssafy.osws.openvidu.dto.response.ResponseCreateConnection;
import com.ssafy.osws.openvidu.service.OpenViduService;
import com.ssafy.osws.user.data.repository.UserRepository;
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
		
		if(CheckRole.hasNormal() && teacherService.isMine(lectureNo, request)) {
			System.out.println("일반 사용자");
			responseCreateConnection = new ResponseCreateConnection();
			responseCreateConnection.setUserInfo(userRepository
					.findByPhone(teacherService.findPhone(request)));
		} else if(CheckRole.hasTeacher() && lectureRepository.findByNo(lectureNo).getUser().getPhone().equals(teacherService.findPhone(request))) {
			System.out.println("강사 사용자");
			responseCreateConnection = new ResponseCreateConnection();
			responseCreateConnection.setUserInfo(userRepository
					.findByPhone(lectureRepository.findByNo(lectureNo).getUser().getPhone()));
		}
		
		return responseCreateConnection;
	}

}
