/*
  Warnings:

  - You are about to drop the column `complaitTypeId` on the `comment` table. All the data in the column will be lost.
  - Added the required column `complaintTypeId` to the `comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CommentStatus" AS ENUM ('ACTIVE', 'DELETED', 'HIDDEN_BY_MODERATOR', 'HIDDEN');

-- AlterTable
ALTER TABLE "comment" DROP COLUMN "complaitTypeId",
ADD COLUMN     "complaintTypeId" INTEGER NOT NULL,
ADD COLUMN     "dislikes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "status" "CommentStatus" NOT NULL;

-- CreateIndex
CREATE INDEX "comment_userId_commendableTypeId_createdAt_idx" ON "comment"("userId", "commendableTypeId", "createdAt");
