package com.ssafy.osws.notice.dto.request;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class RequestModifyNotice {
	
	private int no;
	private String subject;
	private String content;
	private List<MultipartFile> addedFileList;
	private List<RequestDeleteAttachment> deletedFileList;
}
