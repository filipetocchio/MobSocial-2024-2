/*
  Warnings:

  - You are about to drop the column `telefone` on the `TbUsuarioVoluntario` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `TbUsuarioVoluntario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TbUsuarioVoluntario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refreshToken" TEXT,
    "cpf" TEXT NOT NULL,
    "areasInteresse" TEXT NOT NULL,
    "experiencia" TEXT,
    "openedat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "excludedAt" DATETIME
);
INSERT INTO "new_TbUsuarioVoluntario" ("areasInteresse", "closedAt", "createdAt", "email", "excludedAt", "experiencia", "id", "openedat", "password", "refreshToken", "updatedAt", "username") SELECT "areasInteresse", "closedAt", "createdAt", "email", "excludedAt", "experiencia", "id", "openedat", "password", "refreshToken", "updatedAt", "username" FROM "TbUsuarioVoluntario";
DROP TABLE "TbUsuarioVoluntario";
ALTER TABLE "new_TbUsuarioVoluntario" RENAME TO "TbUsuarioVoluntario";
CREATE UNIQUE INDEX "TbUsuarioVoluntario_email_key" ON "TbUsuarioVoluntario"("email");
CREATE UNIQUE INDEX "TbUsuarioVoluntario_username_key" ON "TbUsuarioVoluntario"("username");
CREATE UNIQUE INDEX "TbUsuarioVoluntario_refreshToken_key" ON "TbUsuarioVoluntario"("refreshToken");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
