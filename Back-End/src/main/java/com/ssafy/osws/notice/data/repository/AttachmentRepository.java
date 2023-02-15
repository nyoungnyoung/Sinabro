package com.ssafy.osws.notice.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.osws.notice.data.entity.Attachment;

public interface AttachmentRepository extends JpaRepository<Attachment, Integer> {
	public List<Attachment> findAllByNoticeNo(int no);

	public void deleteAllByNo(int i);

	public void deleteAllByNoticeNo(int no); 

}
