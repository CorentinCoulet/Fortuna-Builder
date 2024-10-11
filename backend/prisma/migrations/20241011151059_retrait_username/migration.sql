/*
  Warnings:

  - You are about to drop the column `username` on the `Users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Users_username_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "username";

-- CreateTable
CREATE TABLE "Builds" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "build" JSONB NOT NULL,

    CONSTRAINT "Builds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Runes" (
    "id" SERIAL NOT NULL,
    "title" JSONB,
    "type" TEXT,
    "rarity" INTEGER,
    "picture" INTEGER,
    "equipEffects" JSONB,
    "description" JSONB,

    CONSTRAINT "Runes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Builds" ADD CONSTRAINT "Builds_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
