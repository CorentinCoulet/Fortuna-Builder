-- CreateTable
CREATE TABLE "ItemProperties" (
    "id" SERIAL NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "ItemProperties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    "slot" TEXT NOT NULL,
    "properties" JSONB NOT NULL,
    "effects" JSONB NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Equipment_itemId_key" ON "Equipment"("itemId");
