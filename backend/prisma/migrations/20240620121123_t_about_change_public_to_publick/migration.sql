/*
  Warnings:

  - You are about to drop the column `public` on the `t_about` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "t_about" DROP COLUMN "public",
ADD COLUMN     "publick" INTEGER NOT NULL DEFAULT 0;
