/*
  Warnings:

  - You are about to drop the column `equipEffects` on the `Sublimations` table. All the data in the column will be lost.
  - You are about to drop the column `lvl` on the `Sublimations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sublimations" DROP COLUMN "equipEffects",
DROP COLUMN "lvl",
ADD COLUMN     "effects" JSONB;
