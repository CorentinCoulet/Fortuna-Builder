-- CreateTable
CREATE TABLE "Equipment" (
    "id" SERIAL NOT NULL,
    "title" JSONB NOT NULL,
    "rarity" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "typeItem" TEXT NOT NULL,
    "effects" JSONB NOT NULL,
    "stats" JSONB NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);
