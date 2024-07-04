/*
  Warnings:

  - Changed the type of `rating` on the `t_hotel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `booking_rating` on the `t_hotel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "t_hotel" DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER NOT NULL,
DROP COLUMN "booking_rating",
ADD COLUMN     "booking_rating" INTEGER NOT NULL;
