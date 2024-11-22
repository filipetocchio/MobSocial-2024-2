-- CreateTable
CREATE TABLE "TbProjeto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
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

-- CreateTable
CREATE TABLE "TbNewsletter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "openedat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "excludedAt" DATETIME
);
