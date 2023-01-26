package com.ssafy.osws.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.osws.user.dao.CommonDao;

@Service
public class CommonServiceImpl implements CommonService {
	
	@Autowired
	CommonDao commonDao;

	@Override
	public boolean isSaved(String phone) {
		return commonDao.isSaved(phone);
	}

}
