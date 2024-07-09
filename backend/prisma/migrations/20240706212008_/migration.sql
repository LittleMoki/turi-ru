/*
  Warnings:

  - You are about to drop the column `t_cityId` on the `t_tour_country` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "t_tour_country" DROP CONSTRAINT "t_tour_country_t_cityId_fkey";

-- DropForeignKey
ALTER TABLE "t_tourcity" DROP CONSTRAINT "t_tourcity_cityid_fkey";

-- DropForeignKey
ALTER TABLE "t_tourcity" DROP CONSTRAINT "t_tourcity_tourid_fkey";

-- AlterTable
ALTER TABLE "t_tour_country" DROP COLUMN "t_cityId";

-- CreateTable
CREATE TABLE "t_tour_types" (
    "id" SERIAL NOT NULL,
    "tourid" INTEGER NOT NULL,
    "typeid" INTEGER NOT NULL,

    CONSTRAINT "t_tour_types_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "t_tour_types" ADD CONSTRAINT "t_tour_types_tourid_fkey" FOREIGN KEY ("tourid") REFERENCES "t_tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tour_types" ADD CONSTRAINT "t_tour_types_typeid_fkey" FOREIGN KEY ("typeid") REFERENCES "t_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tourcity" ADD CONSTRAINT "t_tourcity_tourid_fkey" FOREIGN KEY ("tourid") REFERENCES "t_tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tourcity" ADD CONSTRAINT "t_tourcity_cityid_fkey" FOREIGN KEY ("cityid") REFERENCES "t_city"("id") ON DELETE CASCADE ON UPDATE CASCADE;
