package com.ssafy.osws.openvidu.service.impl;


import org.springframework.stereotype.Service;

import com.ssafy.osws.config.CheckRole;
import com.ssafy.osws.lecture.data.entity.Lecture;
import com.ssafy.osws.lecture.data.repository.LectureRepository;
import com.ssafy.osws.openvidu.dto.response.ResponseCreateConnection;
import com.ssafy.osws.openvidu.service.OpenViduService;
import com.ssafy.osws.user.data.repository.UserRepository;
import com.ssafy.osws.user.service.impl.NormalServiceImpl;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OpenViduServiceImpl implements OpenViduService {
	
	private final UserRepository userRepository;
	private final LectureRepository lectureRepository;
	
	private final NormalServiceImpl normalServiceImpl;

	@Override
	public ResponseCreateConnection getUserName(int lectureNo, String phone) {
		ResponseCreateConnection responseCreateConnection = null;
		
		Lecture lecture = lectureRepository.findByNo(lectureNo);
		if(lecture == null) {
			return null;
		}
		
		if(CheckRole.hasNormal() && normalServiceImpl.isMine(lectureNo, phone)) {
			System.out.println("일반 사용자");
			responseCreateConnection = new ResponseCreateConnection();
			responseCreateConnection.setName(userRepository
					.findByPhone(phone).getName());
		} else if(CheckRole.hasTeacher() && lecture.getUser().getPhone().equals(phone)) {
			System.out.println("강사 사용자");
			responseCreateConnection = new ResponseCreateConnection();
			responseCreateConnection.setName(lecture.getUser().getName());
		}
		
		if(responseCreateConnection != null) {
			responseCreateConnection.setSubject(lecture.getSubject());
			responseCreateConnection.setTeacher(lecture.getUser().getName());
		}
		
		return responseCreateConnection;
	}

}
