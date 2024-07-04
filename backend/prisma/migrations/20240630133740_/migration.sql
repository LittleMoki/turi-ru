/*
  Warnings:

  - You are about to drop the column `order_number` on the `t_orders` table. All the data in the column will be lost.
  - You are about to drop the column `payment_id` on the `t_orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "t_orders" DROP CONSTRAINT "t_orders_order_number_fkey";

-- DropForeignKey
ALTER TABLE "t_orders" DROP CONSTRAINT "t_orders_payment_id_fkey";

-- AlterTable
ALTER TABLE "t_orders" DROP COLUMN "order_number",
DROP COLUMN "payment_id",
ADD COLUMN     "t_order_statusId" INTEGER,
ADD COLUMN     "t_payment_statusId" INTEGER;

-- AddForeignKey
ALTER TABLE "t_orders" ADD CONSTRAINT "t_orders_t_order_statusId_fkey" FOREIGN KEY ("t_order_statusId") REFERENCES "t_order_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_orders" ADD CONSTRAINT "t_orders_t_payment_statusId_fkey" FOREIGN KEY ("t_payment_statusId") REFERENCES "t_payment_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;
