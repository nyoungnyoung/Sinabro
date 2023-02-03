package com.ssafy.osws.notice.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.osws.notice.dto.request.RequestModifyNotice;
import com.ssafy.osws.notice.dto.request.RequestWriteNotice;
import com.ssafy.osws.notice.dto.response.ResponseNotice;
import com.ssafy.osws.notice.dto.response.ResponseNoticeDetail;
import com.ssafy.osws.notice.service.NoticeService;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/notice")
@RequiredArgsConstructor
public class NoticeController{
	
	private final NoticeService noticeService;
	
	@ApiOperation(
			value = "공지사항 페이징 생성시 마지막 페이지 번호", 
			notes = "10개 글 기준 페이지 넘버를 반환한다. 글이 없으면 1 반환")
	@GetMapping("/pagination")
	public ResponseEntity<Long> getTotalPageNumber() {
		return new ResponseEntity<>(noticeService.getTotalPageNumber(), HttpStatus.OK);
		
	}
	
	@ApiOperation(
			value = "공지사항 목록", 
			notes = "공지사항 목록을 반환한다. search 쿼리에 값이 있으면 해당 내용을 포함하는 제목을 가진 공지 목록을 반환한다. 글이 없으면 null 반환")
	@GetMapping("/{currentPageNo}")
	public ResponseEntity<List<ResponseNotice>> getNoticeList(@PathVariable() int currentPageNo, @RequestParam(name="search") String query) {
		// search가 null이 아니면 검색 내역
		return null;
		
	}
	
	@ApiOperation(
			value = "공지사항 상세 내용", 
			notes = "공지사항 상세 내용을 반환한다. 글이 없으면 null 반환")
	@GetMapping("/{currentPageNo}/{no}")
	public ResponseEntity<ResponseNoticeDetail> getNotice(@PathVariable() int currentPageNo,
			@PathVariable() int no) {
		// 글 상세 내용 + 해당 글 첨부 파일 같이 보낸다.
		return null;
		
	}
	
	@ApiOperation(
			value = "공지사항 쓰기 요청", 
			notes = "공지사항 작성한 공지사항 내용을 DB에 저장한다. 성공하면 true, 실패하면 false 반환")
	@PostMapping("/write")
	public ResponseEntity<Boolean> writeNotice(@RequestBody() RequestWriteNotice requestWriteNotice) {
		return null;
		
	}
	
	@ApiOperation(
			value = "공지사항 수정 요청", 
			notes = "공지사항 수정한 공지사항 내용을 DB에 저장한다. 성공하면 true, 실패하면 false 반환")
	@PutMapping("/write")
	public ResponseEntity<Boolean> modifyNotice(@RequestBody() RequestModifyNotice requestNotice) {
		return null;
		
	}
	
	@ApiOperation(
			value = "공지사항 삭제 요청", 
			notes = "공지사항 삭제한 공지사항 내용을 DB에 반영한다. 성공하면 true, 실패하면 false 반환")
	@DeleteMapping("/{currentPageNo}/{no}")
	public ResponseEntity<Boolean> deleteNotice(@PathVariable int currentPageNo, @PathVariable int no) {
		// 글에 첨부된 파일도 모두 삭제해야 한다.
		return null;
		
	}
}
