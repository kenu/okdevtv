--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `uri` varchar(2048) NOT NULL DEFAULT '/',
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `attends`
--

DROP TABLE IF EXISTS `attends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attends` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tip`
--

DROP TABLE IF EXISTS `tip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tip` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(127) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `message` text NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `clientip` varchar(15) NOT NULL DEFAULT '127.0.0.1' COMMENT 'ip address',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `seq` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `email` varchar(50) NOT NULL DEFAULT '' COMMENT '사용자아이디-email',
  `passwd` varchar(120) NOT NULL DEFAULT '' COMMENT '비밀번호',
  `github` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '{}' COMMENT 'github social login',
  `created_at` datetime NOT NULL COMMENT '생성일시',
  `updated_at` datetime DEFAULT NULL COMMENT '갱신일시',
  PRIMARY KEY (`seq`),
  UNIQUE KEY `idx_user_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_candidate`
--

DROP TABLE IF EXISTS `user_candidate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_candidate` (
  `seq` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '연번',
  `email` varchar(50) NOT NULL DEFAULT '' COMMENT 'email',
  `uuid` varchar(40) NOT NULL DEFAULT '' COMMENT 'uuid',
  `reset` char(1) NOT NULL DEFAULT 'N' COMMENT '비번리셋',
  `finish` char(1) NOT NULL DEFAULT 'N' COMMENT '완료',
  `created_at` datetime NOT NULL COMMENT '생성일시',
  `finished_at` datetime DEFAULT NULL COMMENT '완료일시',
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
