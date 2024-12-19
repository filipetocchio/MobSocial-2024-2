-- CreateTable
CREATE TABLE "TbUsuarioVoluntario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refreshToken" TEXT,
    "telefone" TEXT,
    "cpf" TEXT,
    "areasInteresse" TEXT NOT NULL,
    "experiencia" TEXT,
    "openedat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "excludedAt" DATETIME
);

-- CreateTable
CREATE TABLE "TbUsuarioONG" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refreshToken" TEXT,
    "cnpj" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "nomeFantasia" TEXT NOT NULL,
    "site" TEXT,
    "descricao" TEXT,
    "areasAtuacao" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "numeroDeIndentificacaoDaOng" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "openedat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "excludedAt" DATETIME
);

-- CreateTable
CREATE TABLE "TbProjeto" (
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

-- CreateIndex
CREATE UNIQUE INDEX "TbUsuarioVoluntario_email_key" ON "TbUsuarioVoluntario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TbUsuarioVoluntario_username_key" ON "TbUsuarioVoluntario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "TbUsuarioVoluntario_refreshToken_key" ON "TbUsuarioVoluntario"("refreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "TbUsuarioONG_email_key" ON "TbUsuarioONG"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TbUsuarioONG_username_key" ON "TbUsuarioONG"("username");

-- CreateIndex
CREATE UNIQUE INDEX "TbUsuarioONG_refreshToken_key" ON "TbUsuarioONG"("refreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "TbUsuarioONG_cnpj_key" ON "TbUsuarioONG"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "TbUsuarioONG_numeroDeIndentificacaoDaOng_key" ON "TbUsuarioONG"("numeroDeIndentificacaoDaOng");
