/*
  Warnings:

  - You are about to drop the column `data` on the `Actions` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `EquipmentItemTypes` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `ItemProperties` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `ItemTypes` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `States` table. All the data in the column will be lost.
  - You are about to drop the `Equipment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `actionId` to the `Actions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Actions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `effect` to the `Actions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `definition` to the `EquipmentItemTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipmentItemTypeId` to the `EquipmentItemTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentId` to the `EquipmentItemTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `ItemProperties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemPropertieId` to the `ItemProperties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ItemProperties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `definition` to the `ItemTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemTypeId` to the `ItemTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentId` to the `ItemTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipEffects` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemId` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `useCriticalEffects` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `useEffects` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateId` to the `States` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Actions" DROP COLUMN "data",
ADD COLUMN     "actionId" INTEGER NOT NULL,
ADD COLUMN     "description" JSONB NOT NULL,
ADD COLUMN     "effect" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "EquipmentItemTypes" DROP COLUMN "data",
ADD COLUMN     "definition" JSONB NOT NULL,
ADD COLUMN     "equipmentItemTypeId" INTEGER NOT NULL,
ADD COLUMN     "parentId" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT[];

-- AlterTable
ALTER TABLE "ItemProperties" DROP COLUMN "data",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "itemPropertieId" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ItemTypes" DROP COLUMN "data",
ADD COLUMN     "definition" JSONB NOT NULL,
ADD COLUMN     "itemTypeId" INTEGER NOT NULL,
ADD COLUMN     "parentId" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT[];

-- AlterTable
ALTER TABLE "Items" DROP COLUMN "data",
ADD COLUMN     "description" TEXT[],
ADD COLUMN     "equipEffects" JSONB NOT NULL,
ADD COLUMN     "item" JSONB NOT NULL,
ADD COLUMN     "itemId" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT[],
ADD COLUMN     "useCriticalEffects" JSONB NOT NULL,
ADD COLUMN     "useEffects" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "States" DROP COLUMN "data",
ADD COLUMN     "stateId" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT[];

-- DropTable
DROP TABLE "Equipment";
