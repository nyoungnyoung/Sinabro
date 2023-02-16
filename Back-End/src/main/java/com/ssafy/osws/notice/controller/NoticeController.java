package com.ssafy.osws.notice.controller;


import java.io.IOException;
import java.util.List;

import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "공지-관련-API", description = "Notice API Controller")
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
	public ResponseEntity<List<ResponseNotice>> getNoticeList(@PathVariable() int currentPageNo, @RequestParam(name="search", required = false) String query) {
		// search가 null이 아니면 검색 내역
		return new ResponseEntity<>(noticeService.getNoticeList(query, currentPageNo), HttpStatus.OK);
		
	}
	
	@ApiOperation(
			value = "공지사항 상세 내용", 
			notes = "공지사항 상세 내용을 반환한다. 글이 없으면 null 반환")
	@GetMapping("/{currentPageNo}/{no}")
	public ResponseEntity<ResponseNoticeDetail> getNotice(@PathVariable() int currentPageNo,
			@PathVariable() int no) {
		return new ResponseEntity<>(noticeService.getNotice(no), HttpStatus.OK);
		
	}
	
	@ApiOperation(
			value = "공지사항 쓰기 요청", 
			notes = "공지사항 작성한 공지사항 내용을 DB에 저장한다. 성공하면 true, 실패하면 false 반환")
	@PostMapping(value = "/write", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<Boolean> writeNotice(@ModelAttribute() RequestWriteNotice requestWriteNotice) throws Exception {
		return new ResponseEntity<Boolean>(noticeService.writeNotice(requestWriteNotice), HttpStatus.OK);
		
	}
	
	@ApiOperation(
			value = "공지사항 수정 요청 post요청처럼 formdata로 보내야 한다.", 
			notes = "공지사항 수정한 공지사항 내용을 DB에 저장한다. 성공하면 true, 실패하면 false 반환")
	@PutMapping(value = "/write", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<Boolean> modifyNotice(@ModelAttribute() RequestModifyNotice requestNotice) throws Exception {
		return new ResponseEntity<Boolean>(noticeService.modifyNotice(requestNotice), HttpStatus.OK);
		
	}
	
	@ApiOperation(
			value = "공지사항 삭제 요청", 
			notes = "공지사항 삭제한 공지사항 내용을 DB에 반영한다. 성공하면 true, 실패하면 false 반환")
	@DeleteMapping("/{currentPageNo}/{no}")
	public ResponseEntity<Boolean> deleteNotice(@PathVariable int currentPageNo, @PathVariable int no) {
		// 글에 첨부된 파일도 모두 삭제해야 한다.
		return new ResponseEntity<Boolean>(noticeService.deleteNotice(no), HttpStatus.OK);
		
	}
	
	@ApiOperation(
			value = "첨부파일 다운로드 요청", 
			notes = "파일 다운로드")
	@GetMapping(value = "/download/{no}/{savedName}/{originalName}", produces = { "application/octet-stream;charset=utf-8" })
	public ResponseEntity<byte[]> downloadFile(@PathVariable int no, @PathVariable String savedName, @PathVariable String originalName) throws IOException {
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
		headers.setContentDisposition(ContentDisposition.attachment().filename(originalName).build());
		return new ResponseEntity<>(noticeService.downloadFile(no, savedName), headers, HttpStatus.OK);
		
	}
	
}
