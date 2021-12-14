var produtos = [
  {
    nome: "Cafe1",
    quantidade: 10
  },
  {
    nome: "Cafe2",
    quantidade: 10
  }
]

var cart = []

var accounts = [
  {
    login: "admin",
    password: "admin",
    type: "adm"
  },
  {
    login: "user",
    password: "user",
    type: "usr"
  }
]

function delay() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 100);
  });
}

// functions of store

// users
async function login(account) {
  await delay();

  console.log(`Login ${account.login} Pass ${account.password}`);

  if (account.type == "adm") {
    console.log("Permissao especial");
  }

  return "200 OK";
}

async function addPermissionAdmin(account) {
  await delay();

  console.log(`Add permissao admin no user ${JSON.stringify(account)}`);
  account.type = "adm"
  console.log(`Nova permissao user ${JSON.stringify(account)}`);

  return "200 OK";
}

async function removePermissionAdmin(account) {
  await delay();

  console.log(`Remove permissao admin no user ${JSON.stringify(account)}`);
  account.type = "user"
  console.log(`Nova permissao user ${JSON.stringify(account)}`);

  return "200 OK";
}

async function logout(account) {
  await delay();

  console.log(`Logout ${account.login}`);

  return "200 OK";
}

// products
async function readProductById(id) {
  await delay();
  console.log("readProductById");
  console.log(produtos[id]);

  return JSON.parse(produtos);
}

async function listProducts() {
  await delay();
  console.log("listProducts");
  console.log(produtos);

  return JSON.parse(produtos);
}

async function sellProduct(cartSell) {
  await delay();
  console.log("sellProduct");

  cartSell.forEach(product => {
    if (produtos[product.id].quantidade >= product.qtd) {
      console.log(`Estoque ok! Tem ${produtos[product.id].quantidade} em estoque do ${produtos[product.id].nome}`);
      produtos[product.id].quantidade -= product.qtd;
      console.log(`Agora tem ${produtos[product.id].quantidade} em estoque do ${produtos[product.id].nome}`);
    }
  });

  return "200 OK";
}

async function addToCart(id, qtd) {
  await delay();

  console.log("addToCart()");
  cart.push({ id, qtd });
  console.log(`Cart atualizado: ${JSON.stringify(cart)}`)

  return "200 OK";
}

window.addEventListener('DOMContentLoaded', (event) => {

  login(accounts[0]);
  listProducts();
  readProductById(0);
  addPermissionAdmin(accounts[1]);
  //removePermissionAdmin(accounts[1]);
  logout(accounts[0]);

  login(accounts[1]);
  console.log("Cart: vazio");
  addToCart(0, 2);
  addToCart(1, 5);
  sellProduct(cart);
  logout(accounts[1]);

});
