package com.ssafy.osws.notice.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ResponseNoticeAttachment {
	private int no;
	private String originalName;
	private String savedName;
	private String extension;
}
