/*
  Warnings:

  - The `jwt` column on the `auth` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "auth" ADD COLUMN     "statusLogin" BOOLEAN,
DROP COLUMN "jwt",
ADD COLUMN     "jwt" TEXT[];
