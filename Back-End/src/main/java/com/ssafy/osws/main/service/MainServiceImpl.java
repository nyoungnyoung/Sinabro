package com.ssafy.osws.main.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.osws.main.data.entity.Category;
import com.ssafy.osws.main.data.repository.MainRepository;
import com.ssafy.osws.main.dto.response.ResponseCategory;
import com.ssafy.osws.main.dto.response.ResponsePriorityNotice;
import com.ssafy.osws.notice.data.entity.Notice;
import com.ssafy.osws.notice.data.repository.NoticeRepository;

@Service
public class MainServiceImpl implements MainService {
	@Autowired
	private NoticeRepository noticeRepository;

	@Autowired
	private MainRepository mainRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public ResponsePriorityNotice getPriorityNotice() throws Exception {
		Notice notice = noticeRepository.findByPriority(true);

		ResponsePriorityNotice responsePriorityNotice = new ResponsePriorityNotice();
		responsePriorityNotice.setNo(notice.getNo());
		responsePriorityNotice.setSubject(notice.getSubject());

		return responsePriorityNotice;
	}

	@Override
	public List<ResponseCategory> getCategoryList() throws Exception {
		List<Category> categoryList = mainRepository.findAll();
		List<ResponseCategory> resultList = Arrays.asList(modelMapper.map(categoryList, ResponseCategory[].class));
		return resultList;
	}

}
