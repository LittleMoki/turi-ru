-- DropForeignKey
ALTER TABLE "t_city" DROP CONSTRAINT "t_city_country_id_fkey";

-- AddForeignKey
ALTER TABLE "t_city" ADD CONSTRAINT "t_city_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "t_country"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
