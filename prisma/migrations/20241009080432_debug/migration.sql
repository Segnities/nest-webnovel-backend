/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `comandable_type` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "novel" ALTER COLUMN "slug" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "comandable_type_name_key" ON "comandable_type"("name");
