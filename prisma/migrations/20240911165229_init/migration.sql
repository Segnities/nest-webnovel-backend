-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('GOOGLE', 'EMAIL_AND_PASSWORD');

-- CreateEnum
CREATE TYPE "ROLE_NAME" AS ENUM ('SYSTEM', 'ADMIN', 'MODERATOR', 'DEFAULT_USER');

-- CreateEnum
CREATE TYPE "ApprovalStatus" AS ENUM ('Pending', 'Approved', 'Rejected', 'Reviewed', 'Resolved');

-- CreateEnum
CREATE TYPE "BanStatus" AS ENUM ('Active', 'Expired', 'Appealed');

-- CreateEnum
CREATE TYPE "NotificationMessageStatus" AS ENUM ('SENT', 'PENDING', 'READ', 'UNREAD', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "NotificationRelatedEntity" AS ENUM ('NOVEL', 'COMMENT', 'REVIEW', 'AUTHOR', 'SYSTEM');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "provider" "Provider" NOT NULL,
    "img" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "roleId" INTEGER NOT NULL,
    "teamId" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permission" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,

    CONSTRAINT "notification_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_status" (
    "id" SERIAL NOT NULL,
    "status" "NotificationMessageStatus" NOT NULL,
    "description" TEXT,

    CONSTRAINT "notification_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_related_entity_type" (
    "id" SERIAL NOT NULL,
    "entityType" "NotificationRelatedEntity" NOT NULL,
    "description" TEXT,

    CONSTRAINT "notification_related_entity_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_entity" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "notifRelEntTypeId" INTEGER NOT NULL,

    CONSTRAINT "notification_entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "message" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "notificationStatusId" INTEGER NOT NULL,
    "notificationTypeId" INTEGER NOT NULL,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_notification_settings" (
    "id" SERIAL NOT NULL,
    "receiveSystemNotifications" BOOLEAN NOT NULL DEFAULT true,
    "receiveCommentNotifications" BOOLEAN NOT NULL DEFAULT true,
    "receiveNovelUpdates" BOOLEAN NOT NULL DEFAULT true,
    "receiveReviewNotifications" BOOLEAN NOT NULL DEFAULT true,
    "receiveAuthorUpdates" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "user_notification_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "novel_subscription" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "novelId" INTEGER NOT NULL,

    CONSTRAINT "novel_subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "author_subscription" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "author_subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "complaint_target_type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "complaintCategoryId" INTEGER NOT NULL,

    CONSTRAINT "complaint_target_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "complaint_category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "complaint_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_complaint" (
    "id" SERIAL NOT NULL,
    "status" "ApprovalStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reasonId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "complaintTargetId" INTEGER NOT NULL,

    CONSTRAINT "user_complaint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_complaint" (
    "id" SERIAL NOT NULL,
    "status" "ApprovalStatus" NOT NULL,
    "contentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "reasonId" INTEGER NOT NULL,
    "complaintTargetId" INTEGER NOT NULL,
    "resolvedAt" TIMESTAMP(3) NOT NULL,
    "issuedBy" INTEGER NOT NULL,
    "resolvedBy" INTEGER NOT NULL,

    CONSTRAINT "content_complaint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "complaint_reason" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,

    CONSTRAINT "complaint_reason_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ban" (
    "id" SERIAL NOT NULL,
    "banStart" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "banEnd" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "appealed" BOOLEAN NOT NULL DEFAULT false,
    "appealId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "issuedBy" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "complaintTargetId" INTEGER NOT NULL,

    CONSTRAINT "ban_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appeal" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "reviewedAt" TIMESTAMP(3) NOT NULL,
    "status" "ApprovalStatus" NOT NULL,
    "appealReasonId" INTEGER NOT NULL,
    "reviewedBy" INTEGER NOT NULL,

    CONSTRAINT "appeal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appeal_reason" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "appeal_reason_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ban_reason" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ban_reason_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "novel" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "original_title" VARCHAR(200),
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "isAdult" BOOLEAN NOT NULL,
    "releaseYear" INTEGER,
    "coverImg" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "countryId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "translationStatusId" INTEGER NOT NULL,
    "formatId" INTEGER NOT NULL,
    "notificationEntityId" INTEGER NOT NULL,
    "commendableTypeId" INTEGER NOT NULL,
    "complaintTargetId" INTEGER NOT NULL,

    CONSTRAINT "novel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "continue_reading" (
    "id" SERIAL NOT NULL,
    "progressPercentage" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,
    "lastChapterId" INTEGER NOT NULL,
    "novelId" INTEGER NOT NULL,

    CONSTRAINT "continue_reading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "novel_collection_mapping" (
    "id" SERIAL NOT NULL,
    "novelId" INTEGER NOT NULL,
    "userCollectionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "novel_collection_mapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_collection_mapping" (
    "id" SERIAL NOT NULL,
    "collectionId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_collection_mapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collection" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "novel_rating" (
    "id" SERIAL NOT NULL,
    "votesCount" INTEGER NOT NULL,
    "avgRating" DOUBLE PRECISION NOT NULL,
    "totalRating" INTEGER NOT NULL,
    "novelId" INTEGER NOT NULL,

    CONSTRAINT "novel_rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookmark" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "chapterId" INTEGER NOT NULL,

    CONSTRAINT "bookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" SERIAL NOT NULL,
    "rating" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "novelId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review" (
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
    "complaintTargetId" INTEGER NOT NULL,
    "notificationEntityId" INTEGER NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "body" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,
    "published" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "commendableTypeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "complaintTargetId" INTEGER NOT NULL,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "nestedLevel" INTEGER,
    "body" TEXT NOT NULL,
    "commendableTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "complaitTypeId" INTEGER NOT NULL,
    "replyToId" INTEGER,
    "complaintTargetId" INTEGER NOT NULL,
    "notificationEntityId" INTEGER NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comandable_type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,

    CONSTRAINT "comandable_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chapter" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "content" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "novelId" INTEGER NOT NULL,
    "commendableTypeId" INTEGER NOT NULL,
    "complaitTypeId" INTEGER NOT NULL,
    "complaintTargetId" INTEGER NOT NULL,

    CONSTRAINT "chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "chapters_count" INTEGER NOT NULL DEFAULT 0,
    "books_count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "format" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,

    CONSTRAINT "format_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "translation_status" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,

    CONSTRAINT "translation_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alternative_title" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "novelId" INTEGER NOT NULL,

    CONSTRAINT "alternative_title_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genre" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,

    CONSTRAINT "genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "country" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,

    CONSTRAINT "country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "author" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "img" TEXT NOT NULL,
    "notificationEntityId" INTEGER NOT NULL,

    CONSTRAINT "author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NovelToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GenreToNovel" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "role_name_key" ON "role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "notification_type_name_key" ON "notification_type"("name");

-- CreateIndex
CREATE INDEX "notification_userId_notificationStatusId_createdAt_idx" ON "notification"("userId", "notificationStatusId", "createdAt");

-- CreateIndex
CREATE INDEX "novel_authorId_statusId_formatId_idx" ON "novel"("authorId", "statusId", "formatId");

-- CreateIndex
CREATE UNIQUE INDEX "novel_collection_mapping_novelId_userCollectionId_key" ON "novel_collection_mapping"("novelId", "userCollectionId");

-- CreateIndex
CREATE UNIQUE INDEX "user_collection_mapping_collectionId_userId_key" ON "user_collection_mapping"("collectionId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "collection_title_key" ON "collection"("title");

-- CreateIndex
CREATE UNIQUE INDEX "novel_rating_novelId_key" ON "novel_rating"("novelId");

-- CreateIndex
CREATE INDEX "rating_novelId_userId_idx" ON "rating"("novelId", "userId");

-- CreateIndex
CREATE INDEX "news_userId_commendableTypeId_createdAt_idx" ON "news"("userId", "commendableTypeId", "createdAt");

-- CreateIndex
CREATE INDEX "chapter_novelId_createdAt_idx" ON "chapter"("novelId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "format_title_key" ON "format"("title");

-- CreateIndex
CREATE UNIQUE INDEX "translation_status_title_key" ON "translation_status"("title");

-- CreateIndex
CREATE UNIQUE INDEX "tag_title_key" ON "tag"("title");

-- CreateIndex
CREATE UNIQUE INDEX "genre_title_key" ON "genre"("title");

-- CreateIndex
CREATE UNIQUE INDEX "country_title_key" ON "country"("title");

-- CreateIndex
CREATE UNIQUE INDEX "status_title_key" ON "status"("title");

-- CreateIndex
CREATE UNIQUE INDEX "author_name_key" ON "author"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_NovelToTag_AB_unique" ON "_NovelToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_NovelToTag_B_index" ON "_NovelToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToNovel_AB_unique" ON "_GenreToNovel"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToNovel_B_index" ON "_GenreToNovel"("B");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permission" ADD CONSTRAINT "permission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_entity" ADD CONSTRAINT "notification_entity_notifRelEntTypeId_fkey" FOREIGN KEY ("notifRelEntTypeId") REFERENCES "notification_related_entity_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_notificationStatusId_fkey" FOREIGN KEY ("notificationStatusId") REFERENCES "notification_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_notificationTypeId_fkey" FOREIGN KEY ("notificationTypeId") REFERENCES "notification_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_notification_settings" ADD CONSTRAINT "user_notification_settings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel_subscription" ADD CONSTRAINT "novel_subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel_subscription" ADD CONSTRAINT "novel_subscription_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "author_subscription" ADD CONSTRAINT "author_subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "author_subscription" ADD CONSTRAINT "author_subscription_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complaint_target_type" ADD CONSTRAINT "complaint_target_type_complaintCategoryId_fkey" FOREIGN KEY ("complaintCategoryId") REFERENCES "complaint_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_complaint" ADD CONSTRAINT "user_complaint_reasonId_fkey" FOREIGN KEY ("reasonId") REFERENCES "complaint_reason"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_complaint" ADD CONSTRAINT "user_complaint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_complaint" ADD CONSTRAINT "user_complaint_complaintTargetId_fkey" FOREIGN KEY ("complaintTargetId") REFERENCES "complaint_target_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_complaint" ADD CONSTRAINT "content_complaint_reasonId_fkey" FOREIGN KEY ("reasonId") REFERENCES "complaint_reason"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_complaint" ADD CONSTRAINT "content_complaint_complaintTargetId_fkey" FOREIGN KEY ("complaintTargetId") REFERENCES "complaint_target_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_complaint" ADD CONSTRAINT "content_complaint_issuedBy_fkey" FOREIGN KEY ("issuedBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_complaint" ADD CONSTRAINT "content_complaint_resolvedBy_fkey" FOREIGN KEY ("resolvedBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complaint_reason" ADD CONSTRAINT "complaint_reason_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ban" ADD CONSTRAINT "ban_appealId_fkey" FOREIGN KEY ("appealId") REFERENCES "appeal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ban" ADD CONSTRAINT "ban_issuedBy_fkey" FOREIGN KEY ("issuedBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ban" ADD CONSTRAINT "ban_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ban" ADD CONSTRAINT "ban_complaintTargetId_fkey" FOREIGN KEY ("complaintTargetId") REFERENCES "complaint_target_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appeal" ADD CONSTRAINT "appeal_appealReasonId_fkey" FOREIGN KEY ("appealReasonId") REFERENCES "appeal_reason"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appeal" ADD CONSTRAINT "appeal_reviewedBy_fkey" FOREIGN KEY ("reviewedBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel" ADD CONSTRAINT "novel_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel" ADD CONSTRAINT "novel_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel" ADD CONSTRAINT "novel_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel" ADD CONSTRAINT "novel_translationStatusId_fkey" FOREIGN KEY ("translationStatusId") REFERENCES "translation_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel" ADD CONSTRAINT "novel_formatId_fkey" FOREIGN KEY ("formatId") REFERENCES "format"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel" ADD CONSTRAINT "novel_notificationEntityId_fkey" FOREIGN KEY ("notificationEntityId") REFERENCES "notification_entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel" ADD CONSTRAINT "novel_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comandable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel" ADD CONSTRAINT "novel_complaintTargetId_fkey" FOREIGN KEY ("complaintTargetId") REFERENCES "complaint_target_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "continue_reading" ADD CONSTRAINT "continue_reading_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "continue_reading" ADD CONSTRAINT "continue_reading_lastChapterId_fkey" FOREIGN KEY ("lastChapterId") REFERENCES "chapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "continue_reading" ADD CONSTRAINT "continue_reading_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel_collection_mapping" ADD CONSTRAINT "novel_collection_mapping_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel_collection_mapping" ADD CONSTRAINT "novel_collection_mapping_userCollectionId_fkey" FOREIGN KEY ("userCollectionId") REFERENCES "user_collection_mapping"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_collection_mapping" ADD CONSTRAINT "user_collection_mapping_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_collection_mapping" ADD CONSTRAINT "user_collection_mapping_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel_rating" ADD CONSTRAINT "novel_rating_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "chapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comandable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_complaintTargetId_fkey" FOREIGN KEY ("complaintTargetId") REFERENCES "complaint_target_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_notificationEntityId_fkey" FOREIGN KEY ("notificationEntityId") REFERENCES "notification_entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comandable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_complaintTargetId_fkey" FOREIGN KEY ("complaintTargetId") REFERENCES "complaint_target_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comandable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_complaintTargetId_fkey" FOREIGN KEY ("complaintTargetId") REFERENCES "complaint_target_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_notificationEntityId_fkey" FOREIGN KEY ("notificationEntityId") REFERENCES "notification_entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_replyToId_fkey" FOREIGN KEY ("replyToId") REFERENCES "comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comandable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_complaintTargetId_fkey" FOREIGN KEY ("complaintTargetId") REFERENCES "complaint_target_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alternative_title" ADD CONSTRAINT "alternative_title_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "author" ADD CONSTRAINT "author_notificationEntityId_fkey" FOREIGN KEY ("notificationEntityId") REFERENCES "notification_entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NovelToTag" ADD CONSTRAINT "_NovelToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "novel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NovelToTag" ADD CONSTRAINT "_NovelToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToNovel" ADD CONSTRAINT "_GenreToNovel_A_fkey" FOREIGN KEY ("A") REFERENCES "genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToNovel" ADD CONSTRAINT "_GenreToNovel_B_fkey" FOREIGN KEY ("B") REFERENCES "novel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
