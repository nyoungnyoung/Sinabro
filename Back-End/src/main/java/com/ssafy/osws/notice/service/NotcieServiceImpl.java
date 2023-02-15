package com.ssafy.osws.notice.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.osws.notice.data.entity.Attachment;
import com.ssafy.osws.notice.data.entity.Notice;
import com.ssafy.osws.notice.data.repository.AttachmentRepository;
import com.ssafy.osws.notice.data.repository.NoticeQueryDSLRpeository;
import com.ssafy.osws.notice.data.repository.NoticeRepository;
import com.ssafy.osws.notice.dto.request.RequestModifyNotice;
import com.ssafy.osws.notice.dto.request.RequestWriteNotice;
import com.ssafy.osws.notice.dto.request.RequestDeleteAttachment;
import com.ssafy.osws.notice.dto.response.ResponseNotice;
import com.ssafy.osws.notice.dto.response.ResponseNoticeAttachment;
import com.ssafy.osws.notice.dto.response.ResponseNoticeDetail;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NotcieServiceImpl implements NoticeService {
	
	private final NoticeRepository noticeRepository;
	private final NoticeQueryDSLRpeository noticeQueryDSLRepository;
	private final AttachmentRepository attachmentRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Value("${file.path}") 
	String realPath;
	
	private final long noticeCount = 10L;
	
	@Override
	public Long getTotalPageNumber() {
		Long count = noticeRepository.count();
		if (count == 0) return 1L;
		
		return count % noticeCount == 0 ? count / noticeCount : count / noticeCount + 1;
	}
	
	@Override
	public List<ResponseNotice> getNoticeList(String query, int currentPageNo) {
		List<Notice> list = null;
		List<ResponseNotice> responseNoticeList = null;
		if(query == null) {
			list = noticeQueryDSLRepository.findAll(--currentPageNo * 10);
		} else {
			list = noticeQueryDSLRepository.findAllByQuery(query, --currentPageNo * 10);
		}
		
		if(list != null)
			responseNoticeList = Arrays.asList(modelMapper.map(list, ResponseNotice[].class));
		
		return responseNoticeList;
	}

	@Override
	public ResponseNoticeDetail getNotice(int no) {
		ResponseNoticeDetail responseNoticeDetail = null;
		Notice notice = noticeRepository.findByNo(no);
		
		if(notice != null) {
			responseNoticeDetail = modelMapper.map(notice, ResponseNoticeDetail.class);
			responseNoticeDetail.setFileList(Arrays.asList(modelMapper.map(attachmentRepository.findAllByNoticeNo(notice.getNo()), ResponseNoticeAttachment[].class)));			
		}
		return responseNoticeDetail;
	}

	@Transactional(rollbackOn = Exception.class)
	@Override
	public Boolean writeNotice(RequestWriteNotice requestWriteNotice) throws Exception {
		int no = noticeRepository.save(Notice.builder()
				.subject(requestWriteNotice.getSubject())
				.content(requestWriteNotice.getContent())
				.build()).getNo();
		
		return saveFile(no, requestWriteNotice.getFileList());
	}
	
	@Transactional(rollbackOn = Exception.class)
	@Override
	public Boolean modifyNotice(RequestModifyNotice requestModifyNotice) throws Exception {
		int no = noticeRepository.save(Notice.builder()
				.no(requestModifyNotice.getNo())
				.subject(requestModifyNotice.getSubject())
				.content(requestModifyNotice.getContent())
				.build()).getNo();
		
		if(requestModifyNotice.getDeletedFileList() != null) {
			for (RequestDeleteAttachment rda : requestModifyNotice.getDeletedFileList()) {
				deleteFile(no, rda.getSavedName());
				
				attachmentRepository.deleteAllByNo(rda.getNo());
			}
			return true & saveFile(no, requestModifyNotice.getAddedFileList());
		}
		
		return saveFile(no, requestModifyNotice.getAddedFileList());
	}
	
	@Transactional
	@Override
	public Boolean deleteNotice(int no) {
		try {
			List<Attachment> list = attachmentRepository.findAllByNoticeNo(no);
			for(Attachment a : list) {
				deleteFile(no, a.getSavedName());
				attachmentRepository.deleteById(a.getNo());
			}
			
			// folder 삭제
			File folder = new File(realPath + File.separator + no);
			if(folder.exists())
				folder.delete();
			
			noticeRepository.deleteById(no);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	private boolean saveFile(int no, List<MultipartFile> fileList) throws Exception {
		if(fileList == null) {
			return true;
		}
		
		if(no > 0 ) {
			File folder = new File(realPath + File.separator + no);
			if(!folder.exists())
				folder.mkdirs();
			
			for(MultipartFile m : fileList) {
				String originalName = m.getOriginalFilename();
				System.out.println(originalName);
				String extension = originalName.substring(originalName.lastIndexOf('.'));
				String savedName = UUID.randomUUID() + extension;
				attachmentRepository.save(Attachment.builder()
						.originalName(originalName)
						.savedName(savedName)
						.extension(extension)
						.noticeNo(no)
						.build());
				m.transferTo(new File(folder, savedName));
			}
			return true;			
		}
		return false;
	}
	
	private void deleteFile (int no, String savedName) {
		File file = new File(realPath + File.separator + no + File.separator + savedName);
		
		if(file.exists()) { // 파일이 존재하면
			file.delete(); // 파일 삭제	
		}
	}

	@Override
	public byte[] downloadFile(int no, String savedName) throws IOException {
		File file = new File(realPath + File.separator + no + File.separator + savedName);
		return Files.readAllBytes(Paths.get(file.getAbsolutePath()));
	}
	
}
