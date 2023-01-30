package com.ssafy.osws.notice.dto.request;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class RequestWriteNotice {
	private String subject;
	private String content;
	private List<RequestAddNoticeAttachment> fileList;
}
