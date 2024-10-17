/*
  Warnings:

  - You are about to drop the `comendable_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "chapter" DROP CONSTRAINT "chapter_commendableTypeId_fkey";

-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_commendableTypeId_fkey";

-- DropForeignKey
ALTER TABLE "news" DROP CONSTRAINT "news_commendableTypeId_fkey";

-- DropForeignKey
ALTER TABLE "novel" DROP CONSTRAINT "novel_commendableTypeId_fkey";

-- DropForeignKey
ALTER TABLE "novel_review" DROP CONSTRAINT "novel_review_commendableTypeId_fkey";

-- AlterTable
ALTER TABLE "chapter" ALTER COLUMN "likes" SET DEFAULT 0,
ALTER COLUMN "views" SET DEFAULT 0;

-- DropTable
DROP TABLE "comendable_type";

-- CreateTable
CREATE TABLE "comandable_type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,

    CONSTRAINT "comandable_type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "comandable_type_name_key" ON "comandable_type"("name");

-- AddForeignKey
ALTER TABLE "novel" ADD CONSTRAINT "novel_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comandable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel_review" ADD CONSTRAINT "novel_review_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comandable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comandable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comandable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comandable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
