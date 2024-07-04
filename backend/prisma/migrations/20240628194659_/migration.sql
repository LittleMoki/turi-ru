-- DropForeignKey
ALTER TABLE "t_tourhotel" DROP CONSTRAINT "t_tourhotel_tourid_fkey";

-- AddForeignKey
ALTER TABLE "t_tourhotel" ADD CONSTRAINT "t_tourhotel_tourid_fkey" FOREIGN KEY ("tourid") REFERENCES "t_tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tourhotel" ADD CONSTRAINT "t_tourhotel_hotelid_fkey" FOREIGN KEY ("hotelid") REFERENCES "t_hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
