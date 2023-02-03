package com.ssafy.osws.notice.data.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.osws.notice.data.entity.Notice;
import static com.ssafy.osws.notice.data.entity.QNotice.notice;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class NoticeQueryDSLRepositoryImpl implements NoticeQueryDSLRpeository {

	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<Notice> findAllByQuery(String subject, int startNumber) {
		
		return jpaQueryFactory.selectFrom(notice)
				.where(notice.subject.contains(subject))
				.offset(startNumber).limit(10)
				.fetch();
	}

	@Override
	public List<Notice> findAll(int startNumber) {
		return jpaQueryFactory.selectFrom(notice)
				.offset(startNumber).limit(10)
				.fetch();
	}
	
}
