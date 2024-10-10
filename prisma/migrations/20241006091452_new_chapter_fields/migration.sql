/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `chapter` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chapterNumber` to the `chapter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `chapter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `views` to the `chapter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chapter" ADD COLUMN     "chapterNumber" INTEGER NOT NULL,
ADD COLUMN     "slug" VARCHAR(255) NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "chapter_slug_key" ON "chapter"("slug");
