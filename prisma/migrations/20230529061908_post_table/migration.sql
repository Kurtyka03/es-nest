-- CreateTable
CREATE TABLE "post" (
    "uuid" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "auhorId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "post_uuid_key" ON "post"("uuid");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_auhorId_fkey" FOREIGN KEY ("auhorId") REFERENCES "user"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
