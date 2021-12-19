
# SCC0219 - Web Development

## Café Gourmet

O website desse projeto é o site do Café Gourmet, que contém produtos de café. A aplicação suporta dois tipos de utilizadores: admin (para gerir produtos, utilizadores e vendas) e clientes (que podem comprar produtos.

A funcionalidade especial do nosso projeto é a interação com uma xicara, onde o usuario pode escolher uma de sua preferencia e depois esquentar um café.

## Grupo:

* Danilo Silva

* Jean Carlos

* Lucas Braga

## Requisitos:

* O sistema deve ter 2 tipos de usuarios: Admin e User.

* Administradores são responsavei por registrar/gerenciar administradores, clientes e produtos. A aplicação já vem com uma conta admin default: 
	* Login: admin;  
	* Pass: admin .

* Clientes são os usuarios que acessam o sistema para comprar produtos.

* O registro de admin deve incluir: name, id, phone, email.

* Cada registro de cliente deve ter: name, id, address, phone, email

* Produtos devem ter em seu registro: name, id, photo, description, price, quantity (in stock), quantity sold.

* Sua loja deve vender produtos, serviços ou afins.

* Vendendo produtos: Os produtos são seleccionados, junto a quantidade escolhida, e são incluídos num carrinho. Os produtos são adquiridos utilizando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto vendido é subtraída da quantidade em stock e adicionada à quantidade vendida. Os carrinhos são esvaziados apenas mediante pagamento ou pelos clientes.

* Gerenciamento de produtos: Os administradores podem realizar o CRUD de novos produtos. Por exemplo, eles podem alterar a quantidade de estoque.

* Funcionalidade especial: Criar uma funcionalidade que seja específica para a sua aplicação. Não tem de ser algo complicado. Por exemplo, se estiver a vender carros, pode permitir que os utilizadores utilizem um acelerador para ouvir como cada motor de carro ruge para cima e para baixo.

* O sistema deve fornecer requisitos de acessibilidade e proporcionar uma boa usabilidade. 
* 
* O sistema tem de ser responsivo.  

## Descrição do projeto:

Diagrama:<br>

![Diagrama do projeto](Diagrama.jpg)

 ##### Main Page

The main page is responsive.

#### User Page

In the user page, the user can view their information, log out from their acconut or delete their account.

#### Login Page

In this page the user can login the website's system. After connected the user will be redirected to the main page, if logged with a client account, or to admin page if logged with an admin account.

If the user doesn't have a registered account, he can access the register page from this page.

##### Login as Admin (mocked)

Login: admin 
Password: admin

##### Login as regular user (mocked)

Login: user
Password: user  

#### Products Page

This page shows all the products available in our online shop. If an administrator adds a new product or edits an already existing one, the products page will be updated.

This page also presents our group's functionality { we don't have yet }.

  

#### Cart and Payments Page

This page displays all the products selected by the user. It's possible to change the desired quantity of each product, as well as remove them. After the user is done with shopping, they can go to the payment page, where they'll fill in the forms with shipment and payment information. After the payment is concluded, the user is redirected to the main page.

  

#### Admin's Page (we didn't make the prototype)

In this page the admin will can manage the available products or the users that are registered on the plataform. He can turn a normal user (client) into a new administrator. He could also add new products or edit the already existing ones.

## Comentários sobre o Código:

No projeto, fizemos uma aplicação web, utilizando: HTML, SCSS, JS e TS.
Como framework utilizamos o Angular.
Para estilização utilizamos duas bibliotecas: o Bootstrap e o Angular Material.
No backend, utilizamos o Node e tentamos utilizar a arquitetura padrão normalmente em APIs Rest, com Controlles, Repositories, Models, Routers...

## Plano de teste:

Nossos testes serão feitos de forma manual, seguindo as historias a seguir: 

* ?
* ?
* ?  

## Resultados dos testes:

Realizámos múltiplos testes no nosso sistema e dentro do que nos foi proposto, todos eles passaram, conseguindo realizar:

* Admin realiza CRUD de usuarios e produtos;
* Admin gerencia permissao de usuario;
* Admin visualiza vendas;
* Cliente consegue comprar produtos;
* Logica de vendas totalmente funcional;
* WebSite aginde de maneira responsiva.  

## Build Procedures:

* Você precisará ter o npm instalado 
* git clone https://github.com/lhenbr/web-development-an-online-store.git
* Entre na pasta do repositório clonado
* Abra dois terminais em um entre na pasta front-end e em outro entre na pasta back-end
* Em cada um dos terminais rode os comandos
	* npm install
	* npm start  
* Se tudo correu bem, terá:
	* Back-end rodando na porta: http://localhost:3000/
	* Front-end rodando na porta: http://localhost:4200/
	
## Problemas:

* Não utilizamos o VUE como foi proposto inicialmente, pois tivemos problemas em conciliar os estudos de um novo framework e a vida universitaria durante o semestre; então fomos no que conheciamos o nosso querido Angular.
* O design, tentamos seguir o mockup, porém achamos que poderia melhorar a questão estética de nossa aplicação.
* Tivemos problemas de tempo, tendo que pedir para nosso reviwers dar mais tempo para gente cloncluir o projeto.
* Um dos nossos parceiros teve que desistir da matéria por questões pessoais.

## Comments:

* Gostamos muito da matéria, achamos que conseguimos desenvolver muito bem nossas habilidades;
* Achamos muito legais os HandsOn.