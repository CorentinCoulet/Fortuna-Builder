/*
  Warnings:

  - You are about to drop the column `patern` on the `Sublimations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sublimations" DROP COLUMN "patern",
ADD COLUMN     "pattern" JSONB;
