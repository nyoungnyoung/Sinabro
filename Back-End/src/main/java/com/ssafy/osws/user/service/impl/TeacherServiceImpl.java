package com.ssafy.osws.user.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.ssafy.osws.lecture.data.entity.Lecture;
import com.ssafy.osws.lecture.data.entity.LectureCategory;
import com.ssafy.osws.lecture.data.entity.LectureTime;
import com.ssafy.osws.lecture.data.repository.LectureCategoryRepository;
import com.ssafy.osws.lecture.data.repository.LectureRepository;
import com.ssafy.osws.lecture.data.repository.LectureTimeRepository;
import com.ssafy.osws.user.data.entity.User;
import com.ssafy.osws.user.data.repository.UserQueryDSLRepository;
import com.ssafy.osws.user.data.repository.UserRepository;
import com.ssafy.osws.user.dto.request.RequestCreateLecture;
import com.ssafy.osws.user.dto.request.RequestLectureTime;
import com.ssafy.osws.user.dto.request.RequestModifyLecture;
import com.ssafy.osws.user.dto.response.ResponseNormalInfo;
import com.ssafy.osws.user.dto.response.ResponseSimpleLecture;
import com.ssafy.osws.user.service.TeacherService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TeacherServiceImpl implements TeacherService{

	private final UserRepository userRepository;
	private final UserQueryDSLRepository userQueryDSLRepository;
	private final LectureRepository lectureRepository;
	private final LectureCategoryRepository lectureCategoryRepository;
	private final LectureTimeRepository lectureTimeRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<ResponseSimpleLecture> getInProgressLectureList(String phone) {
		List<Lecture> lectureList = lectureRepository.findAllByUserNoAndEndDate(phone);
		return Arrays.asList(modelMapper.map(lectureList, ResponseSimpleLecture[].class));
	}

	@Override
	@Transactional(rollbackOn = RuntimeException.class)
	public Boolean createLecture(RequestCreateLecture requestCreateLecture, String phone) throws RuntimeException {
		Lecture lecture = requestCreateLecture.toEntity();
		List<LectureTime> lectureTimeList = Arrays.asList(modelMapper.map(requestCreateLecture.getLectureTimeList(), LectureTime[].class));		
		
		try {			
			lecture.setUser(userRepository.findByPhone(phone));
			int lectureNo = lectureRepository.save(lecture).getNo();
			
			for(LectureTime lt : lectureTimeList) {
				lt.setLecture(lecture);
			}
			lectureTimeRepository.saveAll(lectureTimeList);
			 
			List<Integer> subCategoryList = requestCreateLecture.getSubCategoryList();
			List<LectureCategory> lectureCategoryList = new ArrayList<LectureCategory>();
			
			for(int subcategory : subCategoryList) {
				LectureCategory lc = new LectureCategory(lectureNo, subcategory);
				lectureCategoryList.add(lc);
			}
			
			lectureCategoryRepository.saveAll(lectureCategoryList);
			
			return true;
		} catch (Exception e) {
			log.error(e.getMessage());
			return false;
		}

	}

	@Override
	public List<ResponseNormalInfo> getEnrollmentList(int lectureNo, String phone) {
		if(!isMine(lectureNo, phone)) {
			return null;
		}
		
		return Arrays.asList(modelMapper
				.map(userQueryDSLRepository.findAllByLectureNo(lectureNo), 
						ResponseNormalInfo[].class));
	}

	@Override
	@Transactional(rollbackOn = RuntimeException.class)
	public Boolean modifyLecture(RequestModifyLecture requestModifyLecture, String phone) throws RuntimeException{
		
		if(!isMine(requestModifyLecture.getNo(), phone)) {
			return false;
		}
			
		Lecture lecture = requestModifyLecture.toEntity();
		// 기존의 List<lecture_time> 은 모두 삭제한다.
		lectureTimeRepository.deleteAllByLecture(lecture);
		lectureCategoryRepository.deleteAllByLectureToLectureCategory(lecture.getNo());
		
		List<LectureTime> lectureTimeList = new ArrayList<>();
		for(RequestLectureTime rlt : requestModifyLecture.getLectureTimeList()) {
			lectureTimeList.add(rlt.toEntity(lecture));
		}
		
		List<LectureCategory> lectureCategoryList = new ArrayList<>();
		for(int i : requestModifyLecture.getSubCategoryList()) {
			lectureCategoryList.add(new LectureCategory(lecture.getNo(), i));
		}
		
		
		User user = userRepository.findByPhone(phone);
		if(user == null) {
			throw new RuntimeException();
		}
		lecture.setUser(user);
		lectureRepository.save(lecture);
		lectureCategoryRepository.saveAll(lectureCategoryList);
		lectureTimeRepository.saveAll(lectureTimeList);
		
		return true;
	}
	
	private boolean isMine(int lectureNo, String phone) {
		Lecture foundLecture = lectureRepository.findByNo(lectureNo);
		if(foundLecture == null) {
			return false;
		}
		
		return foundLecture.getUser().getPhone().equals(phone);
	}
	
}
