/*
  Warnings:

  - You are about to drop the `comandable_type` table. If the table is not empty, all the data it contains will be lost.

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

-- DropTable
DROP TABLE "comandable_type";

-- CreateTable
CREATE TABLE "comendable_type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,

    CONSTRAINT "comendable_type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "comendable_type_name_key" ON "comendable_type"("name");

-- AddForeignKey
ALTER TABLE "novel" ADD CONSTRAINT "novel_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comendable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "novel_review" ADD CONSTRAINT "novel_review_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comendable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comendable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comendable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_commendableTypeId_fkey" FOREIGN KEY ("commendableTypeId") REFERENCES "comendable_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
