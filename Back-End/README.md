# MobSocial Backend

## Descrição do Projeto

Este projeto é o backend do sistema **MobSocial**, que visa conectar ONGs com voluntários para projetos sociais. Até o momento, o sistema contém **38 endpoints** completamente funcionais, permitindo interações como registro de voluntários e ONGs, gerenciamento de dados, autenticação, entre outros.

O sistema foi desenvolvido com **Node.js** e **Express**, e utiliza **Prisma** para ORM, com um banco de dados SQLite atualmente, mas preparado para migração para outros bancos de dados no futuro, como PostgreSQL. Futuramente, existe a possibilidade de migrar o projeto para o **Nest.js**, com a integração do frontend que pode ser desenvolvido em **React** ou **Next.js**.

## Tecnologias Utilizadas

- **Node.js**: Plataforma JavaScript no lado do servidor.
- **Express**: Framework para desenvolvimento de APIs.
- **Prisma**: ORM para interação com o banco de dados.
- **Typescript**: Linguagem utilizada no projeto para segurança com tipos.
- **JWT (jsonwebtoken)**: Para autenticação via tokens.
- **Bcrypt**: Para criptografia de senhas.
- **Zod**: Validação de dados.
- **dotenv**: Carregamento de variáveis de ambiente.
- **Nodemon**: Ferramenta para desenvolvimento que reinicia automaticamente a aplicação ao detectar mudanças.
- **Jest**: Framework de testes.
  
## Passos para Rodar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/filipetocchio/MobSocial-2024-2.git
   cd .\MobSocial-2024-2\Back-End\
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Crie o arquivo `.env`**:
   - Copie o conteúdo do arquivo `.env.example` para um novo arquivo `.env`:
     ```bash
     cp .env.example .env
     ```
   - Modifique as informações conforme necessário, como a URL do banco de dados e os segredos de tokens.

   Exemplo de `.env`:
   ```env
   PORT=8001
   ACCESS_TOKEN_SECRET="token_secreto"
   REFRESH_TOKEN_SECRET="token_secreto"
   DATABASE_URL="file:./dev.db"
   ```

4. **Execute as migrações do banco de dados**:
   ```bash
   npm run migrate
   ```

5. **Inicie o servidor em modo de desenvolvimento**:
   ```bash
   npm run dev
   ```

6. **Testes da API**:
   - Há um arquivo de coleção do **Thunder Client** chamado `thunder-collection_MobSocial.json` que pode ser utilizado para testar os endpoints da API. Certifique-se de importá-lo no Thunder Client para rodar os testes.

## Scripts do `package.json`

- `dev`: Inicia o servidor em modo de desenvolvimento usando **Nodemon**.
- `migrate`: Executa as migrações do banco de dados usando **Prisma**.
- `studio`: Abre o Prisma Studio para visualizar e manipular os dados do banco.
- `build`: Remove a pasta `dist` e compila o código TypeScript.
- `start`: Compila o código e inicia o servidor de produção.
- `test`: Executa os testes unitários com **Jest**.
- `test:watch`: Executa os testes em modo de observação com **Jest**.

## Docker

Ainda estamos trabalhando na implementação do Docker para containerizar a aplicação e facilitar o deploy em diferentes ambientes. Uma vez finalizado, o projeto incluirá um arquivo `docker-compose.yml` para facilitar a configuração.

## Futuras Melhorias

- **Migração para Nest.js**: A aplicação poderá ser migrada para **Nest.js** no futuro, especialmente quando for necessária a integração com o frontend.
- **Frontend**: O frontend poderá ser desenvolvido usando **React** ou **Next.js**, e a integração com o backend será feita via API REST.

