-- AlterTable
ALTER TABLE "Actions" RENAME CONSTRAINT "Action_pkey" TO "Actions_pkey";

-- AlterTable
ALTER TABLE "EquipmentItemTypes" RENAME CONSTRAINT "EquipmentItemType_pkey" TO "EquipmentItemTypes_pkey";

-- AlterTable
ALTER TABLE "ItemTypes" RENAME CONSTRAINT "ItemType_pkey" TO "ItemTypes_pkey";

-- AlterTable
ALTER TABLE "Items" RENAME CONSTRAINT "Item_pkey" TO "Items_pkey";

-- AlterTable
ALTER TABLE "JobItems" RENAME CONSTRAINT "JobItem_pkey" TO "JobItems_pkey";

-- AlterTable
ALTER TABLE "States" RENAME CONSTRAINT "State_pkey" TO "States_pkey";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
