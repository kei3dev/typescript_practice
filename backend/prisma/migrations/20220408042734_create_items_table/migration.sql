-- CreateTable
CREATE TABLE `items` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `status` ENUM('ON_SALE', 'SOLD_OUT') NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
