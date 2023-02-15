package com.ssafy.osws.lecture.service.impl;

import java.util.Arrays;
import java.util.List;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.osws.lecture.data.entity.Lecture;
import com.ssafy.osws.lecture.data.repository.LectureQueryDSLRepository;
import com.ssafy.osws.lecture.data.repository.LectureReviewRepository;
import com.ssafy.osws.lecture.data.repository.LectureTimeRepository;
import com.ssafy.osws.lecture.dto.response.ResponseLectureDetail;
import com.ssafy.osws.lecture.dto.response.ResponseLectureReview;
import com.ssafy.osws.lecture.dto.response.ResponseLectureTime;
import com.ssafy.osws.lecture.service.LectureService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LectureServiceImpl implements LectureService {
	
	private final LectureQueryDSLRepository lectureQueryDSLRepository;
	private final LectureTimeRepository lectureTimeRepository;
	private final LectureReviewRepository lectureReviewRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public ResponseLectureDetail getLecture(int lectureNo, String phone) {
		Lecture lecture = lectureQueryDSLRepository.findByLectureNo(lectureNo);
		ResponseLectureDetail responseLectureDetail = null;
		if(lecture != null) {
			responseLectureDetail = modelMapper.map(lecture, ResponseLectureDetail.class);
			responseLectureDetail.setName(lecture.getUser().getName());
		} else return null;
		
		
		if ((lectureQueryDSLRepository.findByPhoneAndLectureNo(phone, lectureNo)) != null)
			responseLectureDetail.setEnrolled(true);
		else 
			responseLectureDetail.setEnrolled(false);
		
		
		responseLectureDetail.setLectureTimeList(Arrays.asList(
				modelMapper.map(
						lectureTimeRepository.findAllByLectureNo(lectureNo),
						ResponseLectureTime[].class)));
		
		System.out.println(responseLectureDetail);
		return responseLectureDetail;
	}

	@Override
	public List<ResponseLectureReview> getLectureReview(int lectureNo) {
		
		return Arrays.asList(modelMapper.map(lectureReviewRepository.findAllByLectureNo(lectureNo), ResponseLectureReview[].class));
	}
}
