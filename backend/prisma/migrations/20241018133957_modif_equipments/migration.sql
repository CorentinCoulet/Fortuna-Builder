/*
  Warnings:

  - The `typeItem` column on the `Equipments` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Equipments" DROP COLUMN "typeItem",
ADD COLUMN     "typeItem" TEXT[];
