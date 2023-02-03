package com.ssafy.osws.notice.data.entity;

import java.time.LocalDateTime;

import javax.persistence.*;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name="notice")
public class Notice {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;
	
	@Column(name="content", nullable=true)
	private String content;
	
	@Column(name="subject", nullable=false)
	private String subject;
	
	@Column(name="priority", nullable=false)
	private boolean priority;
	
	// 진우 형이 걱정했던 타입 문제 해결? DB 저장되는 거 보면 문제 없음
	@Column(name="registered_date", nullable=false)
	private LocalDateTime registeredDate;
	
	// registeredDate에 null이 들어가면 default 값을 넣게 제작
	@PrePersist
	@PreUpdate
	public void saveRegisteredDate() {
	  if(this.registeredDate == null) {
	    this.registeredDate = LocalDateTime.now();
	  }
	}

	@Builder
	public Notice(int no, String content, String subject, boolean priority, LocalDateTime registeredDate) {
		super();
		this.no = no;
		this.content = content;
		this.subject = subject;
		this.priority = priority;
		this.registeredDate = registeredDate;
	}
	
	
	
}
