package com.ssafy.osws.notice.data.repository;

import java.util.List;

import com.ssafy.osws.notice.data.entity.Notice;

public interface NoticeQueryDSLRpeository {
	public List<Notice> findAllByQuery(String subject, int startNumber);
	public List<Notice> findAll(int startNumber);
	
}
