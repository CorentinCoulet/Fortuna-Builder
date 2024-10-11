/*
  Warnings:

  - You are about to drop the column `idIndex` on the `Actions` table. All the data in the column will be lost.
  - You are about to drop the column `idIndex` on the `EquipmentItemTypes` table. All the data in the column will be lost.
  - You are about to drop the column `idIndex` on the `ItemProperties` table. All the data in the column will be lost.
  - You are about to drop the column `idIndex` on the `ItemTypes` table. All the data in the column will be lost.
  - You are about to drop the column `idIndex` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `idIndex` on the `JobsItems` table. All the data in the column will be lost.
  - You are about to drop the column `idIndex` on the `States` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Actions_idIndex_key";

-- DropIndex
DROP INDEX "EquipmentItemTypes_idIndex_key";

-- DropIndex
DROP INDEX "ItemProperties_idIndex_key";

-- DropIndex
DROP INDEX "ItemTypes_idIndex_key";

-- DropIndex
DROP INDEX "Items_idIndex_key";

-- DropIndex
DROP INDEX "JobsItems_idIndex_key";

-- DropIndex
DROP INDEX "States_idIndex_key";

-- AlterTable
ALTER TABLE "Actions" DROP COLUMN "idIndex";

-- AlterTable
ALTER TABLE "EquipmentItemTypes" DROP COLUMN "idIndex";

-- AlterTable
ALTER TABLE "ItemProperties" DROP COLUMN "idIndex";

-- AlterTable
ALTER TABLE "ItemTypes" DROP COLUMN "idIndex";

-- AlterTable
ALTER TABLE "Items" DROP COLUMN "idIndex";

-- AlterTable
ALTER TABLE "JobsItems" DROP COLUMN "idIndex";

-- AlterTable
ALTER TABLE "States" DROP COLUMN "idIndex";
