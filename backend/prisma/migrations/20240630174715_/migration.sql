/*
  Warnings:

  - The `body` column on the `t_tourtoday` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "t_tourtoday" DROP COLUMN "body",
ADD COLUMN     "body" JSONB;
