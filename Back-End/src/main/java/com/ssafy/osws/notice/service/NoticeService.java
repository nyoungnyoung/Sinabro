package com.ssafy.osws.notice.service;

import java.io.IOException;
import java.util.List;

import com.ssafy.osws.notice.dto.request.RequestModifyNotice;
import com.ssafy.osws.notice.dto.request.RequestWriteNotice;
import com.ssafy.osws.notice.dto.response.ResponseNotice;
import com.ssafy.osws.notice.dto.response.ResponseNoticeDetail;

public interface NoticeService {
	public Long getTotalPageNumber();

	List<ResponseNotice> getNoticeList(String search, int currentPageNo);
	public ResponseNoticeDetail getNotice(int no);

	public Boolean writeNotice(RequestWriteNotice requestWriteNotice) throws Exception;

	Boolean modifyNotice(RequestModifyNotice requestModifyNotice) throws Exception;

	public Boolean deleteNotice(int no);

	public byte[] downloadFile(int no, String savedName) throws IOException;
}
