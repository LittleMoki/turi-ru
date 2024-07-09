-- AddForeignKey
ALTER TABLE "t_place" ADD CONSTRAINT "t_place_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "t_country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_place" ADD CONSTRAINT "t_place_cityid_fkey" FOREIGN KEY ("cityid") REFERENCES "t_city"("id") ON DELETE CASCADE ON UPDATE CASCADE;
