package com.ssafy.osws.notice.dto.response;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseNoticeDetail {
	private int no;
	private String subject;
	private String registeredDate;
	private String content;
	private List<ResponseNoticeAttachment> fileList;

}
