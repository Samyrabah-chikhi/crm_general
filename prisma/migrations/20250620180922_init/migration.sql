/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Client_name_key";

-- DropIndex
DROP INDEX "User_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_userId_key" ON "Client"("name", "userId");
