package com.ssafy.osws.notice.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseNoticeDetail extends ResponseNotice {
	
	private String content;
	private List<ResponseNoticeAttachment> fileList;
	
	ResponseNoticeDetail(int no, String subject, String registeredDate, String content) {
		super(no, subject, registeredDate);
		this.content = content;
	}

}
