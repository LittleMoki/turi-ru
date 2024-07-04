/*
  Warnings:

  - Added the required column `booking_rating` to the `t_hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_hotel" ADD COLUMN     "booking_rating" TEXT NOT NULL;
