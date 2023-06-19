const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  const produtos = [
    {
      id: 1,
      nome: "Camiseta Branca",
      descricao: "Camiseta de algodão branca",
      preco: 49.99,
      quantidade: 10,
      codigo: "CMB001",
      categoria: "Roupas",
      fornecedor: "Marca X",
      disponivel: true,
    },
    {
      id: 2,
      nome: "Tênis Esportivo",
      descricao: "Tênis para atividades físicas",
      preco: 129.99,
      quantidade: 5,
      codigo: "TES001",
      categoria: "Calçados",
      fornecedor: "Marca Y",
      disponivel: false,
    },
    {
      id: 3,
      nome: "Smartphone",
      descricao: "Celular com sistema operacional Android",
      preco: 1999.99,
      quantidade: 3,
      codigo: "SMP001",
      categoria: "Eletrônicos",
      fornecedor: "Marca Z",
      disponivel: true,
    },
    {
      id: 4,
      nome: "Livro de Romance",
      descricao: "Livro de ficção romântica",
      preco: 29.99,
      quantidade: 20,
      codigo: "LVR001",
      categoria: "Livros",
      fornecedor: "Editora X",
      disponivel: true,
    },
    {
      id: 5,
      nome: "Cafeteira Elétrica",
      descricao: "Cafeteira para fazer café",
      preco: 149.99,
      quantidade: 8,
      codigo: "CAF001",
      categoria: "Eletrodomésticos",
      fornecedor: "Marca W",
      disponivel: true,
    },
  ];

  res.json({
    sucesso: true,
    produtos,
  });
});

const PORT = 3334;
app.listen(PORT, () => {
  console.log("server booted on port 8080, rota http://localhost:8080/contato");
});
