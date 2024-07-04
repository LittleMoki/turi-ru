/*
  Warnings:

  - Made the column `body` on table `t_tourtoday` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "t_tourtoday" ALTER COLUMN "body" SET NOT NULL,
ALTER COLUMN "body" SET DATA TYPE TEXT;
