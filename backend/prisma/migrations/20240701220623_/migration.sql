/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `t_country` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `t_hotel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `t_news_type` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `t_tour` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `t_types` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "t_country_url_key" ON "t_country"("url");

-- CreateIndex
CREATE UNIQUE INDEX "t_hotel_url_key" ON "t_hotel"("url");

-- CreateIndex
CREATE UNIQUE INDEX "t_news_type_url_key" ON "t_news_type"("url");

-- CreateIndex
CREATE UNIQUE INDEX "t_tour_url_key" ON "t_tour"("url");

-- CreateIndex
CREATE UNIQUE INDEX "t_types_url_key" ON "t_types"("url");
