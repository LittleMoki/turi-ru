-- AddForeignKey
ALTER TABLE "t_hotel_photo" ADD CONSTRAINT "t_hotel_photo_hotelid_fkey" FOREIGN KEY ("hotelid") REFERENCES "t_hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_hotel_rooms" ADD CONSTRAINT "t_hotel_rooms_hotelid_fkey" FOREIGN KEY ("hotelid") REFERENCES "t_hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
