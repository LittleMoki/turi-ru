/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `t_users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "t_tour_country" DROP CONSTRAINT "t_tour_country_t_cityId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "t_users_login_key" ON "t_users"("login");

-- AddForeignKey
ALTER TABLE "t_tour_country" ADD CONSTRAINT "t_tour_country_t_cityId_fkey" FOREIGN KEY ("t_cityId") REFERENCES "t_city"("id") ON DELETE SET NULL ON UPDATE CASCADE;
