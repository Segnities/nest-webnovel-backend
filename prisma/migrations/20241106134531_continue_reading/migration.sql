/*
  Warnings:

  - You are about to drop the column `novelId` on the `continue_reading` table. All the data in the column will be lost.
  - You are about to drop the column `progressPercentage` on the `continue_reading` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "continue_reading" DROP CONSTRAINT "continue_reading_novelId_fkey";

-- AlterTable
ALTER TABLE "continue_reading" DROP COLUMN "novelId",
DROP COLUMN "progressPercentage";
