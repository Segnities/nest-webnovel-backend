/*
  Warnings:

  - You are about to drop the column `complaintTargetId` on the `chapter` table. All the data in the column will be lost.
  - You are about to drop the column `complaitTypeId` on the `chapter` table. All the data in the column will be lost.
  - You are about to drop the column `complaintTargetId` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `complaintTargetId` on the `news` table. All the data in the column will be lost.
  - You are about to drop the column `complaintTargetId` on the `novel` table. All the data in the column will be lost.
  - You are about to drop the `appeal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `appeal_reason` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ban` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ban_reason` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `complaint_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `complaint_reason` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `complaint_target_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `content_complaint` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `novel_collection_mapping` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_collection_mapping` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_complaint` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "appeal" DROP CONSTRAINT "appeal_appealReasonId_fkey";

-- DropForeignKey
ALTER TABLE "appeal" DROP CONSTRAINT "appeal_reviewedBy_fkey";

-- DropForeignKey
ALTER TABLE "author_subscription" DROP CONSTRAINT "author_subscription_authorId_fkey";

-- DropForeignKey
ALTER TABLE "author_subscription" DROP CONSTRAINT "author_subscription_userId_fkey";

-- DropForeignKey
ALTER TABLE "ban" DROP CONSTRAINT "ban_appealId_fkey";

-- DropForeignKey
ALTER TABLE "ban" DROP CONSTRAINT "ban_complaintTargetId_fkey";

-- DropForeignKey
ALTER TABLE "ban" DROP CONSTRAINT "ban_issuedBy_fkey";

-- DropForeignKey
ALTER TABLE "ban" DROP CONSTRAINT "ban_userId_fkey";

-- DropForeignKey
ALTER TABLE "chapter" DROP CONSTRAINT "chapter_complaintTargetId_fkey";

-- DropForeignKey
ALTER TABLE "chapter" DROP CONSTRAINT "chapter_novelId_fkey";

-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_complaintTargetId_fkey";

-- DropForeignKey
ALTER TABLE "complaint_reason" DROP CONSTRAINT "complaint_reason_userId_fkey";

-- DropForeignKey
ALTER TABLE "complaint_target_type" DROP CONSTRAINT "complaint_target_type_complaintCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "content_complaint" DROP CONSTRAINT "content_complaint_complaintTargetId_fkey";

-- DropForeignKey
ALTER TABLE "content_complaint" DROP CONSTRAINT "content_complaint_issuedBy_fkey";

-- DropForeignKey
ALTER TABLE "content_complaint" DROP CONSTRAINT "content_complaint_reasonId_fkey";

-- DropForeignKey
ALTER TABLE "content_complaint" DROP CONSTRAINT "content_complaint_resolvedBy_fkey";

-- DropForeignKey
ALTER TABLE "news" DROP CONSTRAINT "news_complaintTargetId_fkey";

-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "novel" DROP CONSTRAINT "novel_complaintTargetId_fkey";

-- DropForeignKey
ALTER TABLE "novel_collection_mapping" DROP CONSTRAINT "novel_collection_mapping_novelId_fkey";

-- DropForeignKey
ALTER TABLE "novel_collection_mapping" DROP CONSTRAINT "novel_collection_mapping_userCollectionId_fkey";

-- DropForeignKey
ALTER TABLE "novel_subscription" DROP CONSTRAINT "novel_subscription_novelId_fkey";

-- DropForeignKey
ALTER TABLE "novel_subscription" DROP CONSTRAINT "novel_subscription_userId_fkey";

-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_commendableTypeId_fkey";

-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_complaintTargetId_fkey";

-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_novelId_fkey";

-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_collection_mapping" DROP CONSTRAINT "user_collection_mapping_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "user_collection_mapping" DROP CONSTRAINT "user_collection_mapping_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_complaint" DROP CONSTRAINT "user_complaint_complaintTargetId_fkey";

-- DropForeignKey
ALTER TABLE "user_complaint" DROP CONSTRAINT "user_complaint_reasonId_fkey";

-- DropForeignKey
ALTER TABLE "user_complaint" DROP CONSTRAINT "user_complaint_userId_fkey";

-- AlterTable
ALTER TABLE "chapter" DROP COLUMN "complaintTargetId",
DROP COLUMN "complaitTypeId";

-- AlterTable
ALTER TABLE "comment" DROP COLUMN "complaintTargetId";

-- AlterTable
ALTER TABLE "news" DROP COLUMN "complaintTargetId";

-- AlterTable
ALTER TABLE "novel" DROP COLUMN "complaintTargetId";

-- DropTable
DROP TABLE "appeal";

-- DropTable
DROP TABLE "appeal_reason";

-- DropTable
DROP TABLE "ban";

-- DropTable
DROP TABLE "ban_reason";

-- DropTable
DROP TABLE "complaint_category";

-- DropTable
DROP TABLE "complaint_reason";

-- DropTable
DROP TABLE "complaint_target_type";

-- DropTable
DROP TABLE "content_complaint";

-- DropTable
DROP TABLE "novel_collection_mapping";

-- DropTable
DROP TABLE "review";

-- DropTable
DROP TABLE "user_collection_mapping";

-- DropTable
DROP TABLE "user_complaint";

-- CreateTable
CREATE TABLE "collection_item" (
    "id" SERIAL NOT NULL,
    "collectionId" INTEGER NOT NULL,
    "novelId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collection_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "novel_review" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "likes" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "novelId" INTEGER NOT NULL,
    "commendableTypeId" INTEGER NOT NULL,

    CONSTRAINT "novel_review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "collection_item_collectionId_novelId_userId_key" ON "collection_item"("collectionId", "novelId", "userId");

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "novel_review"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel_subscription" ADD CONSTRAINT "novel_subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel_subscription" ADD CONSTRAINT "novel_subscription_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "author_subscription" ADD CONSTRAINT "author_subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "author_subscription" ADD CONSTRAINT "author_subscription_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection_item" ADD CONSTRAINT "collection_item_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection_item" ADD CONSTRAINT "collection_item_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection_item" ADD CONSTRAINT "collection_item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel_review" ADD CONSTRAINT "novel_review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel_review" ADD CONSTRAINT "novel_review_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel_review" ADD CONSTRAINT "novel_review_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comandable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
