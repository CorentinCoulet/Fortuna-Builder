/*
  Warnings:

  - Changed the type of `title` on the `EquipmentItemTypes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `title` on the `ItemTypes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `description` on the `Items` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `title` on the `Items` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `title` on the `States` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "EquipmentItemTypes" DROP COLUMN "title",
ADD COLUMN     "title" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "ItemTypes" DROP COLUMN "title",
ADD COLUMN     "title" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Items" DROP COLUMN "description",
ADD COLUMN     "description" JSONB NOT NULL,
DROP COLUMN "title",
ADD COLUMN     "title" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "States" DROP COLUMN "title",
ADD COLUMN     "title" JSONB NOT NULL;
