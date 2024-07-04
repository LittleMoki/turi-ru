/*
  Warnings:

  - The `breakfast` column on the `t_hotel_rooms` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `p_person` column on the `t_hotel_rooms` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "t_hotel_rooms" DROP COLUMN "breakfast",
ADD COLUMN     "breakfast" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "p_person",
ADD COLUMN     "p_person" INTEGER NOT NULL DEFAULT 0;
