/*
  Warnings:

  - The `lunch` column on the `t_hotel_rooms` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dinner` column on the `t_hotel_rooms` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `p_person` column on the `t_hotel_rooms` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "t_hotel_rooms" DROP COLUMN "lunch",
ADD COLUMN     "lunch" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "dinner",
ADD COLUMN     "dinner" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "p_person",
ADD COLUMN     "p_person" BOOLEAN NOT NULL DEFAULT false;
