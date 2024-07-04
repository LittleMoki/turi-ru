/*
  Warnings:

  - You are about to drop the column `t_order_statusId` on the `t_orders` table. All the data in the column will be lost.
  - You are about to drop the column `t_payment_statusId` on the `t_orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "t_orders" DROP CONSTRAINT "t_orders_t_order_statusId_fkey";

-- DropForeignKey
ALTER TABLE "t_orders" DROP CONSTRAINT "t_orders_t_payment_statusId_fkey";

-- AlterTable
ALTER TABLE "t_orders" DROP COLUMN "t_order_statusId",
DROP COLUMN "t_payment_statusId";
