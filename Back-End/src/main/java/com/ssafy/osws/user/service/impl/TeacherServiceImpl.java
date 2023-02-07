package com.ssafy.osws.user.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.ssafy.osws.config.security.JwtProvider;
import com.ssafy.osws.lecture.data.entity.Lecture;
import com.ssafy.osws.lecture.data.entity.LectureCategory;
import com.ssafy.osws.lecture.data.entity.LectureTime;
import com.ssafy.osws.lecture.data.repository.EnrollmentRepository;
import com.ssafy.osws.lecture.data.repository.LectureCategoryRepository;
import com.ssafy.osws.lecture.data.repository.LectureQueryDSLRepository;
import com.ssafy.osws.lecture.data.repository.LectureRepository;
import com.ssafy.osws.lecture.data.repository.LectureTimeRepository;
import com.ssafy.osws.user.data.entity.User;
import com.ssafy.osws.user.data.repository.LectureWeeklyInfoRepository;
import com.ssafy.osws.user.data.repository.UserRepository;
import com.ssafy.osws.user.dto.request.RequestCreateLecture;
import com.ssafy.osws.user.dto.request.RequestLectureTime;
import com.ssafy.osws.user.dto.request.RequestModifyLecture;
import com.ssafy.osws.user.dto.response.ResponseNormalInfo;
import com.ssafy.osws.user.dto.response.ResponseSimpleLecture;
import com.ssafy.osws.user.service.TeacherService;

@Service
public class TeacherServiceImpl implements TeacherService{
	@Autowired
	private LectureRepository lectureRepository;

	@Autowired
	private LectureWeeklyInfoRepository lectureWeeklyInfoRepository;
	
	@Autowired
	private LectureTimeRepository lectureTimeRepository;
	
	@Autowired
	private EnrollmentRepository enrollmentRepository;
	
	@Autowired
	private LectureCategoryRepository lectureCategoryRepository;
	
	@Autowired
	private LectureQueryDSLRepository lectureQueryDSLRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private JwtProvider jwtProvider;
	
	@Override
	public List<ResponseSimpleLecture> getInProgressLectureList(String phone) {
		List<Lecture> lectureList = lectureRepository.getInProgressLectureList(phone, PageRequest.of(0,6));
		List<ResponseSimpleLecture> resultList = Arrays.asList(modelMapper.map(lectureList, ResponseSimpleLecture[].class));
		return resultList;
	}

	@Override
	@Transactional(rollbackOn = RuntimeException.class)
	public Boolean createLecture(RequestCreateLecture requestCreateLecture, HttpServletRequest request) {
		Lecture lecture = requestCreateLecture.toEntity();
		
		List<LectureTime> lectureTimeList = Arrays.asList(modelMapper.map(requestCreateLecture.getLectureTimeList(), LectureTime[].class));
		
		String token = jwtProvider.resolveAccessToken(request);
		String phone = null;
		if(token != null) {
			phone = jwtProvider.validateToken(token);
		}
		
		try {
//			User user = userRepository.findById(requestCreateLecture.getTeacherToLecture()).get();
			User user = userRepository.findByPhone(phone);
			
			lecture.setUser(user);
			int lectureNo = lectureRepository.save(lecture).getNo();
			
			for(LectureTime lt : lectureTimeList) {
				lt.setLecture(lecture);
			}
			lectureTimeRepository.saveAll(lectureTimeList);
			 
//			lecture 에 해당하는 소분류 카테고리 리스트 넣기. 예시 : (36번 강의 = 1,2번 소분류 카테고리에 속함) 
			List<Integer> subCategoryList = requestCreateLecture.getSubCategoryList();
			List<LectureCategory> lectureCategoryList = new ArrayList<LectureCategory>();
			
			for(int subcategory : subCategoryList) {
				LectureCategory lc = new LectureCategory(lectureNo, subcategory);
				lectureCategoryList.add(lc);
			}
			
			lectureCategoryRepository.saveAll(lectureCategoryList);
			
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;
		}

	}

	@Override
	public List<ResponseNormalInfo> getEnrollmentList(int lectureNo, HttpServletRequest request) {
		if(!isMine(lectureNo, request)) {
			return null;
		}
		
		List<User> userList = enrollmentRepository.findByLectureId(lectureNo);
		List<ResponseNormalInfo> resultList = Arrays.asList(modelMapper.map(userList, ResponseNormalInfo[].class));
		return resultList;
	}

	@Override
	@Transactional(rollbackOn = RuntimeException.class)
	public Boolean modifyLecture(RequestModifyLecture requestModifyLecture, HttpServletRequest request) throws RuntimeException{
		
		if(!isMine(requestModifyLecture.getNo(), request)) {
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
//		List<LectureTime> lectureTimeList = lectureTimeRepository.findAllByLectureNo(lecture.getNo());
		
		List<LectureCategory> lectureCategoryList = new ArrayList<>();
		for(int i : requestModifyLecture.getSubCategoryList()) {
			lectureCategoryList.add(new LectureCategory(lecture.getNo(), i));
		}
		
		
		User user = userRepository.findByPhone(findPhone(request));
		if(user == null) {
			throw new RuntimeException();
		}
		lecture.setUser(user);
		lectureRepository.save(lecture);
		lectureCategoryRepository.saveAll(lectureCategoryList);
		lectureTimeRepository.saveAll(lectureTimeList);
		
		return true;
	}
	
	private boolean isMine(int lectureNo, HttpServletRequest request) {
		Lecture foundLecture = lectureQueryDSLRepository.findByPhoneAndLectureNo(findPhone(request), lectureNo);
		if(foundLecture == null) {
			return false;
		}
		
		return true;
	}
	
	private String findPhone(HttpServletRequest request) {
		return jwtProvider.validateToken(jwtProvider.resolveAccessToken(request));
	}
	
}
