/*
  Warnings:

  - You are about to drop the column `primary_valute` on the `t_exchange` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "t_exchange" DROP COLUMN "primary_valute",
ADD COLUMN     "primary_valuta" BOOLEAN NOT NULL DEFAULT false;
