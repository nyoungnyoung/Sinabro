-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: i8d203.p.ssafy.io    Database: oswsdb
-- ------------------------------------------------------
-- Server version	5.7.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lecture`
--

DROP TABLE IF EXISTS `lecture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lecture` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(30) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `original_name` varchar(30) DEFAULT NULL,
  `saved_name` varchar(100) DEFAULT NULL,
  `teacher_to_lecture` int(11) NOT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `max_occupancy` int(11) NOT NULL,
  PRIMARY KEY (`no`),
  UNIQUE KEY `saved_name` (`saved_name`),
  KEY `FK_TEACHER_TO_LECTURE` (`teacher_to_lecture`),
  CONSTRAINT `FK_TEACHER_TO_LECTURE` FOREIGN KEY (`teacher_to_lecture`) REFERENCES `user` (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lecture`
--

LOCK TABLES `lecture` WRITE;
/*!40000 ALTER TABLE `lecture` DISABLE KEYS */;
INSERT INTO `lecture` VALUES (1,'재활운동','2023-02-02','2023-03-01',NULL,'https://cdn.class101.net/images/9bf0c88b-af65-443b-aa62-1dc0ac98e853/1920xauto.webp',1,'운동합시다',20),(2,'재활운동2','2023-02-02','2023-03-03',NULL,'https://cdn.class101.net/images/10916836-9ccc-4ce1-831e-cd3d9dd7500d/1920xauto.webp',1,'운동합시다',20),(3,'유화그림 그리기','2023-02-06','2023-03-07',NULL,'https://cdn.class101.net/images/8d92a64a-ca38-4f38-bf75-5a0f19a4e204/1920xauto.webp',2,'서양화를 그려요',15),(4,'집에서 하는 요가','2023-02-08','2023-03-15',NULL,'https://cdn.class101.net/images/2b6ddf77-8372-40ee-b957-6d9fcf52f2b1/1920xauto.webp',3,'요가를 해요',15),(5,'뜨개질로 만드는 나만의 모자','2023-02-06','2023-03-18',NULL,'http://www.womennews.co.kr/news/photo/first/201412/img_78353_1.jpg',3,'뜨개질로 모자를 만들어보아요',15),(6,'쉽게하는 전통자수','2023-02-15','2023-04-12',NULL,'https://www.sookmyung.ac.kr/sites/museum/atchmnfl/bbs/836/thumbnail/temp_1641363549192100.jpg',3,'쉽게 따라하는 전통 자수 함께해요',20),(7,'캘리그래피를 배워보자','2023-02-09','2023-03-16',NULL,'https://t1.daumcdn.net/cfile/tistory/99CCAF455B083AD614',2,'캘리그래피를 배워보아요',30),(8,'색연필로 표현하는 그림교실','2023-02-12','2023-03-17',NULL,'https://image.idus.com/image/files/8c28c520d0d947bb88add9af1ff549ac_1080.jpg',2,'색연필로 그려보아요',20),(9,'도자기 만들기','2023-02-26','2023-04-28',NULL,'http://kkoma.net/web/product/big/20200304/a33f3790877ffcf5febb963591393208.jpg',3,'도자기를 같이 만들어 보아요',25);
/*!40000 ALTER TABLE `lecture` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-16 23:30:06
