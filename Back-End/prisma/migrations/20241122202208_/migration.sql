-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TbProjeto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "numerVagas" INTEGER NOT NULL,
    "hashimg" TEXT NOT NULL,
    "openedat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "excludedAt" DATETIME
);
INSERT INTO "new_TbProjeto" ("closedAt", "createdAt", "data", "descricao", "excludedAt", "hashimg", "hora", "id", "local", "nome", "numerVagas", "openedat", "updatedAt") SELECT "closedAt", "createdAt", "data", "descricao", "excludedAt", "hashimg", "hora", "id", "local", "nome", "numerVagas", "openedat", "updatedAt" FROM "TbProjeto";
DROP TABLE "TbProjeto";
ALTER TABLE "new_TbProjeto" RENAME TO "TbProjeto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
