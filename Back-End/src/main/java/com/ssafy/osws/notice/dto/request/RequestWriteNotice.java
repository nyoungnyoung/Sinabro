package com.ssafy.osws.notice.dto.request;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class RequestWriteNotice {

	//private RequestNotice requestNotice;
	private String subject;
	private String content;
	// 파일은 form-data로 받기 때문에 @RequestBody로 받을 수 없다.
	private List<MultipartFile> fileList;
}
