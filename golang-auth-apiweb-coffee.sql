-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2024 at 09:21 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `golang-auth-apiweb-coffee`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_tokens`
--

CREATE TABLE `auth_user_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `access_token` varchar(350) DEFAULT NULL,
  `refesh_token` varchar(350) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_user_tokens`
--

INSERT INTO `auth_user_tokens` (`id`, `access_token`, `refesh_token`, `user_id`) VALUES
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDY4NjE1MDcsImlzcyI6IjEifQ.PbCTWUbBrkaSeh4SKOTitI_VphOyynFnumq1cSKFroY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDY5NDc4NzcsImlzcyI6IjUifQ.6CzkwbLrahrmom62LWuyaSkbF3etqQrEuI0DxClCKvY', 5);

-- --------------------------------------------------------

--
-- Table structure for table `coffes`
--

CREATE TABLE `coffes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `jenis_coffe` varchar(350) DEFAULT NULL,
  `harga_coffe` varchar(350) DEFAULT NULL,
  `images_coffe` varchar(350) DEFAULT NULL,
  `url_image_coffe` varchar(350) DEFAULT NULL,
  `description_coffe` varchar(350) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coffes`
--

INSERT INTO `coffes` (`id`, `jenis_coffe`, `harga_coffe`, `images_coffe`, `url_image_coffe`, `description_coffe`) VALUES
(47, 'Coffe Mochaccino', '100000', '27cf802fbc014b5fa2b2ab82315807fc.jpg', 'http://localhost:5000/util/img_coffe/27cf802fbc014b5fa2b2ab82315807fc.jpg', 'Espresso merupakan kopi yang dihasilkan dari proses penyeduhan kopi dengan tekanan dan suhu tinggi. Kopi espresso dibuat dengan menggiling kopi hingga halus, lalu dipadatkan atau biasa disebut “tamping”, kemudian kopi diseduh dengan tekanan tinggi dengan suhu yang tinggi, sehingga menghasilkan ekstrak kopi yang kental.'),
(48, 'Coffe Espresso', '450000', '2725a1e9dcf74db7b0244ba6a545daf5.jpeg', 'http://localhost:5000/util/img_coffe/2725a1e9dcf74db7b0244ba6a545daf5.jpeg', 'Espresso merupakan kopi yang dihasilkan dari proses penyeduhan kopi dengan tekanan dan suhu tinggi. Kopi espresso dibuat dengan menggiling kopi hingga halus, lalu dipadatkan atau biasa disebut “tamping”, kemudian kopi diseduh dengan tekanan tinggi dengan suhu yang tinggi, sehingga menghasilkan ekstrak kopi yang kental.'),
(49, 'Coffe Americano', '1200000', '377fb489c9054cd289b2283cdd5124e9.jpg', 'http://localhost:5000/util/img_coffe/377fb489c9054cd289b2283cdd5124e9.jpg', 'Espresso merupakan kopi yang dihasilkan dari proses penyeduhan kopi dengan tekanan dan suhu tinggi. Kopi espresso dibuat dengan menggiling kopi hingga halus, lalu dipadatkan atau biasa disebut “tamping”, kemudian kopi diseduh dengan tekanan tinggi dengan suhu yang tinggi, sehingga menghasilkan ekstrak kopi yang kental.'),
(50, 'Coffe Jeruk', '130000', '532245843e67415ea500197aebf808d3.jpeg', 'http://localhost:5000/util/img_coffe/532245843e67415ea500197aebf808d3.jpeg', 'Espresso merupakan kopi yang dihasilkan dari proses penyeduhan kopi dengan tekanan dan suhu tinggi. Kopi espresso dibuat dengan menggiling kopi hingga halus, lalu dipadatkan atau biasa disebut “tamping”, kemudian kopi diseduh dengan tekanan tinggi dengan suhu yang tinggi, sehingga menghasilkan ekstrak kopi yang kental.'),
(51, 'Coffe ICO', '150000', '0324e3b2db4f470ba2df0894a7207a16.jpg', 'http://localhost:5000/util/img_coffe/0324e3b2db4f470ba2df0894a7207a16.jpg', 'Espresso merupakan kopi yang dihasilkan dari proses penyeduhan kopi dengan tekanan dan suhu tinggi. Kopi espresso dibuat dengan menggiling kopi hingga halus, lalu dipadatkan atau biasa disebut “tamping”, kemudian kopi diseduh dengan tekanan tinggi dengan suhu yang tinggi, sehingga menghasilkan ekstrak kopi yang kental.'),
(52, 'Coffe ESO', '160000', 'b7631ac828794fe89de42b5c21736332.jpg', 'http://localhost:5000/util/img_coffe/b7631ac828794fe89de42b5c21736332.jpg', 'Espresso merupakan kopi yang dihasilkan dari proses penyeduhan kopi dengan tekanan dan suhu tinggi. Kopi espresso dibuat dengan menggiling kopi hingga halus, lalu dipadatkan atau biasa disebut “tamping”, kemudian kopi diseduh dengan tekanan tinggi dengan suhu yang tinggi, sehingga menghasilkan ekstrak kopi yang kental.'),
(53, 'Coffe Omon Omon', '180000', '32316e0deee3491ca86fa8d0fe0ad574.jpg', 'http://localhost:5000/util/img_coffe/32316e0deee3491ca86fa8d0fe0ad574.jpg', 'Espresso merupakan kopi yang dihasilkan dari proses penyeduhan kopi dengan tekanan dan suhu tinggi. Kopi espresso dibuat dengan menggiling kopi hingga halus, lalu dipadatkan atau biasa disebut “tamping”, kemudian kopi diseduh dengan tekanan tinggi dengan suhu yang tinggi, sehingga menghasilkan ekstrak kopi yang kental.'),
(54, 'Coffe Cola Cola', '2499999', 'b15d63e451464519b6335115e49b5347.jpg', 'http://localhost:5000/util/img_coffe/b15d63e451464519b6335115e49b5347.jpg', 'Espresso merupakan kopi yang dihasilkan dari proses penyeduhan kopi dengan tekanan dan suhu tinggi. Kopi espresso dibuat dengan menggiling kopi hingga halus, lalu dipadatkan atau biasa disebut “tamping”, kemudian kopi diseduh dengan tekanan tinggi dengan suhu yang tinggi, sehingga menghasilkan ekstrak kopi yang kental.');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'Admin'),
(2, 'Users');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(80) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `password` longblob NOT NULL,
  `id_role` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `id_role`) VALUES
(5, 'eioioio', 'ekopaass510@gmail.com', 0x2432612431302469465a47356a51592f416f41367543326237597a322e34784f3670724e457543695230416e79726e757a356a666b696c726673794f, 1),
(6, 'eioo', 'ekop510@gmail.com', 0x2432612431302477496d6758324e303837464a7950765243325657664f4e3166345252517574674870514c496c6f75794a506e4749356431306a5765, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_user_tokens`
--
ALTER TABLE `auth_user_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_auth_user_tokens_users` (`user_id`);

--
-- Indexes for table `coffes`
--
ALTER TABLE `coffes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_users_role` (`id_role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_user_tokens`
--
ALTER TABLE `auth_user_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `coffes`
--
ALTER TABLE `coffes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_user_tokens`
--
ALTER TABLE `auth_user_tokens`
  ADD CONSTRAINT `fk_auth_user_tokens_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_role` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
