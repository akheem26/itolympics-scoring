-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2015 at 06:30 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `itolympics`
--

-- --------------------------------------------------------

--
-- Table structure for table `contestants`
--

CREATE TABLE IF NOT EXISTS `contestants` (
  `school_id` int(10) NOT NULL AUTO_INCREMENT,
  `school_name` varchar(100) NOT NULL,
  `school_logo` varchar(100) NOT NULL,
  `total_score` int(10) NOT NULL,
  PRIMARY KEY (`school_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `contestants`
--

INSERT INTO `contestants` (`school_id`, `school_name`, `school_logo`, `total_score`) VALUES
(3, 'Baliuag University', 'baliuag-university-logo.png', 0),
(4, 'Canossa College', 'canossa-college.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE IF NOT EXISTS `questions` (
  `question_id` int(11) NOT NULL AUTO_INCREMENT,
  `question_name` varchar(50) NOT NULL,
  `question_category` varchar(50) NOT NULL,
  `point` int(10) NOT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`question_id`, `question_name`, `question_category`, `point`) VALUES
(1, 'Q1', 'easy', 10),
(2, 'Q2', 'easy', 10),
(3, 'Q3', 'easy', 10),
(4, 'Q4', 'easy', 10),
(5, 'Q5', 'easy', 10),
(6, 'Q6', 'easy', 10),
(7, 'Q7', 'easy', 10),
(8, 'Q8', 'easy', 10),
(9, 'Q9', 'easy', 10),
(10, 'Q10', 'easy', 10),
(11, 'Q1', 'average', 20),
(12, 'Q2', 'average', 20),
(13, 'Q3', 'average', 20),
(14, 'Q4', 'average', 20),
(15, 'Q5', 'average', 20),
(16, 'Q6', 'average', 20),
(17, 'Q7', 'average', 20),
(18, 'Q8', 'average', 20),
(19, 'Q9', 'average', 20),
(20, 'Q10', 'average', 20),
(21, 'Q1', 'difficult', 30),
(22, 'Q2', 'difficult', 30),
(23, 'Q3', 'difficult', 30),
(24, 'Q4', 'difficult', 30),
(25, 'Q5', 'difficult', 30),
(26, 'Q6', 'difficult', 30),
(27, 'Q7', 'difficult', 30),
(28, 'Q8', 'difficult', 30),
(29, 'Q9', 'difficult', 30),
(30, 'Q10', 'difficult', 30);

-- --------------------------------------------------------

--
-- Table structure for table `score_logs`
--

CREATE TABLE IF NOT EXISTS `score_logs` (
  `score_id` int(10) NOT NULL AUTO_INCREMENT,
  `school_id` int(10) NOT NULL,
  `question_id` int(10) NOT NULL,
  PRIMARY KEY (`score_id`),
  KEY `school_id` (`school_id`),
  KEY `question_id` (`question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `score_logs`
--
ALTER TABLE `score_logs`
  ADD CONSTRAINT `score_logs_ibfk_1` FOREIGN KEY (`school_id`) REFERENCES `contestants` (`school_id`),
  ADD CONSTRAINT `score_logs_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`question_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
