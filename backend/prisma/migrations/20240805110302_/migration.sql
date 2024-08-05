/*
  Warnings:

  - Added the required column `order_data` to the `t_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_number` to the `t_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_status` to the `t_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_id` to the `t_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_status` to the `t_orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_orders" ADD COLUMN     "order_data" INTEGER NOT NULL,
ADD COLUMN     "order_number" INTEGER NOT NULL,
ADD COLUMN     "order_status" INTEGER NOT NULL,
ADD COLUMN     "payment_id" INTEGER NOT NULL,
ADD COLUMN     "payment_status" INTEGER NOT NULL;
