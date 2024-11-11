/*
  Warnings:

  - A unique constraint covering the columns `[fuid]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_fuid_key" ON "user"("fuid");
