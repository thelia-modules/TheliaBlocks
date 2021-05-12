# This is a fix for InnoDB in MySQL >= 4.1.x
# It "suspends judgement" for fkey relationships until are tables are set.
SET FOREIGN_KEY_CHECKS = 0;

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


# This restores the fkey checks, after having unset them earlier
SET FOREIGN_KEY_CHECKS = 1;
