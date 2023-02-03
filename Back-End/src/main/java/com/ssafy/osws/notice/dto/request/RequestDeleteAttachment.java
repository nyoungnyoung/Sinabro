package com.ssafy.osws.notice.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class RequestDeleteAttachment {
	private int no;
	private String savedName;
}
