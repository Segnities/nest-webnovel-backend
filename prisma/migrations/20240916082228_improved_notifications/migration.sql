/*
  Warnings:

  - You are about to drop the column `notificationStatusId` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `formatId` on the `novel` table. All the data in the column will be lost.
  - You are about to drop the column `statusId` on the `novel` table. All the data in the column will be lost.
  - You are about to drop the column `translationStatusId` on the `novel` table. All the data in the column will be lost.
  - You are about to drop the `format` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notification_status` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `status` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `translation_status` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `notificationStatus` to the `notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `format` to the `novel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `novel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `translationStatus` to the `novel` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "NovelStatus" AS ENUM ('ONGOING', 'COMPLETED', 'HIATUS', 'CANCELLED');

-- CreateEnum
CREATE TYPE "NovelFormat" AS ENUM ('LIGHT_NOVEL', 'WEB_NOVEL');

-- CreateEnum
CREATE TYPE "NovelTranslationStatus" AS ENUM ('NOT_TRANSLATED', 'PARTIALLY_TRANSLATED', 'FULLY_TRANSLATED', 'MACHINE_TRANSLATED', 'ONGOING');

-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_notificationStatusId_fkey";

-- DropForeignKey
ALTER TABLE "novel" DROP CONSTRAINT "novel_formatId_fkey";

-- DropForeignKey
ALTER TABLE "novel" DROP CONSTRAINT "novel_statusId_fkey";

-- DropForeignKey
ALTER TABLE "novel" DROP CONSTRAINT "novel_translationStatusId_fkey";

-- DropIndex
DROP INDEX "notification_userId_status_createdAt_idx";

-- DropIndex
DROP INDEX "novel_authorId_statusId_formatId_idx";

-- AlterTable
ALTER TABLE "notification" DROP COLUMN "notificationStatusId",
DROP COLUMN "status",
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "notificationGroupId" INTEGER,
ADD COLUMN     "notificationStatus" "NotificationMessageStatus" NOT NULL;

-- AlterTable
ALTER TABLE "novel" DROP COLUMN "formatId",
DROP COLUMN "statusId",
DROP COLUMN "translationStatusId",
ADD COLUMN     "format" "NovelFormat" NOT NULL,
ADD COLUMN     "status" "NovelStatus" NOT NULL,
ADD COLUMN     "translationStatus" "NovelTranslationStatus" NOT NULL;

-- DropTable
DROP TABLE "format";

-- DropTable
DROP TABLE "notification_status";

-- DropTable
DROP TABLE "status";

-- DropTable
DROP TABLE "translation_status";

-- CreateTable
CREATE TABLE "notification_group" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "parentGroupId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notification_group_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "notification_userId_notificationStatus_createdAt_idx" ON "notification"("userId", "notificationStatus", "createdAt");

-- CreateIndex
CREATE INDEX "novel_authorId_idx" ON "novel"("authorId");

-- AddForeignKey
ALTER TABLE "notification_group" ADD CONSTRAINT "notification_group_parentGroupId_fkey" FOREIGN KEY ("parentGroupId") REFERENCES "notification_group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_notificationGroupId_fkey" FOREIGN KEY ("notificationGroupId") REFERENCES "notification_group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
