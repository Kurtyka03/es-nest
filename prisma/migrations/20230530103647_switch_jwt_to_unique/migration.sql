/*
  Warnings:

  - A unique constraint covering the columns `[jwt]` on the table `auth` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "auth_jwt_key" ON "auth"("jwt");
