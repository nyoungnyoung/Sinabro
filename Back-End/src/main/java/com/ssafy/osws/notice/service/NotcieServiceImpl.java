package com.ssafy.osws.notice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ssafy.osws.notice.data.entity.Notice;
import com.ssafy.osws.notice.data.repository.NoticeQueryDSLRpeository;
import com.ssafy.osws.notice.data.repository.NoticeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NotcieServiceImpl implements NoticeService {
	private final NoticeRepository noticeRepository;
	private final NoticeQueryDSLRpeository noticeQueryDSLRepository;
	
	@Override
	public Long getTotalPageNumber() {
		Long count = noticeRepository.count();
		if (count == 0) return 1L;
		return count % 10 == 0 ? count / 10 : count / 10 + 1;
//		List<Notice> list = noticeQueryDSLRepository.findAllBySubjectAndNo("test", 0);
//		System.out.println(list);
//		System.out.println(2 % 10);
	}
	
}
