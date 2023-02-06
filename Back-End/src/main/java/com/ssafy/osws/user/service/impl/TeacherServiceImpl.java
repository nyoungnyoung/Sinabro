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
import com.ssafy.osws.lecture.data.repository.EnrollmentRepository;
import com.ssafy.osws.lecture.data.repository.LectureCategoryRepository;
import com.ssafy.osws.lecture.data.repository.LectureRepository;
import com.ssafy.osws.lecture.data.repository.LectureTimeRepository;
import com.ssafy.osws.user.data.entity.User;
import com.ssafy.osws.user.data.repository.LectureWeeklyInfoRepository;
import com.ssafy.osws.user.dto.request.RequestCreateLecture;
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
	private ModelMapper modelMapper;
	
	@Override
	public List<ResponseSimpleLecture> getInProgressLectureList(String phone) {
		List<Lecture> lectureList = lectureRepository.getInProgressLectureList(phone, PageRequest.of(0,6));
		List<ResponseSimpleLecture> resultList = Arrays.asList(modelMapper.map(lectureList, ResponseSimpleLecture[].class));
		return resultList;
	}

	@Override
	@Transactional(rollbackOn = RuntimeException.class)
	public Boolean createLecture(RequestCreateLecture requestCreateLecture) {
		Lecture lecture = requestCreateLecture.toEntity();
		
		List<LectureTime> lectureTimeList = Arrays.asList(modelMapper.map(requestCreateLecture.getLectureTimeList(), LectureTime[].class));
		
		try {
			int lectureNo = lectureRepository.save(lecture).getNo();
			System.out.println(lectureNo);
			
			for(LectureTime lt : lectureTimeList) {
				lt.setLectureToLectureTime(lectureNo);
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
	public List<ResponseNormalInfo> getEnrollmentList(int lectureNo) {
		List<User> userList = enrollmentRepository.findByLectureId(lectureNo);
		List<ResponseNormalInfo> resultList = Arrays.asList(modelMapper.map(userList, ResponseNormalInfo[].class));
		return resultList;
	}

	@Override
	public Boolean modifyLecture(int lectureNo, RequestCreateLecture requestCreateLecture) {
		Lecture lecture = requestCreateLecture.toEntity();
		List<LectureTime> lectureTimeList = Arrays.asList(modelMapper.map(requestCreateLecture.getLectureTimeList(), LectureTime[].class));
		
		try {
			lectureRepository.save(lecture);
			lectureTimeRepository.saveAll(lectureTimeList);
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;
		}
	}
	
}
