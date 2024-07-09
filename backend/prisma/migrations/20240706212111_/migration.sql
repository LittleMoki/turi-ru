/*
  Warnings:

  - You are about to drop the `t_tour_types` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "t_tour_types" DROP CONSTRAINT "t_tour_types_tourid_fkey";

-- DropForeignKey
ALTER TABLE "t_tour_types" DROP CONSTRAINT "t_tour_types_typeid_fkey";

-- DropTable
DROP TABLE "t_tour_types";
