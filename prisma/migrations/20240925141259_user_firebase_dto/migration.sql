/*
  Warnings:

  - Added the required column `firstName` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "firstName" VARCHAR(50) NOT NULL,
ADD COLUMN     "lastName" VARCHAR(50) NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
