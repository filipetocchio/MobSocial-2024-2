import express from "express";
import { apiV1Router } from "./routes/routes";
import path from "path";
import { errorHandler } from "./middleware/errorHandler";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 8001;

// Garantir diretório de uploads
const uploadDir = path.resolve(__dirname, "..", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
console.log(`Diretório de upload garantido em: ${uploadDir}`);

// Middleware para logs de requisição
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

// Servir arquivos estáticos (públicos e uploads)
app.use(express.static(path.join(__dirname, "/public"))); // Arquivos públicos
app.use("/uploads", express.static(uploadDir)); // Arquivos de upload

// Rotas principais
app.use("/api/v1", apiV1Router);

// Rota inicial
app.get("/", (req, res) => {
  res.send("Hello nodejs!");
});

// Middleware de tratamento de erros
app.use(errorHandler);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
