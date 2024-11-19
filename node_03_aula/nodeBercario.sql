CREATE DATABASE nodeBercario;
CREATE TABLE IF NOT EXISTS `nodebercario`.`bebe` (
  `id_bebe` INT NOT NULL AUTO_INCREMENT,
  `nome_bebe` VARCHAR(50) NULL,
  `sexo` CHAR(1) NULL,
  `nome_mae` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_bebe`));
  
  SELECT * FROM bebe;
  
  DELETE FROM bebe WHERE id_bebe = "2";