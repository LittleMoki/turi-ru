-- CreateTable
CREATE TABLE "t_types" (
    "id" SERIAL NOT NULL,
    "parent" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" VARCHAR(3) NOT NULL,
    "url" TEXT NOT NULL,
    "photo" TEXT,
    "description" TEXT,
    "title" TEXT NOT NULL,
    "metakeywords" TEXT,
    "metadescription" TEXT,
    "sorting" INTEGER DEFAULT 0,

    CONSTRAINT "t_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_about" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "position" TEXT NOT NULL DEFAULT '',
    "employment" TEXT NOT NULL DEFAULT '',
    "body" TEXT,
    "public" INTEGER NOT NULL DEFAULT 0,
    "order_number" INTEGER NOT NULL,
    "photo" VARCHAR(255),

    CONSTRAINT "t_about_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_banner" (
    "id" SERIAL NOT NULL,
    "file" VARCHAR(14) NOT NULL DEFAULT '',
    "fileext" VARCHAR(5) NOT NULL DEFAULT '',
    "url" VARCHAR(255) NOT NULL DEFAULT '',
    "header" VARCHAR(255) NOT NULL DEFAULT '',
    "width" VARCHAR(5) NOT NULL DEFAULT '',
    "height" VARCHAR(5) NOT NULL DEFAULT '',
    "type" INTEGER NOT NULL DEFAULT 0,
    "cnt" INTEGER NOT NULL DEFAULT 0,
    "tcnt" INTEGER NOT NULL DEFAULT 0,
    "info" TEXT,
    "email" VARCHAR(40) NOT NULL DEFAULT '',
    "act" INTEGER NOT NULL DEFAULT 1,
    "cityid" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "t_banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_city" (
    "id" SERIAL NOT NULL,
    "country_id" INTEGER NOT NULL,
    "name" VARCHAR(30) NOT NULL DEFAULT '',
    "url" VARCHAR(255) NOT NULL DEFAULT '',
    "body" TEXT,
    "map" TEXT,
    "photo" VARCHAR(200) NOT NULL DEFAULT '',
    "metakeywords" VARCHAR(255) NOT NULL DEFAULT '',
    "metadescription" VARCHAR(255) NOT NULL DEFAULT '',
    "title" VARCHAR(255) NOT NULL DEFAULT '',

    CONSTRAINT "t_city_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_cityphoto" (
    "id" SERIAL NOT NULL,
    "header_ru" VARCHAR(255) NOT NULL DEFAULT '',
    "url" VARCHAR(255) NOT NULL DEFAULT '',
    "foto" VARCHAR(200) NOT NULL DEFAULT '',
    "fotoext" VARCHAR(5) NOT NULL DEFAULT '',
    "type" INTEGER NOT NULL DEFAULT 1,
    "domain" VARCHAR(20) NOT NULL DEFAULT 'www',
    "header_en" VARCHAR(255) NOT NULL DEFAULT '',
    "cat" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "t_cityphoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_country" (
    "id" SERIAL NOT NULL,
    "language_id" INTEGER NOT NULL DEFAULT 1,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "metadescription" TEXT NOT NULL,
    "metakeywords" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "t_country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_dayplace" (
    "id" SERIAL NOT NULL,
    "tourid" INTEGER NOT NULL,
    "dayid" INTEGER NOT NULL,
    "placeid" INTEGER NOT NULL,

    CONSTRAINT "t_dayplace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_exchange" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "exchange_rate" DOUBLE PRECISION NOT NULL,
    "primary_valute" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "t_exchange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_faq" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "archive" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "t_faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_guide" (
    "id" SERIAL NOT NULL,
    "url" VARCHAR(255) NOT NULL DEFAULT '',
    "name_ru" VARCHAR(255) NOT NULL DEFAULT '',
    "name_en" VARCHAR(255) NOT NULL DEFAULT '',
    "local_ru" VARCHAR(255) NOT NULL DEFAULT '',
    "local_en" VARCHAR(255) NOT NULL DEFAULT '',
    "lang_ru" VARCHAR(255) NOT NULL DEFAULT '',
    "lang_en" VARCHAR(255) NOT NULL DEFAULT '',
    "body_ru" TEXT,
    "body_en" TEXT,
    "foto" CHAR(14) NOT NULL DEFAULT '0',
    "fotoext" VARCHAR(5) NOT NULL DEFAULT '',
    "vote" INTEGER NOT NULL DEFAULT 0,
    "voters" INTEGER NOT NULL DEFAULT 0,
    "cert_ru" TEXT,
    "cert_en" TEXT,

    CONSTRAINT "t_guide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_guideresponses" (
    "id" SERIAL NOT NULL,
    "guide" INTEGER NOT NULL,
    "cat" INTEGER NOT NULL,
    "type" CHAR(20) NOT NULL DEFAULT '',
    "name" VARCHAR(150) NOT NULL DEFAULT '',
    "city" VARCHAR(50) NOT NULL DEFAULT '',
    "email" VARCHAR(150) NOT NULL DEFAULT '',
    "dtime" TIMESTAMP(3),
    "response" TEXT,
    "answer" TEXT,
    "active" INTEGER NOT NULL DEFAULT 0,
    "foto" CHAR(14) NOT NULL DEFAULT '0',
    "fotoext" VARCHAR(5) NOT NULL DEFAULT '',
    "ftext" CHAR(16) NOT NULL DEFAULT '0',
    "fotoext2" VARCHAR(5) NOT NULL DEFAULT '',

    CONSTRAINT "t_guideresponses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_hotel" (
    "id" SERIAL NOT NULL,
    "country_id" INTEGER NOT NULL DEFAULT 1,
    "cityid" INTEGER NOT NULL DEFAULT 0,
    "name" VARCHAR(250) NOT NULL DEFAULT '',
    "url" VARCHAR(255) NOT NULL DEFAULT '',
    "title" TEXT NOT NULL,
    "metakeywords" VARCHAR(255) NOT NULL DEFAULT '',
    "metadescription" VARCHAR(255) NOT NULL DEFAULT '',
    "rating" TEXT NOT NULL,
    "adress" VARCHAR(250) NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL,
    "body" TEXT,
    "map" TEXT,
    "services" JSONB NOT NULL,
    "service_text" TEXT,
    "conditions" TEXT,
    "public" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "t_hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_hotel_photo" (
    "id" SERIAL NOT NULL,
    "hotelid" INTEGER NOT NULL DEFAULT 1,
    "photo" VARCHAR(200) NOT NULL DEFAULT '',
    "alt" VARCHAR(255) NOT NULL DEFAULT '',

    CONSTRAINT "t_hotel_photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_hotel_rooms" (
    "id" SERIAL NOT NULL,
    "hotelid" INTEGER NOT NULL,
    "name" VARCHAR(250) NOT NULL DEFAULT '',
    "price" INTEGER NOT NULL,
    "sizem" INTEGER NOT NULL,
    "body" TEXT,
    "breakfast" INTEGER NOT NULL DEFAULT 0,
    "lunch" INTEGER NOT NULL DEFAULT 0,
    "dinner" INTEGER NOT NULL DEFAULT 0,
    "p_person" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "t_hotel_rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_hotel_room_photo" (
    "id" SERIAL NOT NULL,
    "room_id" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "alt" VARCHAR(60) NOT NULL,

    CONSTRAINT "t_hotel_room_photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_hotel_services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "t_hotel_services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_news" (
    "id" SERIAL NOT NULL,
    "new_date" VARCHAR(255),
    "header" VARCHAR(255) NOT NULL DEFAULT '',
    "body" TEXT,
    "firsttext" TEXT,
    "lang" CHAR(2) NOT NULL DEFAULT 'ru',
    "type" INTEGER NOT NULL DEFAULT 1,
    "view" INTEGER NOT NULL DEFAULT 0,
    "photo" TEXT NOT NULL,
    "foto" VARCHAR(200) NOT NULL,
    "fotoext" VARCHAR(5) NOT NULL,
    "title" VARCHAR(255) NOT NULL DEFAULT '',
    "metakeywords" VARCHAR(255) NOT NULL DEFAULT '',
    "metadescription" VARCHAR(255) NOT NULL DEFAULT '',
    "url" VARCHAR(255) NOT NULL DEFAULT '',
    "public" INTEGER NOT NULL DEFAULT 0,
    "country" VARCHAR(50) NOT NULL DEFAULT 'Узбекистан',
    "tags" TEXT,

    CONSTRAINT "t_news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_news_type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "photo" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "metakeywords" VARCHAR(255) NOT NULL,
    "metadescription" VARCHAR(255) NOT NULL,

    CONSTRAINT "t_news_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_order_product" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,
    "tour_id" INTEGER NOT NULL,

    CONSTRAINT "t_order_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_orders" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "order_number" INTEGER NOT NULL,
    "travellers_count" INTEGER NOT NULL,
    "tour_date_start" TIMESTAMP(3) NOT NULL,
    "tour_date_end" TIMESTAMP(3) NOT NULL,
    "order_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order_updated" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "payment_id" INTEGER NOT NULL,
    "deposit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_paid_price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "payment_type" TEXT NOT NULL,
    "tour_type" TEXT NOT NULL,

    CONSTRAINT "t_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_order_hotels" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "hotel_id" INTEGER NOT NULL,

    CONSTRAINT "t_order_hotels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_oreder_services" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,
    "service_name" TEXT NOT NULL,
    "service_price" DOUBLE PRECISION NOT NULL,
    "service_count" INTEGER NOT NULL,

    CONSTRAINT "t_oreder_services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_order_status" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "t_order_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_order_travellers" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "customer_name" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "customer_phone" TEXT NOT NULL,
    "billing_adress" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,

    CONSTRAINT "t_order_travellers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_pages" (
    "id" SERIAL NOT NULL,
    "pagename" TEXT,
    "isdel" INTEGER NOT NULL DEFAULT 0,
    "metakeywords" TEXT,
    "metadescription" TEXT,
    "title" TEXT,
    "titlename" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "t_pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_payment_status" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "t_payment_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_photo" (
    "id" SERIAL NOT NULL,
    "photo_type" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "t_photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_place" (
    "id" SERIAL NOT NULL,
    "country_id" INTEGER NOT NULL,
    "cityid" INTEGER NOT NULL DEFAULT 0,
    "url" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL,
    "body" TEXT,
    "photo" TEXT NOT NULL,
    "foto" TEXT NOT NULL DEFAULT '',
    "fotoext" TEXT NOT NULL DEFAULT '',
    "metakeywords" TEXT NOT NULL DEFAULT '',
    "metadescription" TEXT NOT NULL DEFAULT '',
    "public" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "t_place_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_place_photo" (
    "id" SERIAL NOT NULL,
    "place_id" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "t_place_photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_restaurant" (
    "id" SERIAL NOT NULL,
    "country_id" INTEGER NOT NULL,
    "cityid" INTEGER NOT NULL DEFAULT 0,
    "url" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL,
    "body" TEXT,
    "photo" TEXT NOT NULL,
    "metakeywords" TEXT NOT NULL DEFAULT '',
    "metadescription" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "t_restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_restaurant_photo" (
    "id" SERIAL NOT NULL,
    "restaurant_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "t_restaurant_photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_review" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" TEXT DEFAULT '',
    "city" TEXT NOT NULL,
    "dtime" TIMESTAMP(3),
    "review" TEXT,
    "answer" TEXT,
    "active" INTEGER NOT NULL DEFAULT 0,
    "rating" INTEGER NOT NULL DEFAULT 5,

    CONSTRAINT "t_review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "t_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "t_team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tour" (
    "id" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "main_title" TEXT,
    "name" TEXT NOT NULL,
    "name2" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "oldPrice" DOUBLE PRECISION NOT NULL,
    "sales" TEXT NOT NULL,
    "body" TEXT,
    "map" TEXT,
    "url" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "metakeywords" TEXT NOT NULL,
    "metadescription" TEXT NOT NULL,
    "ftext" TEXT,
    "ftext2" TEXT,
    "intop" INTEGER NOT NULL DEFAULT 0,
    "intop2" INTEGER NOT NULL DEFAULT 0,
    "intop3" INTEGER NOT NULL DEFAULT 0,
    "types" JSONB,
    "include" JSONB,
    "exclude" JSONB,
    "notes" JSONB,
    "paid_services" JSONB,
    "places" JSONB,
    "transport" JSONB,
    "travellers" TEXT NOT NULL,
    "archive" INTEGER NOT NULL DEFAULT 0,
    "solo_price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "single_price" DOUBLE PRECISION NOT NULL,
    "guaranted" BOOLEAN NOT NULL DEFAULT true,
    "new_type" TEXT NOT NULL DEFAULT 'i',

    CONSTRAINT "t_tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tourcity" (
    "id" SERIAL NOT NULL,
    "tourid" INTEGER NOT NULL,
    "cityid" INTEGER NOT NULL,
    "route" TEXT NOT NULL DEFAULT 'train',

    CONSTRAINT "t_tourcity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tourtoday" (
    "id" SERIAL NOT NULL,
    "tourid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "body" TEXT,
    "breakfast" BOOLEAN NOT NULL DEFAULT false,
    "lunch" BOOLEAN NOT NULL DEFAULT false,
    "dinner" BOOLEAN NOT NULL DEFAULT false,
    "hotel" INTEGER NOT NULL,
    "hotels" JSONB,

    CONSTRAINT "t_tourtoday_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tourdayphto" (
    "id" SERIAL NOT NULL,
    "day_id" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "foto" TEXT DEFAULT '',
    "fotoext" TEXT DEFAULT '',
    "alt" TEXT NOT NULL,

    CONSTRAINT "t_tourdayphto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tourphoto" (
    "id" SERIAL NOT NULL,
    "tourid" INTEGER NOT NULL,
    "photo" TEXT,

    CONSTRAINT "t_tourphoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tourhotel" (
    "id" SERIAL NOT NULL,
    "tourid" INTEGER NOT NULL,
    "hotelid" INTEGER NOT NULL,

    CONSTRAINT "t_tourhotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tour_meta" (
    "id" SERIAL NOT NULL,
    "lang" CHAR(2) NOT NULL,
    "title" TEXT NOT NULL,
    "metakeywords" TEXT NOT NULL,
    "metadescription" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "t_tour_meta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tour_country" (
    "id" SERIAL NOT NULL,
    "tour_id" INTEGER NOT NULL,
    "country_id" INTEGER NOT NULL,

    CONSTRAINT "t_tour_country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tour_day_price" (
    "id" SERIAL NOT NULL,
    "tourid" INTEGER NOT NULL,
    "date_start" TIMESTAMP(3) NOT NULL,
    "date_end" TIMESTAMP(3) NOT NULL,
    "double_price" INTEGER NOT NULL,
    "single_price" INTEGER NOT NULL,

    CONSTRAINT "t_tour_day_price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tour_faqs" (
    "id" SERIAL NOT NULL,
    "tourid" INTEGER NOT NULL,
    "faqid" INTEGER NOT NULL,

    CONSTRAINT "t_tour_faqs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tour_services" (
    "id" SERIAL NOT NULL,
    "type_id" INTEGER NOT NULL,
    "title" TEXT,
    "icon" TEXT,
    "price" INTEGER NOT NULL,
    "archive" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "t_tour_services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tour_team" (
    "id" SERIAL NOT NULL,
    "tour_id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,

    CONSTRAINT "t_tour_team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tour_type" (
    "id" SERIAL NOT NULL,
    "type_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "photo_name" TEXT NOT NULL,
    "photo_ext" TEXT NOT NULL,
    "description" TEXT,
    "metakeywords" TEXT,
    "metadescription" TEXT,
    "parent" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "t_tour_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_users" (
    "id" SERIAL NOT NULL,
    "login" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "phone_number" TEXT,
    "password" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "role" INTEGER NOT NULL DEFAULT 2,
    "photo" TEXT NOT NULL,

    CONSTRAINT "t_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_users_role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type_name" TEXT NOT NULL DEFAULT 'guest',

    CONSTRAINT "t_users_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_user_address" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,

    CONSTRAINT "t_user_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_video" (
    "id" SERIAL NOT NULL,
    "header" VARCHAR(255) NOT NULL DEFAULT '',
    "code" TEXT NOT NULL DEFAULT '',
    "header_en" VARCHAR(255) NOT NULL DEFAULT '',

    CONSTRAINT "t_video_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "t_city_url_key" ON "t_city"("url");

-- CreateIndex
CREATE INDEX "t_city_country_id_idx" ON "t_city"("country_id");

-- CreateIndex
CREATE UNIQUE INDEX "t_dayplace_tourid_dayid_placeid_key" ON "t_dayplace"("tourid", "dayid", "placeid");

-- CreateIndex
CREATE UNIQUE INDEX "t_guide_url_key" ON "t_guide"("url");

-- CreateIndex
CREATE UNIQUE INDEX "t_news_url_key" ON "t_news"("url");

-- CreateIndex
CREATE UNIQUE INDEX "t_place_url_key" ON "t_place"("url");

-- CreateIndex
CREATE UNIQUE INDEX "t_restaurant_url_key" ON "t_restaurant"("url");

-- CreateIndex
CREATE UNIQUE INDEX "t_users_email_key" ON "t_users"("email");

-- AddForeignKey
ALTER TABLE "t_orders" ADD CONSTRAINT "t_orders_order_number_fkey" FOREIGN KEY ("order_number") REFERENCES "t_order_status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_orders" ADD CONSTRAINT "t_orders_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "t_payment_status"("id") ON DELETE CASCADE ON UPDATE CASCADE;
