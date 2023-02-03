package com.ssafy.osws.config;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.querydsl.jpa.impl.JPAQueryFactory;

@Configuration
public class QueryDslConfig {

	@PersistenceContext
	private EntityManager entityManager;
	
	@Bean
	public JPAQueryFactory jaQueryFactory() {
		return new JPAQueryFactory(entityManager);
	}
}
