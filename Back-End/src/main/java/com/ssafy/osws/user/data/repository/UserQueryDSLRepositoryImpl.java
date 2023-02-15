package com.ssafy.osws.user.data.repository;


import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.osws.user.data.entity.User;

import static com.ssafy.osws.user.data.entity.QUser.user;

import java.util.List;

import static com.ssafy.osws.lecture.data.entity.QEnrollment.enrollment;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class UserQueryDSLRepositoryImpl implements UserQueryDSLRepository {
	
	private final JPAQueryFactory jpaQueryFactory;
	
	@Override
	public List<User> findAllByLectureNo(int lectureNo) {
		return jpaQueryFactory.selectFrom(user)
				.leftJoin(enrollment)
				.on(enrollment.userNo.eq(user.no))
				.where(enrollment.lectureNo.eq(lectureNo))
				.fetch();
	}
}
