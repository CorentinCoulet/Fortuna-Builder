/*
  Warnings:

  - You are about to drop the column `stats` on the `Equipments` table. All the data in the column will be lost.
  - You are about to drop the column `useParameters` on the `Equipments` table. All the data in the column will be lost.
  - The `description` column on the `Equipments` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Equipments" DROP COLUMN "stats",
DROP COLUMN "useParameters",
ADD COLUMN     "picture" INTEGER,
DROP COLUMN "description",
ADD COLUMN     "description" JSONB;

-- AlterTable
ALTER TABLE "Sublimations" ADD COLUMN     "idSubli" INTEGER,
ADD COLUMN     "lvl" INTEGER,
ADD COLUMN     "patern" JSONB;
