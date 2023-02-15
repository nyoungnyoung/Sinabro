package com.ssafy.osws.openvidu.service;


import com.ssafy.osws.openvidu.dto.response.ResponseCreateConnection;

public interface OpenViduService {

	ResponseCreateConnection getUserName(int parseInt, String phone);

}
