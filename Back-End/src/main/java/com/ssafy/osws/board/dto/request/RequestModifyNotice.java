package com.ssafy.osws.board.dto.request;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class RequestModifyNotice {
	private String subject;
	private String content;
	private List<RequestAddNoticeAttachment> addedFileList;
	private List<RequestDeleteNoticeAttachment> deletedFileList;
}
