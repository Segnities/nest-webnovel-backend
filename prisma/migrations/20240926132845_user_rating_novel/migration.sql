/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `novel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `novel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "novel" ADD COLUMN     "slug" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "novel_slug_key" ON "novel"("slug");
