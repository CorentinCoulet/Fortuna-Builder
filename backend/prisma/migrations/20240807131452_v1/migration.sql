-- Active: 1718270757809@@127.0.0.1@5432@FortunaBuilder@public
-- CreateTable
CREATE TABLE "Actions" (
    "id" SERIAL NOT NULL,
    "definition" JSONB NOT NULL,
    "description" JSONB NOT NULL,
    "version" TEXT NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipmentItemTypes" (
    "id" SERIAL NOT NULL,
    "definition" JSONB NOT NULL,
    "title" JSONB NOT NULL,
    "version" TEXT NOT NULL,

    CONSTRAINT "EquipmentItemType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemTypes" (
    "id" SERIAL NOT NULL,
    "definition" JSONB NOT NULL,
    "title" JSONB NOT NULL,
    "version" TEXT NOT NULL,

    CONSTRAINT "ItemType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "definition" JSONB NOT NULL,
    "title" JSONB NOT NULL,
    "version" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobItems" (
    "id" SERIAL NOT NULL,
    "definition" JSONB NOT NULL,
    "title" JSONB NOT NULL,
    "description" JSONB NOT NULL,
    "version" TEXT NOT NULL,

    CONSTRAINT "JobItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "States" (
    "id" SERIAL NOT NULL,
    "definition" JSONB NOT NULL,
    "title" JSONB NOT NULL,
    "version" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);
