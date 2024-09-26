/*
  Warnings:

  - You are about to drop the `novel_rating` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rating` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "novel_rating" DROP CONSTRAINT "novel_rating_novelId_fkey";

-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_novelId_fkey";

-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_userId_fkey";

-- AlterTable
ALTER TABLE "novel" ADD COLUMN     "dislikes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isAdult" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "password" DROP NOT NULL;

-- DropTable
DROP TABLE "novel_rating";

-- DropTable
DROP TABLE "rating";

-- CreateTable
CREATE TABLE "user_rating" (
    "id" SERIAL NOT NULL,
    "isLiked" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "novelId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "user_rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "user_rating_novelId_userId_idx" ON "user_rating"("novelId", "userId");

-- AddForeignKey
ALTER TABLE "user_rating" ADD CONSTRAINT "user_rating_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_rating" ADD CONSTRAINT "user_rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
