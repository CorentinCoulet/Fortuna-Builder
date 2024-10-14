/*
  Warnings:

  - You are about to drop the `Equipment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Runes` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Items" ADD COLUMN     "picture" INTEGER;

-- DropTable
DROP TABLE "Equipment";

-- DropTable
DROP TABLE "Runes";

-- CreateTable
CREATE TABLE "Equipments" (
    "id" SERIAL NOT NULL,
    "idItems" INTEGER,
    "title" JSONB,
    "rarity" TEXT,
    "level" INTEGER,
    "typeItem" TEXT,
    "useParameters" JSONB,
    "effects" JSONB,
    "stats" JSONB,
    "description" TEXT,

    CONSTRAINT "Equipments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sublimations" (
    "id" SERIAL NOT NULL,
    "title" JSONB,
    "type" TEXT,
    "rarity" INTEGER,
    "picture" INTEGER,
    "equipEffects" JSONB,
    "description" JSONB,

    CONSTRAINT "Sublimations_pkey" PRIMARY KEY ("id")
);
