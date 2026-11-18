
const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

// Configurações
app.use(cors());
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
    res.send("Servidor Node.js funcionando!");
});

// Cadastrar usuários
app.post("/usuarios", (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            erro: "Nome e email são obrigatórios"
        });
    }

    const comando = db.prepare(
        "INSERT INTO usuarios (nome, email) VALUES (?, ?)"
    );

    const resultado = comando.run(nome, email);

    res.status(201).json({
        mensagem: "Usuário cadastrado!",
        id: resultado.lastInsertRowid
    });
});

// Consultar usuários
app.get("/usuarios", (req, res) => {
    const usuarios = db.prepare(
        "SELECT * FROM usuarios"
    ).all();

    res.json(usuarios);
});

// Inicialização do servidor
app.listen(3000, "0.0.0.0", () => {
    console.log("Servidor funcionando na porta 3000");
});
