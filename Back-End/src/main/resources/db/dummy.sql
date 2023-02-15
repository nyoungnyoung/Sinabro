use oswsdb;

# category 
INSERT INTO `category` VALUES (0,'전체'),(1,'운동·건강'),(2,'그림·공예'),(3,'요리'),(4,'외국어'),(5,'정보화·디지털'),(6,'글짓기'),(7,'노래·악기'),(8,'노후대비');

# sub_category
INSERT INTO `sub_category` VALUES (1,'재활',1),(2,'요가',1),(3,'유화미술',2);

# lecture
INSERT INTO `lecture` VALUES (1,'재활운동','2023-02-02','2023-02-02',NULL,NULL,1,'운동합시다',20),(2,'재활운동2','2023-02-02','2023-02-02',NULL,NULL,1,'운동합시다',20),(3,'유화그림 그리기','2023-02-03','2023-02-10',NULL,NULL,2,'서영화를 그려요',15),(7,'이효리의 요가클래스','2023-02-03','2023-02-10',NULL,NULL,3,'요가를 해요',15);

# lecture_category 
INSERT INTO `lecture_category` VALUES (1,1),(2,1),(7,2),(3,3);

# notice
INSERT INTO `notice` (content, subject, priority, registered_date) values ("공지내용", "공지사항", true, now());






