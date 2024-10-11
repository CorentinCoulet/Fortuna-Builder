-- AlterTable
ALTER TABLE "Equipment" ADD COLUMN     "idItems" INTEGER,
ADD COLUMN     "useParameters" JSONB;

-- AlterTable
ALTER TABLE "Items" ADD COLUMN     "sublimationParameters" JSONB;
