package com.ssafy.osws.openvidu;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.osws.openvidu.dto.response.ResponseCreateConnection;
import com.ssafy.osws.openvidu.service.OpenViduService;

import io.openvidu.java.client.Connection;
import io.openvidu.java.client.ConnectionProperties;
import io.openvidu.java.client.OpenVidu;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import io.openvidu.java.client.Session;
import io.openvidu.java.client.SessionProperties;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
public class Controller {

	private final OpenViduService openViduService;
	
	@Value("${OPENVIDU_URL}")
	private String OPENVIDU_URL;

	@Value("${OPENVIDU_SECRET}")
	private String OPENVIDU_SECRET;

	private OpenVidu openvidu;

	@PostConstruct
	public void init() {
		this.openvidu = new OpenVidu(OPENVIDU_URL, OPENVIDU_SECRET);
	}

	/**
	 * @param params The Session properties
	 * @return The Session ID
	 */
	@PostMapping("/api/sessions")
	public ResponseEntity<ResponseCreateConnection> initializeSession(@RequestBody(required = false) Map<String, Object> params)
			throws OpenViduJavaClientException, OpenViduHttpException {
		// params로 customSessionId를 보내야 한다. customSessionId는 강의 번호다.
		SessionProperties properties = SessionProperties.fromJson(params).build();
		Session session = openvidu.createSession(properties);
		
		// 강의 번호를 이용해 세션을 만든다. 강의 번호를 이용해 강의 이름을 조회하고 그 값을 반환한다. 
		// 강의 이름을 프론트 myClassName에 박아 강의실 이름처럼 사용할 수 있다.
		// 없는 강의나 강의를 만든 강사나 수강중인 학생이 아니라면 forbidden 에러 발생
		ResponseCreateConnection response = openViduService.getUserName(Integer.parseInt(session.getSessionId()), getPhone());
		if(response == null)
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		
		// clientData에 값을 넣어주는게 이 과정에서는 안되고 프론트에서 openvidu 서버에 커넥트 요청을 할 때 가능하다. 
		// 따라서 토큰과 사용자 이름 반환으로 변경
		ConnectionProperties connectionProperties = ConnectionProperties.fromJson(new HashMap<String, Object>()).build();
		Connection connection = session.createConnection(connectionProperties);
		response.setToken(connection.getToken());
		
		return new ResponseEntity<ResponseCreateConnection>(response, HttpStatus.OK);
	}
	
	@DeleteMapping("/api/sessions/{sessionId}/connections")
	public ResponseEntity<Boolean> deleteSession(@PathVariable("sessionId") String sessionId,
			@RequestBody(required = false) Map<String, Object> params)
			throws OpenViduJavaClientException, OpenViduHttpException {
		
		Session session = openvidu.getActiveSession(sessionId);
		if (session == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		session.close();
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	private String getPhone() {
		return SecurityContextHolder.getContext().getAuthentication().getName();
	}

}
