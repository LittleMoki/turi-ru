-- DropForeignKey
ALTER TABLE "t_tour_services" DROP CONSTRAINT "t_tour_services_type_id_fkey";

-- AlterTable
ALTER TABLE "t_tour_services" ADD COLUMN     "t_typesId" INTEGER;

-- AddForeignKey
ALTER TABLE "t_tour_services" ADD CONSTRAINT "t_tour_services_t_typesId_fkey" FOREIGN KEY ("t_typesId") REFERENCES "t_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;
