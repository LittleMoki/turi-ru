-- AddForeignKey
ALTER TABLE "t_hotel" ADD CONSTRAINT "t_hotel_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "t_country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_hotel" ADD CONSTRAINT "t_hotel_cityid_fkey" FOREIGN KEY ("cityid") REFERENCES "t_city"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
