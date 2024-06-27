/*
  Warnings:

  - The `archive` column on the `t_tour_services` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "t_tour_services" DROP COLUMN "archive",
ADD COLUMN     "archive" INTEGER NOT NULL DEFAULT 0;
