package com.ssafy.osws.user.service.impl;

import java.util.Arrays;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.osws.lecture.data.entity.Enrollment;
import com.ssafy.osws.lecture.data.entity.Lecture;
import com.ssafy.osws.lecture.data.repository.EnrollmentRepository;
import com.ssafy.osws.lecture.data.repository.LectureQueryDSLRepository;
import com.ssafy.osws.main.dto.response.ResponseLecture;
import com.ssafy.osws.user.data.repository.UserRepository;
import com.ssafy.osws.user.service.NormalService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NormalServiceImpl implements NormalService {
	
	private final UserRepository userRepository;
	private final LectureQueryDSLRepository lectureQueryDSLRepository;
	private final EnrollmentRepository enrollmentRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<ResponseLecture> getLectureList(String phone) {
		return Arrays.asList(modelMapper.map(lectureQueryDSLRepository.findAllByPhone(phone), ResponseLecture[].class));
	}

	@Override
	@Transactional(rollbackOn = RuntimeException.class)
	public Boolean cancelEnrolledLecture(int lectureNo, String phone) throws RuntimeException {
		enrollmentRepository.deleteByLectureNoAndUserNo(lectureNo, userRepository.findByPhone(phone).getNo());
		return true;
	}

	@Override
	@Transactional(rollbackOn = RuntimeException.class)
	public Boolean enrollLecture(int lectureNo, String phone) throws RuntimeException {
		enrollmentRepository.save(Enrollment.builder()
				.lectureNo(lectureNo)
				.userNo(userRepository.findByPhone(phone).getNo())
				.build());
		return true;
		
	}

	public boolean isMine(int lectureNo, String phone) {
		Lecture foundLecture = lectureQueryDSLRepository.findByPhoneAndLectureNo(phone, lectureNo);
		if(foundLecture == null) {
			return false;
		}
		
		return true;
	}
}
