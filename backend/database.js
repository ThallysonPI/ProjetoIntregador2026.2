
const Database = require("better-sqlite3");

// Criando/conectando ao banco
const db = new Database("database.db");

// Criando uma tabela
db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL
    )
`);

console.log("Banco de dados conectado!");

module.exports = db;
