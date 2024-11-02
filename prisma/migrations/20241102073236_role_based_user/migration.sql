/*
  Warnings:

  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `permission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "permission" DROP CONSTRAINT "permission_roleId_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "password",
ALTER COLUMN "img" DROP NOT NULL,
ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "isAdult" DROP NOT NULL;

-- DropTable
DROP TABLE "permission";
