package com.ssafy.osws.lecture.data.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.osws.lecture.data.entity.Lecture;
import static com.ssafy.osws.user.data.entity.QUser.user;

import static com.ssafy.osws.lecture.data.entity.QEnrollment.enrollment;
import static com.ssafy.osws.lecture.data.entity.QLecture.lecture;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class LectureQueryDSLRespositoryImpl implements LectureQueryDSLRepository {
	
	private final JPAQueryFactory jpaQueryFactory;
	
	@Override
	public List<Lecture> findLectureByPhone(String phone) {
		return jpaQueryFactory.select(lecture)
				.from(lecture)
				.leftJoin(enrollment)
				.on(lecture.no.eq(enrollment.lectureNo))
				.leftJoin(user)
				.on(enrollment.userNo.eq(user.no))
				.where(user.phone.eq(phone)).fetch();
	}
}
