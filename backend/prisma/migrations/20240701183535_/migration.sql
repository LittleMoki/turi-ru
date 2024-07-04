/*
  Warnings:

  - You are about to drop the `t_tourhotel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "t_tourhotel" DROP CONSTRAINT "t_tourhotel_hotelid_fkey";

-- DropForeignKey
ALTER TABLE "t_tourhotel" DROP CONSTRAINT "t_tourhotel_tourid_fkey";

-- DropTable
DROP TABLE "t_tourhotel";
