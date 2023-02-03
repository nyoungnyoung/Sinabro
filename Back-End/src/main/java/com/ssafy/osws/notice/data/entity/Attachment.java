package com.ssafy.osws.notice.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name="attachment")
public class Attachment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;
	
	@Column(name="original_name")
	private String originalName;
	
	@Column(name="saved_name")
	private String savedName;
	
	@Column(name="notice_to_attachment")
	private int noticeNo;
	
	@Column(name="extension")
	private String extension;

	@Builder
	public Attachment(int no, String originalName, String savedName, int noticeNo, String extension) {
		super();
		this.no = no;
		this.originalName = originalName;
		this.savedName = savedName;
		this.noticeNo = noticeNo;
		this.extension = extension;
	}

	
}
