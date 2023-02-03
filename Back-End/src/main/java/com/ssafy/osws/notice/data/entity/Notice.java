package com.ssafy.osws.notice.data.entity;

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
	
	@Column(name="registered_date", nullable=false)
	private String registeredDate;

	@Builder
	public Notice(int no, String content, String subject, boolean priority, String registeredDate) {
		super();
		this.no = no;
		this.content = content;
		this.subject = subject;
		this.priority = priority;
		this.registeredDate = registeredDate;
	}
	
	
	
}
