package com.ssafy.osws.main.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.ssafy.osws.lecture.data.entity.Lecture;
import com.ssafy.osws.lecture.data.repository.LectureRepository;
import com.ssafy.osws.lecture.dto.response.ResponseLectureDetail;
import com.ssafy.osws.lecture.service.LectureService;
import com.ssafy.osws.main.data.entity.Category;
import com.ssafy.osws.main.data.entity.SubCategory;
import com.ssafy.osws.main.data.repository.MainRepository;
import com.ssafy.osws.main.data.repository.SubCategoryRepository;
import com.ssafy.osws.main.dto.response.ResponseCategory;
import com.ssafy.osws.main.dto.response.ResponsePriorityNotice;
import com.ssafy.osws.main.dto.response.ResponseSubCategory;
import com.ssafy.osws.notice.data.entity.Notice;
import com.ssafy.osws.notice.data.repository.NoticeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MainServiceImpl implements MainService {

	private final NoticeRepository noticeRepository;
	private final SubCategoryRepository subCategoryRepository;
	private final LectureRepository lectureRepository;
	private final MainRepository mainRepository;

	private final LectureService lectureService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public ResponsePriorityNotice getPriorityNotice() throws Exception {
		Notice notice = noticeRepository.findByPriority(true);
		
		ResponsePriorityNotice responsePriorityNotice = null; 
		if(notice != null) {
			responsePriorityNotice = new ResponsePriorityNotice();
			responsePriorityNotice.setNo(notice.getNo());
			responsePriorityNotice.setSubject(notice.getSubject());	
			return responsePriorityNotice;
		}
		else return responsePriorityNotice;

	}

	@Override
	public List<ResponseCategory> getCategoryList() throws Exception {

		List<Category> categoryList = mainRepository.findAllByOrderByNoAsc();
		List<ResponseCategory> resultList = Arrays.asList(modelMapper.map(categoryList, ResponseCategory[].class));
		return resultList;
	}

	@Override
	public List<ResponseSubCategory> getSubCategoryList(String categoryNumber) {
		List<SubCategory> subCategorylist = subCategoryRepository.findSubCategory(Integer.parseInt(categoryNumber));
		if(subCategorylist.isEmpty()) {
			return null;
		}
		List<ResponseSubCategory> resultList = Arrays.asList(modelMapper.map(subCategorylist, ResponseSubCategory[].class));
		return resultList;
	}

	@Override
	public List<ResponseLectureDetail> getLectureListByCategory(String categoryNumber, String phone) {
		List<Lecture> lectureList = null;
		List<ResponseLectureDetail> resultList = new ArrayList<>();
		// 대분류가 전체일 경우 모든 강의 반환. (1이면 저장된 강의를 no값 오름차순으로 반환함) (jw) 
		if(Integer.parseInt(categoryNumber) == 1) {
			lectureList = lectureRepository.findAllLectures();
			for(Lecture lecture: lectureList) {
				int lectureNo = lecture.getNo();
				resultList.add(lectureService.getLecture(lectureNo,phone));
			}
		}
		else {
			lectureList = lectureRepository.findLectureByCategory(Integer.parseInt(categoryNumber));
			//resultList = Arrays.asList(modelMapper.map(lectureList, ResponseLecture[].class));
			for(Lecture lecture: lectureList) {
				int lectureNo = lecture.getNo();
				resultList.add(lectureService.getLecture(lectureNo, phone));
			}
		} 
		return resultList; 
	}

	@Override
	public List<ResponseLectureDetail> getLectureListBySubCategory(String subCategoryNumberList, String phone) {
		List<Lecture> lectureList = null;
		List<ResponseLectureDetail> resultList = new ArrayList<>();
		
		// subCategoryNumberList 는 , 기준으로 나눠야 한다.
		List<String> list = Arrays.asList(subCategoryNumberList.split(","));
		// List<String> -> List<Integer> 형태로 바꿈. 
		List<Integer> intList = new ArrayList<>();
		for(String s: list) {
			intList.add(Integer.valueOf(s));
		}
		
		lectureList = lectureRepository.findLectureBySubCategory(intList);
		for(Lecture lecture: lectureList) {
			int lectureNo = lecture.getNo();
			resultList.add(lectureService.getLecture(lectureNo, phone));
		}
//		resultList = Arrays.asList(modelMapper.map(lectureList, ResponseLecture[].class));
		return resultList;
	}

	@Override
	public List<ResponseLectureDetail> searchLectureList(String query, String phone) {
		List<Lecture> lectureList = null;
		List<ResponseLectureDetail> resultList = new ArrayList<>();
		
		// subCategoryNumberList 는 , 기준으로 나눠야 한다.
		lectureList = lectureRepository.findBySubjectContaining(query);
		System.out.println(lectureList);
		for(Lecture lecture: lectureList) {
			int lectureNo = lecture.getNo();
			resultList.add(lectureService.getLecture(lectureNo, phone));
		}
		
		return resultList;
	}
}
