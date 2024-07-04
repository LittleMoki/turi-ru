/*
  Warnings:

  - You are about to drop the column `type` on the `t_tour` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `t_tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_tour" DROP COLUMN "type",
ADD COLUMN     "typeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "t_tour" ADD CONSTRAINT "t_tour_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "t_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
