/*
  Warnings:

  - You are about to drop the column `pagename` on the `t_pages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "t_pages" DROP COLUMN "pagename",
ADD COLUMN     "url" TEXT;
