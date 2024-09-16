-- CreateTable
CREATE TABLE "TbVoluntario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "disponibilidade" TEXT NOT NULL,
    "areasInteresse" TEXT NOT NULL,
    "experiencia" TEXT,
    "openedat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "excludedAt" DATETIME
);

-- CreateTable
CREATE TABLE "TbONG" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cnpj" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "nomeFantasia" TEXT NOT NULL,
    "site" TEXT,
    "descricao" TEXT,
    "areasAtuacao" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "openedat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "excludedAt" DATETIME
);

-- CreateTable
CREATE TABLE "TbUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refreshToken" TEXT,
    "FkIdTbVoluntario" INTEGER,
    "FkIdTbONG" INTEGER,
    "openedat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "excludedAt" DATETIME,
    CONSTRAINT "TbUsuario_FkIdTbVoluntario_fkey" FOREIGN KEY ("FkIdTbVoluntario") REFERENCES "TbVoluntario" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "TbUsuario_FkIdTbONG_fkey" FOREIGN KEY ("FkIdTbONG") REFERENCES "TbONG" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TbEndereco" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "FkIdTbVoluntario" INTEGER,
    "FkIdTbONG" INTEGER,
    "openedat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "excludedAt" DATETIME,
    CONSTRAINT "TbEndereco_FkIdTbVoluntario_fkey" FOREIGN KEY ("FkIdTbVoluntario") REFERENCES "TbVoluntario" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "TbEndereco_FkIdTbONG_fkey" FOREIGN KEY ("FkIdTbONG") REFERENCES "TbONG" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TbContato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "FkIdTbVoluntario" INTEGER,
    "FkIdTbONG" INTEGER,
    "openedat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "excludedAt" DATETIME,
    CONSTRAINT "TbContato_FkIdTbVoluntario_fkey" FOREIGN KEY ("FkIdTbVoluntario") REFERENCES "TbVoluntario" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "TbContato_FkIdTbONG_fkey" FOREIGN KEY ("FkIdTbONG") REFERENCES "TbONG" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "TbVoluntario_cpf_key" ON "TbVoluntario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "TbONG_cnpj_key" ON "TbONG"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "TbUsuario_email_key" ON "TbUsuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TbUsuario_username_key" ON "TbUsuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "TbUsuario_refreshToken_key" ON "TbUsuario"("refreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "TbContato_email_key" ON "TbContato"("email");
