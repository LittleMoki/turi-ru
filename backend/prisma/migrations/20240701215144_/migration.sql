/*
  Warnings:

  - You are about to drop the column `t_typesId` on the `t_tour_services` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[url]` on the table `t_pages` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "t_tour_services" DROP CONSTRAINT "t_tour_services_t_typesId_fkey";

-- AlterTable
ALTER TABLE "t_tour_services" DROP COLUMN "t_typesId",
ALTER COLUMN "type_id" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "t_pages_url_key" ON "t_pages"("url");

-- AddForeignKey
ALTER TABLE "t_tour_services" ADD CONSTRAINT "t_tour_services_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "t_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;
