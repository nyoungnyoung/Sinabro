package com.ssafy.osws.board.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseNoticeAttachment {
	private int no;
	private String originName;
	private String savedName;
	private String extension;
}
