/*
  Warnings:

  - You are about to drop the column `version` on the `Actions` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `EquipmentItemTypes` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `ItemTypes` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `JobItems` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `States` table. All the data in the column will be lost.
  - Added the required column `description` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Actions" DROP COLUMN "version";

-- AlterTable
ALTER TABLE "EquipmentItemTypes" DROP COLUMN "version";

-- AlterTable
ALTER TABLE "ItemTypes" DROP COLUMN "version";

-- AlterTable
ALTER TABLE "Items" DROP COLUMN "version",
ADD COLUMN     "description" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "JobItems" DROP COLUMN "version";

-- AlterTable
ALTER TABLE "States" DROP COLUMN "version";
