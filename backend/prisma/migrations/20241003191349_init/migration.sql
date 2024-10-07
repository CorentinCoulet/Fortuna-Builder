/*
  Warnings:

  - You are about to drop the column `definition` on the `Actions` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Actions` table. All the data in the column will be lost.
  - You are about to drop the column `definition` on the `EquipmentItemTypes` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `EquipmentItemTypes` table. All the data in the column will be lost.
  - You are about to drop the column `definition` on the `ItemTypes` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ItemTypes` table. All the data in the column will be lost.
  - You are about to drop the column `definition` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `definition` on the `JobItems` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `JobItems` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `JobItems` table. All the data in the column will be lost.
  - You are about to drop the column `definition` on the `States` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `States` table. All the data in the column will be lost.
  - Added the required column `data` to the `Actions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `EquipmentItemTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `ItemTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `JobItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `States` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Actions" DROP COLUMN "definition",
DROP COLUMN "description",
ADD COLUMN     "data" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "EquipmentItemTypes" DROP COLUMN "definition",
DROP COLUMN "title",
ADD COLUMN     "data" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "ItemTypes" DROP COLUMN "definition",
DROP COLUMN "title",
ADD COLUMN     "data" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Items" DROP COLUMN "definition",
DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "data" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "JobItems" DROP COLUMN "definition",
DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "data" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "States" DROP COLUMN "definition",
DROP COLUMN "title",
ADD COLUMN     "data" JSONB NOT NULL;
