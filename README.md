# 시나브로 (SINABRO) 👵👴

### 🎤 시나브로 소개 및 시연 영상: 
"복지관 시설을 내 집으로!"  <br/>
온라인 노인여가복지 플랫폼을 제공합니다. <br/>

시나브로 : ‘조금씩 천천히’라는 뜻의 순우리말로 조금씩 천천히 성장한다,<br/> 가까워 진다는 듯을 담고 있습니다. <br/>

웹 사이트 링크: https://i8d203.p.ssafy.io/ 

### 📃 Contents  
1. [개발기간](#개발기간) <br/> 
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
- 윤선영(팀장/프런트엔드) : 
    - React/Redux-toolkit/react-router-dom 활용하여 SPA 구현
    - Axios 사용하여 백서버와 통신, 강사/사용자별 메인페이지 및 강의 상세정보 페이지 구현
        - 대분류/소분류 선택, 검색 시 해당하는 강의 정보 받아와 카드 형태로 출력
        - 강의 신청 시 메인페이지 내 우측 마이페이지로 강의 이동 및 수강신청/취소 버튼 토글
        - 강의별 상세정보 페이지 이동, 상세페이지 내 수강신청/취소 가능
    - 로그아웃 기능 구현
    - Styled-component, media-query를 통한 반응형 css 스타일링
    - PPT 제작, 발표 
- 김호균(팀원/백엔드) :
    - Spring Security, JWT를 이용한 필터 제작
    - 백엔드 공지사항 페이지, 강의 수강자, OpenVidu 세션, 커넥션 생성 제작
    - 백엔드 API 기획 및 구현, DB 설계
    - 리액트를 이용해 확대 기능 구현
- 양동기(팀원/백엔드) : ‘ ’, '', '' <br/>


- 이아현(팀원/프런트엔드) : 
    - react와 redux-toolkit을 활용하여 SPA 구현
    - 로비, 회원가입, 로그인, 화상회의 페이지(모드별) 구현  
    - styled-component를 통한 css 스타일링
    - UCC 제작
- 이진우(팀원/백엔드) : 
    - Spring Boot JPA를 사용한 백엔드 강의자(강의생성, 목록, 참여자 정보, 편집) API 구현
    - Spring Boot JPA를 사용한 백엔드 메인페이지(대분류/소분류 카테고리, 강의목록, 강의검색) API 구현
    - 백엔드 API 기획 및 DataBase 설계 
    - Openvidu 화상회의 중 사용자 음소거 기능 구현


### ✔️ 기획배경 & 타겟 
- 기획배경:
    1. 복지시설이 수도권, 대도시에 주로 편중되어 있어서 복지 지역격차가 발생하고 있다.
    2. 노인 고립감과 외로움을 해소하고자 하여 온라인으로 제공.
    3. 어르신 맞춤형 온라인 강의 플랫폼을 제공하여 어르신들의 디지털 교육에 도움이 되고 이바지. 
    4. 고령화 시대에 발맞춰 향후 다음세대가 활용할 수 있는 온라인 복지 강의 플랫폼. 
    
- 타겟층 : 
    - 디지털 기기 활용이 가능한 60-70대 노인층
    - 시간적, 공간적 제약으로 인해 다양한 강의 복지를 누리고 싶으나 복지시설에 방문할 수 없어 포기하고 있는 어르신

### 🔍 주요기능 
- 주요 기능 : 
    - webRTC를 통한 실시간 화상 강의
    - 사용자(어르신) 친화적인 디자인을 고려한 UI/UX 
    - 간소화된 회원가입 및 로그인, 강의신청, 화상강의 입장 프로세스
    - 3가지 화면 모드 : 참여자 모드, 강의자 포커스
    - 강사님의 사용자 마이크 원격 제어 기능


### 👀 시나브로 서비스 화면
<details markdown="1">
<summary> 서비스 화면 보기!!  ←  클릭!! </summary>
<img src=".jpg" width="60%"> 
</details>

### ✨ 실행방법


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



### 🗓️ 스케줄(간트차트)
![간트차트](/uploads/17496513a462478c1140046810855eee/간트차트.png)

### 💪 협업툴 
- Notion 
- Jira
- GitLab
- Figma
- MatterMost