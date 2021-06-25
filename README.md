# Agenda

## Sobre
Esta é uma implementação básica de uma agenda, na qual possui uma lista de contatos, grupos de contatos e uma lista de evento.
A aplicação foi proposta pela empresa ... durante minha candidatura a vaga de desenvolvedor.
Para desenvolver a solução optei por utilizar técnologias web, nas quais já estou mais familiarizado.

## 🛠Técnologias Utilizadas
- [Node.js v14.15](https://nodejs.org/en/)
- [MySQL v8.0](https://www.mysql.com/)

### Frameworks
- [Express v4.17](https://expressjs.com/)
- [Bootstrap v3.4](https://getbootstrap.com/)]

### IDE
- [Visual Studio Code](https://code.visualstudio.com/) 
- [MySQL Workbench](https://www.mysql.com/products/workbench/)

## 🎲Como Utilizar
### Passo 1
Primeiramente precisamos iniciar/criar nosso banco de dados. Para isso deve-se executar o arquivo ```db.sql```
Para isso eu utilizei a IDE MySQL Workbench.

### Passo 2
Instalar dependências
```npm install express cors mysql bootstrap```

### Passo 3
Inicializar o server. Para isso no terminal execute o arquivo ```server.js```.

```node ./server.js```
ou 
```nodemon ./server.js```  - Nesta opção o server reinicializa sempre que ouver alteração no código.

É importante verificar no arquivo ```db.js``` se os parametros do banco de dados foram passados corretamente.

```js
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'agenda'
});
```
### Passo 4
Abra o arquivo ```agenda.html``` 

## 🚀O que foi implementado
- Na aplicação o usuário tem visão de todos contatos da agenda, todos os grupos de contatos e todos os eventos;
- É possível adicionar novos contatos, novos grupos de contatos e novos eventos;
- As datas de criação e atualização optei por deixar omitidas, visto que elas devem ser setadas automaticamente no momento de criação ou atualização;
- Todas as rotas foram testadas utilizando a plataforma web para APIs [Postman](https://www.postman.com/).

## 🚧O que falta implementar
- Ainda não é possível adicionar contatos em grupos ou eventos, porém, as rotas já estão criadas no arquivo ```route.js```;
- Apresentar os integrantes de grupos ou eventos na tela;
- Tratar o formato de data e hora dos eventos;


