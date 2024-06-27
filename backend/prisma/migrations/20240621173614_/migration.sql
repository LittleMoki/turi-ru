-- DropForeignKey
ALTER TABLE "t_city" DROP CONSTRAINT "t_city_country_id_fkey";

-- DropForeignKey
ALTER TABLE "t_hotel" DROP CONSTRAINT "t_hotel_cityid_fkey";

-- DropForeignKey
ALTER TABLE "t_hotel" DROP CONSTRAINT "t_hotel_country_id_fkey";

-- AddForeignKey
ALTER TABLE "t_city" ADD CONSTRAINT "t_city_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "t_country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_hotel" ADD CONSTRAINT "t_hotel_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "t_country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_hotel" ADD CONSTRAINT "t_hotel_cityid_fkey" FOREIGN KEY ("cityid") REFERENCES "t_city"("id") ON DELETE CASCADE ON UPDATE CASCADE;
