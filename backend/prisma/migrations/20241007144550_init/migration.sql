-- AlterTable
ALTER TABLE "Actions" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Actions_id_seq";

-- AlterTable
ALTER TABLE "EquipmentItemTypes" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "EquipmentItemTypes_id_seq";

-- AlterTable
ALTER TABLE "ItemProperties" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "ItemProperties_id_seq";

-- AlterTable
ALTER TABLE "ItemTypes" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "ItemTypes_id_seq";

-- AlterTable
ALTER TABLE "Items" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Items_id_seq";

-- AlterTable
ALTER TABLE "JobItems" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "JobItems_id_seq";

-- AlterTable
ALTER TABLE "States" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "States_id_seq";
