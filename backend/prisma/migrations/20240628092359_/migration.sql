/*
  Warnings:

  - The `guaranted` column on the `t_tour` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "t_tour" DROP COLUMN "guaranted",
ADD COLUMN     "guaranted" INTEGER NOT NULL DEFAULT 1;
