# Detective Comics 📜

__Serviço de gerenciamento de quadrinhos feito com Angular, Node, Express e SQL(MariaDB)📦__

<a href="https://youtu.be/_wNw2O1UCDA">Detective Comics - Vídeo de demonstração</a>

<div>
  <img src="./imgs/detective_comics.gif" />
</div>

#### **Tecnologias utilizadas 🛠️**

- Front-end 🏠
  * AngularJS
  * Angular Material
  * SCSS
- Back-end 💾
  * NodeJS
  * Express
  * Express Validator
  * SQL
  * MariaDB
  * TypeScript

---
### **Documentação 📝**

Infelizmente não encontrei nenhum serviço para hospedar o banco de dados gratuitamente.⚠️

---
### **Criação do banco de dados e configuração📦**

Antes de rodar o projeto, é preciso criar um banco de dados chamado **detective_comics** e uma tabela chamada **comics**.

O SGBD utilizado para esse projeto foi o **MariaDB**

#### *Código*
```sql
# 1
create database detective_comics;
# 2
use detective_comics;

# 3
create table comics (
	id int unsigned not null auto_increment,
    name varchar(100) not null,
    author varchar(100) not null,
    date_of_publication varchar(10) not null,
    url_image varchar(100) not null,
    primary key (id)
);
```
Em ```./backend/src/models/pool.ts``` é preciso configura o **user** e **password** do seu usuário.
*Recomendado utilizar variáveis de Ambiente*

---
### **Instalação de dependências📦**

```bash
# Entra na pasta do projeto
$ cd detective-comics-main

# Entra na pasta do backend
$ cd backend

# Instalar todos os pacotes necessários
$ npm install

# Rodar o projeto
npm start

# -- Em outro terminal ⚠️ --

# Entra na pasta do fronend
$ cd fronend

# Instalar todos os pacotes necessários
$ npm install

# Rodar o projeto
npm start

```

---
**Portas utilizadas no projeto🚪**
* Front-end: 4200

---
#### **Projeto desenvolvido por [Matheus Henrique da Silva]("https://www.instagram.com/themateusreal/")🚀👨‍🚀👨🏿‍💻**