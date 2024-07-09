/*
  Warnings:

  - Added the required column `transferPrice` to the `t_tour_day_price` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_tour_day_price" ADD COLUMN     "transferPrice" INTEGER NOT NULL;
