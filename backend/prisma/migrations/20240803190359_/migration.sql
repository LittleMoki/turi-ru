/*
  Warnings:

  - The primary key for the `t_about` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_banner` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_city` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_cityphoto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_country` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_dayplace` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_exchange` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_faq` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_guide` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_guideresponses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_hotel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_hotel_photo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_hotel_room_photo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_hotel_rooms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_hotel_services` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_news` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_news_type` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_order_hotels` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_order_product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_order_status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_order_travellers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_oreder_services` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_pages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_payment_status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_photo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_place` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_place_photo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_restaurant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_restaurant_photo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tour` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tour_country` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tour_day_price` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tour_faqs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tour_meta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tour_services` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tour_team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tour_type` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tourcity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tourdayphoto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tourphoto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_tourtoday` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_types` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_user_address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_users_role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `t_video` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "t_banner" DROP CONSTRAINT "t_banner_cityid_fkey";

-- DropForeignKey
ALTER TABLE "t_city" DROP CONSTRAINT "t_city_country_id_fkey";

-- DropForeignKey
ALTER TABLE "t_hotel" DROP CONSTRAINT "t_hotel_cityid_fkey";

-- DropForeignKey
ALTER TABLE "t_hotel" DROP CONSTRAINT "t_hotel_country_id_fkey";

-- DropForeignKey
ALTER TABLE "t_hotel_photo" DROP CONSTRAINT "t_hotel_photo_hotelid_fkey";

-- DropForeignKey
ALTER TABLE "t_hotel_rooms" DROP CONSTRAINT "t_hotel_rooms_hotelid_fkey";

-- DropForeignKey
ALTER TABLE "t_news" DROP CONSTRAINT "t_news_typeId_fkey";

-- DropForeignKey
ALTER TABLE "t_orders" DROP CONSTRAINT "t_orders_user_id_fkey";

-- DropForeignKey
ALTER TABLE "t_place" DROP CONSTRAINT "t_place_cityid_fkey";

-- DropForeignKey
ALTER TABLE "t_place" DROP CONSTRAINT "t_place_country_id_fkey";

-- DropForeignKey
ALTER TABLE "t_tour" DROP CONSTRAINT "t_tour_teamId_fkey";

-- DropForeignKey
ALTER TABLE "t_tour" DROP CONSTRAINT "t_tour_typeId_fkey";

-- DropForeignKey
ALTER TABLE "t_tour_country" DROP CONSTRAINT "t_tour_country_country_id_fkey";

-- DropForeignKey
ALTER TABLE "t_tour_country" DROP CONSTRAINT "t_tour_country_tour_id_fkey";

-- DropForeignKey
ALTER TABLE "t_tour_day_price" DROP CONSTRAINT "t_tour_day_price_tourid_fkey";

-- DropForeignKey
ALTER TABLE "t_tour_faqs" DROP CONSTRAINT "t_tour_faqs_faqid_fkey";

-- DropForeignKey
ALTER TABLE "t_tour_faqs" DROP CONSTRAINT "t_tour_faqs_tourid_fkey";

-- DropForeignKey
ALTER TABLE "t_tour_team" DROP CONSTRAINT "t_tour_team_team_id_fkey";

-- DropForeignKey
ALTER TABLE "t_tour_team" DROP CONSTRAINT "t_tour_team_tour_id_fkey";

-- DropForeignKey
ALTER TABLE "t_tour_type" DROP CONSTRAINT "t_tour_type_type_id_fkey";

-- DropForeignKey
ALTER TABLE "t_tourcity" DROP CONSTRAINT "t_tourcity_cityid_fkey";

-- DropForeignKey
ALTER TABLE "t_tourcity" DROP CONSTRAINT "t_tourcity_tourid_fkey";

-- DropForeignKey
ALTER TABLE "t_tourdayphoto" DROP CONSTRAINT "t_tourdayphoto_day_id_fkey";

-- DropForeignKey
ALTER TABLE "t_tourphoto" DROP CONSTRAINT "t_tourphoto_tourid_fkey";

-- DropForeignKey
ALTER TABLE "t_tourtoday" DROP CONSTRAINT "t_tourtoday_tourid_fkey";

-- DropForeignKey
ALTER TABLE "t_user_address" DROP CONSTRAINT "t_user_address_user_id_fkey";

-- AlterTable
ALTER TABLE "t_about" DROP CONSTRAINT "t_about_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_about_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_about_id_seq";

-- AlterTable
ALTER TABLE "t_banner" DROP CONSTRAINT "t_banner_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "cityid" DROP DEFAULT,
ALTER COLUMN "cityid" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_banner_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_banner_id_seq";

-- AlterTable
ALTER TABLE "t_city" DROP CONSTRAINT "t_city_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "country_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_city_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_city_id_seq";

-- AlterTable
ALTER TABLE "t_cityphoto" DROP CONSTRAINT "t_cityphoto_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_cityphoto_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_cityphoto_id_seq";

-- AlterTable
ALTER TABLE "t_country" DROP CONSTRAINT "t_country_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_country_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_country_id_seq";

-- AlterTable
ALTER TABLE "t_dayplace" DROP CONSTRAINT "t_dayplace_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_dayplace_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_dayplace_id_seq";

-- AlterTable
ALTER TABLE "t_exchange" DROP CONSTRAINT "t_exchange_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_exchange_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_exchange_id_seq";

-- AlterTable
ALTER TABLE "t_faq" DROP CONSTRAINT "t_faq_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_faq_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_faq_id_seq";

-- AlterTable
ALTER TABLE "t_guide" DROP CONSTRAINT "t_guide_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_guide_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_guide_id_seq";

-- AlterTable
ALTER TABLE "t_guideresponses" DROP CONSTRAINT "t_guideresponses_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_guideresponses_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_guideresponses_id_seq";

-- AlterTable
ALTER TABLE "t_hotel" DROP CONSTRAINT "t_hotel_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "country_id" DROP DEFAULT,
ALTER COLUMN "country_id" SET DATA TYPE TEXT,
ALTER COLUMN "cityid" DROP DEFAULT,
ALTER COLUMN "cityid" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_hotel_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_hotel_id_seq";

-- AlterTable
ALTER TABLE "t_hotel_photo" DROP CONSTRAINT "t_hotel_photo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "hotelid" DROP DEFAULT,
ALTER COLUMN "hotelid" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_hotel_photo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_hotel_photo_id_seq";

-- AlterTable
ALTER TABLE "t_hotel_room_photo" DROP CONSTRAINT "t_hotel_room_photo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_hotel_room_photo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_hotel_room_photo_id_seq";

-- AlterTable
ALTER TABLE "t_hotel_rooms" DROP CONSTRAINT "t_hotel_rooms_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "hotelid" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_hotel_rooms_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_hotel_rooms_id_seq";

-- AlterTable
ALTER TABLE "t_hotel_services" DROP CONSTRAINT "t_hotel_services_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_hotel_services_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_hotel_services_id_seq";

-- AlterTable
ALTER TABLE "t_news" DROP CONSTRAINT "t_news_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "typeId" DROP DEFAULT,
ALTER COLUMN "typeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_news_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_news_id_seq";

-- AlterTable
ALTER TABLE "t_news_type" DROP CONSTRAINT "t_news_type_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_news_type_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_news_type_id_seq";

-- AlterTable
ALTER TABLE "t_order_hotels" DROP CONSTRAINT "t_order_hotels_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_order_hotels_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_order_hotels_id_seq";

-- AlterTable
ALTER TABLE "t_order_product" DROP CONSTRAINT "t_order_product_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_order_product_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_order_product_id_seq";

-- AlterTable
ALTER TABLE "t_order_status" DROP CONSTRAINT "t_order_status_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_order_status_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_order_status_id_seq";

-- AlterTable
ALTER TABLE "t_order_travellers" DROP CONSTRAINT "t_order_travellers_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_order_travellers_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_order_travellers_id_seq";

-- AlterTable
ALTER TABLE "t_orders" DROP CONSTRAINT "t_orders_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_orders_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_orders_id_seq";

-- AlterTable
ALTER TABLE "t_oreder_services" DROP CONSTRAINT "t_oreder_services_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_oreder_services_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_oreder_services_id_seq";

-- AlterTable
ALTER TABLE "t_pages" DROP CONSTRAINT "t_pages_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_pages_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_pages_id_seq";

-- AlterTable
ALTER TABLE "t_payment_status" DROP CONSTRAINT "t_payment_status_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_payment_status_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_payment_status_id_seq";

-- AlterTable
ALTER TABLE "t_photo" DROP CONSTRAINT "t_photo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_photo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_photo_id_seq";

-- AlterTable
ALTER TABLE "t_place" DROP CONSTRAINT "t_place_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "country_id" SET DATA TYPE TEXT,
ALTER COLUMN "cityid" DROP DEFAULT,
ALTER COLUMN "cityid" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_place_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_place_id_seq";

-- AlterTable
ALTER TABLE "t_place_photo" DROP CONSTRAINT "t_place_photo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_place_photo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_place_photo_id_seq";

-- AlterTable
ALTER TABLE "t_restaurant" DROP CONSTRAINT "t_restaurant_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_restaurant_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_restaurant_id_seq";

-- AlterTable
ALTER TABLE "t_restaurant_photo" DROP CONSTRAINT "t_restaurant_photo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_restaurant_photo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_restaurant_photo_id_seq";

-- AlterTable
ALTER TABLE "t_review" DROP CONSTRAINT "t_review_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_review_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_review_id_seq";

-- AlterTable
ALTER TABLE "t_tags" DROP CONSTRAINT "t_tags_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tags_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tags_id_seq";

-- AlterTable
ALTER TABLE "t_team" DROP CONSTRAINT "t_team_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_team_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_team_id_seq";

-- AlterTable
ALTER TABLE "t_tour" DROP CONSTRAINT "t_tour_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "typeId" SET DATA TYPE TEXT,
ALTER COLUMN "teamId" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tour_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tour_id_seq";

-- AlterTable
ALTER TABLE "t_tour_country" DROP CONSTRAINT "t_tour_country_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tour_id" SET DATA TYPE TEXT,
ALTER COLUMN "country_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tour_country_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tour_country_id_seq";

-- AlterTable
ALTER TABLE "t_tour_day_price" DROP CONSTRAINT "t_tour_day_price_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tourid" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tour_day_price_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tour_day_price_id_seq";

-- AlterTable
ALTER TABLE "t_tour_faqs" DROP CONSTRAINT "t_tour_faqs_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tourid" SET DATA TYPE TEXT,
ALTER COLUMN "faqid" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tour_faqs_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tour_faqs_id_seq";

-- AlterTable
ALTER TABLE "t_tour_meta" DROP CONSTRAINT "t_tour_meta_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tour_meta_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tour_meta_id_seq";

-- AlterTable
ALTER TABLE "t_tour_services" DROP CONSTRAINT "t_tour_services_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "type_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tour_services_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tour_services_id_seq";

-- AlterTable
ALTER TABLE "t_tour_team" DROP CONSTRAINT "t_tour_team_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tour_id" SET DATA TYPE TEXT,
ALTER COLUMN "team_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tour_team_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tour_team_id_seq";

-- AlterTable
ALTER TABLE "t_tour_type" DROP CONSTRAINT "t_tour_type_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "type_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tour_type_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tour_type_id_seq";

-- AlterTable
ALTER TABLE "t_tourcity" DROP CONSTRAINT "t_tourcity_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tourid" SET DATA TYPE TEXT,
ALTER COLUMN "cityid" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tourcity_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tourcity_id_seq";

-- AlterTable
ALTER TABLE "t_tourdayphoto" DROP CONSTRAINT "t_tourdayphoto_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "day_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tourdayphoto_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tourdayphoto_id_seq";

-- AlterTable
ALTER TABLE "t_tourphoto" DROP CONSTRAINT "t_tourphoto_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tourid" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tourphoto_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tourphoto_id_seq";

-- AlterTable
ALTER TABLE "t_tourtoday" DROP CONSTRAINT "t_tourtoday_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tourid" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_tourtoday_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_tourtoday_id_seq";

-- AlterTable
ALTER TABLE "t_types" DROP CONSTRAINT "t_types_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_types_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_types_id_seq";

-- AlterTable
ALTER TABLE "t_user_address" DROP CONSTRAINT "t_user_address_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_user_address_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_user_address_id_seq";

-- AlterTable
ALTER TABLE "t_users" DROP CONSTRAINT "t_users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_users_id_seq";

-- AlterTable
ALTER TABLE "t_users_role" DROP CONSTRAINT "t_users_role_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_users_role_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_users_role_id_seq";

-- AlterTable
ALTER TABLE "t_video" DROP CONSTRAINT "t_video_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "t_video_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "t_video_id_seq";

-- AddForeignKey
ALTER TABLE "t_banner" ADD CONSTRAINT "t_banner_cityid_fkey" FOREIGN KEY ("cityid") REFERENCES "t_city"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_city" ADD CONSTRAINT "t_city_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "t_country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_hotel" ADD CONSTRAINT "t_hotel_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "t_country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_hotel" ADD CONSTRAINT "t_hotel_cityid_fkey" FOREIGN KEY ("cityid") REFERENCES "t_city"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_hotel_photo" ADD CONSTRAINT "t_hotel_photo_hotelid_fkey" FOREIGN KEY ("hotelid") REFERENCES "t_hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_hotel_rooms" ADD CONSTRAINT "t_hotel_rooms_hotelid_fkey" FOREIGN KEY ("hotelid") REFERENCES "t_hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_news" ADD CONSTRAINT "t_news_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "t_news_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_orders" ADD CONSTRAINT "t_orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "t_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_place" ADD CONSTRAINT "t_place_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "t_country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_place" ADD CONSTRAINT "t_place_cityid_fkey" FOREIGN KEY ("cityid") REFERENCES "t_city"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tour" ADD CONSTRAINT "t_tour_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "t_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tour" ADD CONSTRAINT "t_tour_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "t_team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tourcity" ADD CONSTRAINT "t_tourcity_tourid_fkey" FOREIGN KEY ("tourid") REFERENCES "t_tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tourcity" ADD CONSTRAINT "t_tourcity_cityid_fkey" FOREIGN KEY ("cityid") REFERENCES "t_city"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tourtoday" ADD CONSTRAINT "t_tourtoday_tourid_fkey" FOREIGN KEY ("tourid") REFERENCES "t_tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tourdayphoto" ADD CONSTRAINT "t_tourdayphoto_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "t_tourtoday"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tourphoto" ADD CONSTRAINT "t_tourphoto_tourid_fkey" FOREIGN KEY ("tourid") REFERENCES "t_tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tour_country" ADD CONSTRAINT "t_tour_country_tour_id_fkey" FOREIGN KEY ("tour_id") REFERENCES "t_tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tour_country" ADD CONSTRAINT "t_tour_country_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "t_country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tour_day_price" ADD CONSTRAINT "t_tour_day_price_tourid_fkey" FOREIGN KEY ("tourid") REFERENCES "t_tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tour_faqs" ADD CONSTRAINT "t_tour_faqs_tourid_fkey" FOREIGN KEY ("tourid") REFERENCES "t_tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tour_faqs" ADD CONSTRAINT "t_tour_faqs_faqid_fkey" FOREIGN KEY ("faqid") REFERENCES "t_faq"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tour_team" ADD CONSTRAINT "t_tour_team_tour_id_fkey" FOREIGN KEY ("tour_id") REFERENCES "t_tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tour_team" ADD CONSTRAINT "t_tour_team_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "t_team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tour_type" ADD CONSTRAINT "t_tour_type_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "t_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_user_address" ADD CONSTRAINT "t_user_address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "t_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
