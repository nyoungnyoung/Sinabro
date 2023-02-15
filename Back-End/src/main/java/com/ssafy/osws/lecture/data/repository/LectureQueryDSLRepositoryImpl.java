package com.ssafy.osws.lecture.data.repository;


import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.osws.lecture.data.entity.Lecture;
import static com.ssafy.osws.user.data.entity.QUser.user;

import java.util.List;

import static com.ssafy.osws.lecture.data.entity.QEnrollment.enrollment;
import static com.ssafy.osws.lecture.data.entity.QLecture.lecture;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class LectureQueryDSLRepositoryImpl implements LectureQueryDSLRepository {
	
	private final JPAQueryFactory jpaQueryFactory;
	
	@Override
	public Lecture findByLectureNo(int lectureNo) {
		
		return jpaQueryFactory.select(lecture)
				.from(lecture)
				.leftJoin(user)
				.on(lecture.user.no.eq(user.no))
				.where(lecture.no.eq(lectureNo))
				.fetchOne();
	}
	
	@Override
	public List<Lecture> findAllByPhone(String phone) {
		return jpaQueryFactory.select(lecture)
				.from(lecture)
				.leftJoin(enrollment)
				.on(lecture.no.eq(enrollment.lectureNo))
				.leftJoin(user)
				.on(enrollment.userNo.eq(user.no))
				.where(user.phone.eq(phone)).fetch();
	}
	
	@Override
	public Lecture findByPhoneAndLectureNo(String phone, int lectureNo) {
		return jpaQueryFactory.select(lecture)
				.from(lecture)
				.leftJoin(enrollment)
				.on(lecture.no.eq(enrollment.lectureNo))
				.leftJoin(user)
				.on(enrollment.userNo.eq(user.no))
				.where(user.phone.eq(phone), lecture.no.eq(lectureNo)).fetchOne();
	}
}
