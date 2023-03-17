# 시나브로 (SINABRO) 👵👴

### 🎤 시나브로 소개 : 
"복지관 시설을 내 집으로!"  <br/>
온라인 노인여가복지 플랫폼을 제공합니다. <br/>

시나브로 : ‘조금씩 천천히’라는 뜻의 순우리말로 조금씩 천천히 성장한다,<br/> 가까워 진다는 듯을 담고 있습니다. <br/>

웹 사이트 링크: https://i8d203.p.ssafy.io/ 


### 📃 Contents  
1. [개발기간](#-개발기간) <br/> 
2. [팀원 및 담당파트](#team) <br/>
3. [기획배경 & 타겟](#target-people) <br/>
4. [주요기능](#main-function) <br/>
5. [서비스 화면](#service) <br/>
6. [실행방법](#how-to-run) <br/>
7. [기술스택](#stack) <br/>
8. [시스템 아키텍처](#tech-architecture) <br/>
9. [ERD ](#erd) <br/> 
10. [API 명세서](#api) <br/>
11. [스케줄](#schedule) <br/>
12. [협업툴](#cooperation-tool) <br/>

### 📆 개발기간: 
<p> 2023.01.03 ~ 2023.02.16 </p>

### 💻 팀원 및 담당파트 
- **윤선영(팀장/프런트엔드)** : 
    - React/Redux-toolkit/react-router-dom 활용하여 SPA 구현
    - Axios 사용하여 백서버와 통신, 강사/사용자별 메인페이지 및 강의 상세정보 페이지 구현
        - 대분류/소분류 선택, 검색 시 해당하는 강의 정보 받아와 카드 형태로 출력
        - 강의 신청 시 메인페이지 내 우측 마이페이지로 강의 이동 및 수강신청/취소 버튼 토글
        - 강의별 상세정보 페이지 이동, 상세페이지 내 수강신청/취소 가능
    - 로그아웃 기능 구현
    - Styled-component, media-query를 통한 반응형 css 스타일링
    - PPT 제작, 발표 
- **김호균(팀원/백엔드)**:
    - Spring Security, JWT를 이용한 필터 제작
    - 백엔드 공지사항 페이지, 강의 수강자, OpenVidu 세션, 커넥션 생성 제작
    - 백엔드 API 기획 및 구현, DB 설계
    - 리액트를 이용해 확대 기능 구현
- **양동기(팀원/백엔드)**: 
    - OpenVidu 서버 on-premise로 배포
    - Jenkins, Docker를 이용한 CI/CD 구현 - Docker로 Nginx+React container, Springboot container 생성하여 배포
    - Springboot를 사용해 백엔드 API 기획 및 구현, DB 설계
    - React와 Springboot 서버간 API 통신 연결
    - OpenVidu를 통한 WebRTC 기능 구현(화면공유, 무대형, 참여형 화면 전환 시 강사 조작에 따른 사용자 화면 변화 연결)
    - Nginx SSL 인증서 처리를 통한 https 리다이렉트 설정, 백엔드 및 프론트엔드 url 분기 처리 (/, /api)
    - Swagger 도입을 통한 API docs 구현

- **이아현(팀원/프런트엔드)**: 
    - react와 redux-toolkit을 활용하여 SPA 구현
    - 로비, 회원가입, 로그인, 화상회의 페이지(모드별) 구현  
    - styled-component를 통한 css 스타일링
    - UCC 제작
- **이진우(팀원/백엔드)**: 
    - Spring Boot JPA를 사용한 백엔드 강의자(강의생성, 목록, 참여자 정보, 편집) API 구현
    - Spring Boot JPA를 사용한 백엔드 메인페이지(대분류/소분류 카테고리, 강의목록, 강의검색) API 구현
    - 백엔드 API 기획 및 DataBase 설계 
    - Openvidu 화상회의 중 사용자 음소거 기능 구현
    - READEME.md 작성


### ✔️ 기획배경 & 타겟 
- 기획배경:
    1. 노인 복지관 같은 어르신을 위한 복지시설이 수도권, 대도시에 주로 편중되어 있어서 노인 복지 지역격차가 발생하고 있다.
    2. 코로나19와 같은 특수 상황의 경우, 노인 활동이 가장 먼저 제약되고 이에 따라 노인층의 고립감과 외로움이 증폭된다. 이와 같은 상황을 해소하고자 기존에 제공되던 문화복지 강의들을 온라인으로 제공하고 있음.
    3. 웹엑스나 줌 같은 화상회의의 경우, 어르신들이 쓰기 불편한 UI/UX를 가지고 있음. 그래서 우리는 시나브로라는 어르신 맞춤형 온라인 강의 플랫폼 서비스를 기획하게 되었음.  
    4. 고령화 시대에 발맞춰 향후 다음세대도 활용할 수 있는 온라인 복지 강의 플랫폼. 
    
- 타겟층 : 
    - 디지털 기기 활용이 가능한 60-70대 노인층
    - 시간적, 공간적, 신체적 제약으로 인해 다양한 강의 복지 서비스를 누리지 못하는 노인층. 

### 🔍 주요기능 
- 주요 기능 : 
    - webRTC를 통한 실시간 화상 강의
    - 사용자(어르신) 친화적인 디자인을 고려한 UI/UX 
    - 간소화된 회원가입 및 로그인, 강의신청, 화상강의 입장 프로세스
    - 3가지 화면 모드 : 참여자 모드, 화면 공유 모드, 무대 모드
    - 강사님이 참여자 마이크 원격 제어 가능함


### 👀 시나브로 서비스 화면
<h3> 수강자 화면 <h3>
<p> 회원가입 및 로그인 </p>
<img src="/uploads/5077396214b6e84f594f35969f243a30/첫페이지.PNG" width="60%"> 
<img src="/uploads/7d269376db5b6ff48eb30ed67740f65c/회원가입1.PNG" width="60%"> 
<img src="/uploads/a44cf3ede3ee17f1770eaec72ef47b7d/회원가입2.PNG" width="60%"> 
<img src="/uploads/0134dfe9d711365e461226cb0d2840ea/회원가입3.jpg" width="60%"> 
<img src="/uploads/fcf1e93d0e692769c585edf139e0e4a6/회원가입4.PNG" width="60%"> 
<img src="/uploads/4278820184e4d78d11d8bb2bf9b6a46e/회원가입5.PNG" width="60%"> 
<img src="/uploads/145745ebae9252ea5ad1c3dafa61ac2e/회원가입6.PNG" width="60%"> 
<img src="/uploads/87e3ef59a606b6d86b606d398fb9f403/로그인.PNG" width="60%">
<p> 메인페이지 <p/>
<img src="/uploads/ec233acd4f53b1dd9ed7e5a822dce124/메인1.PNG" width="60%">
<p> 수강신청<p/>
<img src="/uploads/51c681b2244bc3675ad82e9f8a2eec54/수강신청1.PNG" width="60%"> 
<p> 나의배움터 확인<p/>
<img src="/uploads/9ce41273b6fd151c594bff10586aa0b8/수강신청.jpg" width="60%"> 
<p> 대분류/소분류 카테고리별 강의 검색<p/>
<img src="/uploads/673e9e0bbe14f23c2b0b1b3c66467bdb/소분류카테고리.png" width="60%"> 
<p> 강의 검색 결과 <p/>
<img src="/uploads/3e9071b5aa5885250827c23ee3c23965/검색결과.PNG" width="60%"> 
<p> 강의 입장 <p/>
<img src="/uploads/73fd946c784ddbead580ff5d44af306d/수강신청.jpg" width="60%"> 
<p> 마이크 및 비디오 켜기/끄기 <p/>
<img src="/uploads/6ed1f4ba19628fc0ab5b220e0998dc53/강의입장.PNG" width="60%"> 
<p> 돋보기 기능 <p/>
<img src="/uploads/a4b3244a9574e915715a6a58d465ccf7/돋보기.PNG" width="60%"> 


<h3> 강의자 화면 </h3>
<p> 강의자 메인페이지<p/>
<img src="/uploads/c924f6743f7a71b16bd5bd0ed6f6f194/강사메인.png" width="60%"> 
<p> 강의자 강의화면<p/>
<img src="/uploads/b6747cdca31ebe662c0ba0ba44b50f2f/강사강의화면.png" width="60%"> 
<p> 화면공유시 화면<p/>
<img src="/uploads/3bc5169772dde8e0999bd854b9dd534d/화면공유.png" width="60%"> 
<p> 참여형 화면<p/>
<img src="/uploads/ce9293f2cf57d14d8ac3fb900fc963af/참여형.png" width="60%">
<p> 전체음소거 기능 <p/>
<img src="/uploads/7ea03d8220471af5b48af81e62721377/전체음소거.png" width="60%"> 

### ✨ 실행방법
- 포팅 매뉴얼 참조 

### 📚 기술스택
- Front-End:
    - React
    - reduxjs/toolkit 
    - styled-components
- Backend
    - Database: Mysql
    - Web: Springboot
    - Library: Spring JPA, Spring Security, OpenVidu
- CI/CD
    - Docker
    - Jenkins
- Web Service 
    - AWS EC2
    - Nginx

### 🔨 시스템 아키텍처
![시스템아키텍처](/uploads/1c157d6efcae4d6ef1569ca871c1684e/시스템아키텍처.PNG)

### 🎨 ERD 
![ERD](/uploads/af052303cf82cc6eb439994ca6026630/ERD.png)

### 💡 API 명세서
![API문서](/uploads/0a6f1eeb7e5669e0424af665f4dd88a8/API문서.PNG)

### 🗓️ 스케줄(간트차트)
![간트차트](/uploads/17496513a462478c1140046810855eee/간트차트.png)

### 💪 협업툴 
- Notion 
- Jira
- GitLab
- Figma
- MatterMost
