/*
  Warnings:

  - You are about to drop the column `notificationEntityId` on the `author` table. All the data in the column will be lost.
  - You are about to drop the column `notificationEntityId` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `notificationTypeId` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `notificationEntityId` on the `novel` table. All the data in the column will be lost.
  - You are about to drop the column `notificationEntityId` on the `review` table. All the data in the column will be lost.
  - You are about to drop the `notification_entity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notification_related_entity_type` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `relatedEntityId` to the `notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relatedEntityType` to the `notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `notification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "author" DROP CONSTRAINT "author_notificationEntityId_fkey";

-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_notificationEntityId_fkey";

-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_notificationStatusId_fkey";

-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_notificationTypeId_fkey";

-- DropForeignKey
ALTER TABLE "notification_entity" DROP CONSTRAINT "notification_entity_notifRelEntTypeId_fkey";

-- DropForeignKey
ALTER TABLE "novel" DROP CONSTRAINT "novel_notificationEntityId_fkey";

-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_notificationEntityId_fkey";

-- DropIndex
DROP INDEX "notification_userId_notificationStatusId_createdAt_idx";

-- AlterTable
ALTER TABLE "author" DROP COLUMN "notificationEntityId";

-- AlterTable
ALTER TABLE "comment" DROP COLUMN "notificationEntityId";

-- AlterTable
ALTER TABLE "notification" DROP COLUMN "notificationTypeId",
ADD COLUMN     "authorId" INTEGER,
ADD COLUMN     "commentId" INTEGER,
ADD COLUMN     "novelId" INTEGER,
ADD COLUMN     "relatedEntityId" INTEGER NOT NULL,
ADD COLUMN     "relatedEntityType" "NotificationRelatedEntity" NOT NULL,
ADD COLUMN     "reviewId" INTEGER,
ADD COLUMN     "status" "NotificationMessageStatus" NOT NULL,
ADD COLUMN     "typeId" INTEGER NOT NULL,
ALTER COLUMN "notificationStatusId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "novel" DROP COLUMN "notificationEntityId";

-- AlterTable
ALTER TABLE "review" DROP COLUMN "notificationEntityId";

-- DropTable
DROP TABLE "notification_entity";

-- DropTable
DROP TABLE "notification_related_entity_type";

-- CreateIndex
CREATE INDEX "notification_userId_status_createdAt_idx" ON "notification"("userId", "status", "createdAt");

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "notification_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_notificationStatusId_fkey" FOREIGN KEY ("notificationStatusId") REFERENCES "notification_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "review"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE SET NULL ON UPDATE CASCADE;
