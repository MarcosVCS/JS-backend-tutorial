const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">products</a>');
});

// No Express, rota com /: serve como um placeholder (parâmetro)
// Esse parâmetro depende da requisição
// Neste caso, podem ser passados diferentes produtos (diferentes ids)
// Ex: http://localhost:5000/api/products/1
app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  //output: { productID: '1' }
  //observação: repare que o número retornado é uma string

  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    return product.id === Number(productID);
  });

  //Caso seja solicitado um produto que não exista
  if (!singleProduct) {
    return res.status(404).send("Product does not exist!");
    //observação: ao enviar uma resposta com if, necessário utilizar "return",
    //para não haver duas repostas por função (ocasiona erro)
  }

  //Caso produto exista
  res.json(singleProduct);
});

// Múltiplos parâmetros
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  //Exemplo: http://localhost:5000/api/products/1/reviews/7
  console.log(req.params);
  //output: { productID: '1', reviewID: '7' }
});

//Query params
app.get("/api/v1/query", (req, res) => {
  // Se o URL for "http://localhost:5000/api/v1/query?name=john&id=4"
  console.log(req.query);
  // output: { name: 'john', id: '4' }
});

app.get("/api/v2/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  //Se não houver informações que satisfaçam a querry:
  if (sortedProducts.length < 1) {
    // res.status(200).send("No products matched your search");
    return res.status(200).json({ sucess: true, data: [] });
    //Observação: não retornar status 404 nesse caso
  }
  //Envio dos dados filtrados
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
