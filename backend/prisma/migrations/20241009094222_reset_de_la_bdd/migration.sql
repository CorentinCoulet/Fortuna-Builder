-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actions" (
    "id" SERIAL NOT NULL,
    "idIndex" INTEGER NOT NULL,
    "idActions" INTEGER,
    "effect" TEXT,
    "description" JSONB,

    CONSTRAINT "Actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipmentItemTypes" (
    "id" SERIAL NOT NULL,
    "idIndex" INTEGER NOT NULL,
    "idEquipmentItemTypes" INTEGER,
    "parentId" INTEGER,
    "title" JSONB,
    "definition" JSONB,

    CONSTRAINT "EquipmentItemTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemTypes" (
    "id" SERIAL NOT NULL,
    "idIndex" INTEGER NOT NULL,
    "idItemsTypes" INTEGER,
    "parentId" INTEGER,
    "title" JSONB,
    "definition" JSONB,

    CONSTRAINT "ItemTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemProperties" (
    "id" SERIAL NOT NULL,
    "idIndex" INTEGER NOT NULL,
    "idItemsProperties" INTEGER,
    "name" TEXT,
    "description" TEXT,

    CONSTRAINT "ItemProperties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "idIndex" INTEGER NOT NULL,
    "idItems" INTEGER,
    "title" JSONB,
    "item" JSONB,
    "useEffects" JSONB,
    "equipEffects" JSONB,
    "useCriticalEffects" JSONB,
    "description" JSONB,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobsItems" (
    "id" SERIAL NOT NULL,
    "idIndex" INTEGER NOT NULL,
    "idJobsItems" INTEGER,
    "level" INTEGER,
    "rarity" INTEGER,
    "itemTypeId" INTEGER,
    "graphicParameters" JSONB,
    "title" JSONB,

    CONSTRAINT "JobsItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "States" (
    "id" SERIAL NOT NULL,
    "idIndex" INTEGER NOT NULL,
    "idStates" INTEGER,
    "title" JSONB,

    CONSTRAINT "States_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "id" SERIAL NOT NULL,
    "title" JSONB,
    "rarity" TEXT,
    "level" INTEGER,
    "typeItem" TEXT,
    "effects" JSONB,
    "stats" JSONB,
    "description" TEXT,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Actions_idIndex_key" ON "Actions"("idIndex");

-- CreateIndex
CREATE UNIQUE INDEX "EquipmentItemTypes_idIndex_key" ON "EquipmentItemTypes"("idIndex");

-- CreateIndex
CREATE UNIQUE INDEX "ItemTypes_idIndex_key" ON "ItemTypes"("idIndex");

-- CreateIndex
CREATE UNIQUE INDEX "ItemProperties_idIndex_key" ON "ItemProperties"("idIndex");

-- CreateIndex
CREATE UNIQUE INDEX "Items_idIndex_key" ON "Items"("idIndex");

-- CreateIndex
CREATE UNIQUE INDEX "JobsItems_idIndex_key" ON "JobsItems"("idIndex");

-- CreateIndex
CREATE UNIQUE INDEX "States_idIndex_key" ON "States"("idIndex");
