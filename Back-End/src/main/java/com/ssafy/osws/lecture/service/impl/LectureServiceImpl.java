package com.ssafy.osws.lecture.service.impl;

import java.util.Arrays;

import javax.servlet.http.HttpServletRequest;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.osws.config.security.JwtProvider;
import com.ssafy.osws.lecture.data.entity.Lecture;
import com.ssafy.osws.lecture.data.repository.LectureQueryDSLRepository;
import com.ssafy.osws.lecture.data.repository.LectureTimeRepository;
import com.ssafy.osws.lecture.dto.response.ResponseLectureDetail;
import com.ssafy.osws.lecture.dto.response.ResponseLectureTime;
import com.ssafy.osws.lecture.service.LectureService;

@Service
public class LectureServiceImpl implements LectureService {
	@Autowired
	private LectureQueryDSLRepository lectureQueryDSLRepository;
	
	@Autowired
	private LectureTimeRepository lectureTimeRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private JwtProvider jwtProvider;
	
	@Override
	public ResponseLectureDetail getLecture(int lectureNo, HttpServletRequest request) {
		Lecture lecture = lectureQueryDSLRepository.findByLectureNo(lectureNo);
		ResponseLectureDetail responseLectureDetail = null;
		if(lecture.getNo() > 0) {
			responseLectureDetail = modelMapper.map(lecture, ResponseLectureDetail.class);
			responseLectureDetail.setName(lecture.getUser().getName());
		}
		
		String token = jwtProvider.resolveAccessToken(request);
		if(token != null) {
			String phone = jwtProvider.validateToken(token);
			if ((lectureQueryDSLRepository.findByPhoneAndLectureNo(phone, lectureNo)).getNo() > 0)
				responseLectureDetail.setEnrolled(true);
			else 
				responseLectureDetail.setEnrolled(false);
		} else {
			responseLectureDetail.setEnrolled(false);
		}
		
		responseLectureDetail.setLectureTimeList(Arrays.asList(
				modelMapper.map(
						lectureTimeRepository.findAllByLectureNo(lectureNo),
						ResponseLectureTime[].class)));
		
		System.out.println(responseLectureDetail);
		return responseLectureDetail;
	}
}
