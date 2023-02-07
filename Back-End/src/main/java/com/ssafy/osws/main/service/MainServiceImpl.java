package com.ssafy.osws.main.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.ssafy.osws.lecture.data.entity.Lecture;
import com.ssafy.osws.lecture.data.repository.LectureCategoryRepository;
import com.ssafy.osws.lecture.data.repository.LectureRepository;
import com.ssafy.osws.main.data.entity.Category;
import com.ssafy.osws.main.data.entity.SubCategory;
import com.ssafy.osws.main.data.repository.MainRepository;
import com.ssafy.osws.main.data.repository.SubCategoryRepository;
import com.ssafy.osws.main.dto.response.ResponseCategory;
import com.ssafy.osws.main.dto.response.ResponseLecture;
import com.ssafy.osws.main.dto.response.ResponsePriorityNotice;
import com.ssafy.osws.main.dto.response.ResponseSubCategory;
import com.ssafy.osws.notice.data.entity.Notice;
import com.ssafy.osws.notice.data.repository.NoticeRepository;

@Service
public class MainServiceImpl implements MainService {
	@Autowired
	private NoticeRepository noticeRepository;
	
	@Autowired
	private SubCategoryRepository subCategoryRepository;
	
	@Autowired
	private LectureRepository lectureRepository;

	@Autowired
	private LectureCategoryRepository lectureCategoryRepository;
	
	@Autowired
	private MainRepository mainRepository;
	
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
	public List<ResponseLecture> getLectureListByCategory(String categoryNumber) {
		List<Lecture> lectureList = null;
		List<ResponseLecture> resultList = null;
		// 대분류가 전체일 경우 모든 강의 반환. (임의로 0로 설정함...) (jw) 
		if(Integer.parseInt(categoryNumber) == 0) {
			lectureList = lectureRepository.findAllLectures(PageRequest.of(0,6));
			resultList = Arrays.asList(modelMapper.map(lectureList, ResponseLecture[].class));
		}
		else {
			lectureList = lectureRepository.findLectureByCategory(Integer.parseInt(categoryNumber), PageRequest.of(0,6));
			resultList = Arrays.asList(modelMapper.map(lectureList, ResponseLecture[].class));
		} 
		return resultList; 
	}

	@Override
	public List<ResponseLecture> getLectureListBySubCategory(String subCategoryNumberList) {
		List<Lecture> lectureList = null;
		List<ResponseLecture> resultList = null;
		
		// subCategoryNumberList 는 , 기준으로 나눠야 한다.
		List<String> list = Arrays.asList(subCategoryNumberList.split(","));
		// List<String> -> List<Integer> 형태로 바꿈. 
		List<Integer> intList = new ArrayList<>();
		for(String s: list) {
			intList.add(Integer.valueOf(s));
		}
		
		lectureList = lectureRepository.findLectureBySubCategory(intList, PageRequest.of(0,6));
		resultList = Arrays.asList(modelMapper.map(lectureList, ResponseLecture[].class));
		return resultList;
	}

	@Override
	public List<ResponseLecture> searchLectureList(String query) {
		List<Lecture> lectureList = null;
		List<ResponseLecture> resultList = null;
		
		// subCategoryNumberList 는 , 기준으로 나눠야 한다.
		lectureList = lectureRepository.findBySubjectContaining(query, PageRequest.of(0,6));
		System.out.println(lectureList);
		resultList = Arrays.asList(modelMapper.map(lectureList, ResponseLecture[].class));
		return resultList;
	}
}
