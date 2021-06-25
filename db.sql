#iniciando o banco de dados

CREATE DATABASE IF NOT EXISTS agenda;
USE agenda;

#Limpa db
#DROP database agenda;

#----------------------------------------------------------------------------------------------------------------------#
#Criando as tabelas

CREATE TABLE IF NOT EXISTS contato(
cpf BIGINT NOT NULL,
nomeContato VARCHAR(100),
sobrenome VARCHAR(100),
celular BIGINT(11),
email VARCHAR(100),
dataCadastro DATE NOT NULL DEFAULT (current_date()),
dataAtualizacao DATE NOT NULL DEFAULT (current_date()),
PRIMARY KEY (cpf)
);

CREATE TABLE IF NOT EXISTS evento(
id BIGINT NOT NULL,
nomeEvento VARCHAR(100),
dataEvento DATE,
hora TIME,
dataCadastro DATE NOT NULL DEFAULT (current_date()),
dataAtualizacao DATE NOT NULL DEFAULT (current_date()),
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS vaiAoEvento(
id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
idEvento BIGINT NOT NULL,
cpfContato BIGINT NOT NULL,
CONSTRAINT fk_evento
FOREIGN KEY (idEvento) 
REFERENCES evento(id)
	ON UPDATE CASCADE
    ON DELETE CASCADE,
CONSTRAINT fk_cpf
FOREIGN KEY (cpfContato) 
REFERENCES contato(cpf)
	ON UPDATE CASCADE
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS grupo(
id BIGINT NOT NULL AUTO_INCREMENT,
nomeGrupo VARCHAR(100),
dataCadastro DATE NOT NULL DEFAULT (current_date()),
dataAtualizacao DATE NOT NULL DEFAULT (current_date()),
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS participaDoGrupo(
id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
idGrupo BIGINT NOT NULL,
cpfContato BIGINT NOT NULL,
CONSTRAINT fk_grupo
FOREIGN KEY (idGrupo) 
REFERENCES grupo(id)
	ON UPDATE CASCADE
    ON DELETE CASCADE,
CONSTRAINT fk_cpfContato
FOREIGN KEY (cpfContato) 
REFERENCES contato(cpf)
	ON UPDATE CASCADE
    ON DELETE CASCADE
);

#----------------------------------------------------------------------------------------------------------------------#
#POPULANDO AS TABELAS 

INSERT INTO contato 
(cpf,nomeContato, sobrenome, celular, email) 
VALUES
(11122233344, 'Greg', 'Sedrez', 53999961260, 'greg@email.com'),
(22233344455, 'Maria', 'Farais', 54999963456, 'maria@email.com'),
(33344455566, 'Lucas', 'Alfredo', 5199994523, 'lucas@email.com');

INSERT INTO evento 
(id, nomeEvento, dataEvento, hora) 
VALUES
(1, 'Evento 1', '2021-10-26', '17:30:00'),
(2, 'Evento 2', '2021-07-20', '14:20:00'),
(3, 'Evento 3', '2021-12-25', '22:30:00');

INSERT INTO grupo 
(id, nomeGrupo) 
VALUES
(1, 'Grupo 1'),
(2, 'Grupo 2'),
(3, 'Grupo 3');

INSERT INTO participaDoGrupo 
(idGrupo, cpfContato) 
VALUES
(1,11122233344),
(2,11122233344),
(3,11122233344),
(2,22233344455),
(3,22233344455),
(3,33344455566);

INSERT INTO vaiAoEvento 
(idEvento, cpfContato) 
VALUES
(1,11122233344),
(2,11122233344),
(3,11122233344),
(2,22233344455),
(3,22233344455),
(3,33344455566);

#----------------------------------------------------------------------------------------------------------------------#
#Testando

SELECT * FROM contato;
SELECT * FROM evento;
SELECT * FROM grupo;
SELECT * FROM vaiAoEvento;
SELECT * FROM participaDoGrupo;

SELECT c.nomeContato, e.nomeEvento  FROM contato c
JOIN vaiAoEvento v
ON c.cpf = v.cpfContato
JOIN evento e 
ON v.idEvento = e.id;

SELECT c.nomeContato, g.nomeGrupo  FROM contato c
JOIN participaDoGrupo p
ON c.cpf = p.cpfContato
JOIN grupo g
ON p.idGrupo = g.id;


