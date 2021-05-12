
# This is a fix for InnoDB in MySQL >= 4.1.x
# It "suspends judgement" for fkey relationships until are tables are set.
SET FOREIGN_KEY_CHECKS = 0;

-- ---------------------------------------------------------------------
-- block_group
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `block_group`;

CREATE TABLE `block_group`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(50),
    `visible` TINYINT DEFAULT 0 NOT NULL,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `slug_unique` (`slug`)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- item_block_group
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `item_block_group`;

CREATE TABLE `item_block_group`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_type` VARCHAR(255),
    `item_id` INTEGER,
    `block_group_id` INTEGER,
    PRIMARY KEY (`id`),
    INDEX `fi_item_block_group_block_group_id` (`block_group_id`),
    CONSTRAINT `fk_item_block_group_block_group_id`
        FOREIGN KEY (`block_group_id`)
        REFERENCES `block_group` (`id`)
        ON UPDATE RESTRICT
        ON DELETE CASCADE
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- block_group_i18n
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `block_group_i18n`;

CREATE TABLE `block_group_i18n`
(
    `id` INTEGER NOT NULL,
    `locale` VARCHAR(5) DEFAULT 'en_US' NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `json_content` TEXT,
    PRIMARY KEY (`id`,`locale`),
    CONSTRAINT `block_group_i18n_fk_d94d4c`
        FOREIGN KEY (`id`)
        REFERENCES `block_group` (`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB;

# This restores the fkey checks, after having unset them earlier
SET FOREIGN_KEY_CHECKS = 1;
