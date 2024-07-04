/*
  Warnings:

  - Added the required column `teamId` to the `t_tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_tour" ADD COLUMN     "teamId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "t_tour" ADD CONSTRAINT "t_tour_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "t_team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
