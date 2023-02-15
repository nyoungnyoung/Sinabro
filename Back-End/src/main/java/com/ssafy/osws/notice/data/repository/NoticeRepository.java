package com.ssafy.osws.notice.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.osws.notice.data.entity.Notice;

public interface NoticeRepository extends JpaRepository<Notice, Integer> {
	public Notice findByPriority(Boolean priority);

	public Notice findByNo(int no);

	public void deleteAllByNo(Integer i);
}
