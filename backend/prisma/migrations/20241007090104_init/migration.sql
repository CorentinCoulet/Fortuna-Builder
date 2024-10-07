-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "title" JSONB NOT NULL,
    "item" JSONB NOT NULL,
    "useEffects" JSONB NOT NULL,
    "equipEffects" JSONB NOT NULL,
    "useCriticalEffects" JSONB NOT NULL,
    "description" JSONB NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);
