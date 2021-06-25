const express = require('express'),
router = express.Router(),
db = require("./db");

//Metodos GET:

router.get('/lista/contatos', function(req, res) {
    let sql = `SELECT * FROM contato`;
    db.query(sql, function(err, data, fields) {
        if (err) throw err;
        res.json({
        status: 200,
        data,
        message: "Lista de contatos recebida"
    })
    })
});

router.get('/lista/eventos', function(req, res) {
  let sql = `SELECT * FROM evento`;
  db.query(sql, function(err, data, fields) {
      if (err) throw err;
      res.json({
      status: 200,
      data,
      message: "Lista de eventos recebida"
  })
  })
});


router.get('/lista/grupos', function(req, res) {
  let sql = `SELECT * FROM grupo`;
  db.query(sql, function(err, data, fields) {
      if (err) throw err;
      res.json({
      status: 200,
      data,
      message: "Lista de eventos recebida"
  })
  })
});


router.get('/lista/contato-evento', function(req, res) {
  let sql = `SELECT c.nomeContato, e.nomeEvento  FROM contato c JOIN vaiAoEvento v ON c.cpf = v.cpfContato JOIN evento e ON v.idEvento = e.id;`;
  db.query(sql, function(err, data, fields) {
      if (err) throw err;
      console.log('dados:',data);
      res.json({
      status: 200,
      data,
      message: "Lista de Contatos-Eventos recebida"
  })
  })
});

router.get('/lista/contato-grupo', function(req, res) {
  let sql = `SELECT c.nomeContato, g.nomeGrupo  FROM contato c
              JOIN participaDoGrupo p
              ON c.cpf = p.cpfContato
              JOIN grupo g
              ON p.idGrupo = g.id`;
  db.query(sql, function(err, data, fields) {
      if (err) throw err;
      res.json({
      status: 200,
      data,
      message: "Lista de Contatos-Grupos recebida"
  })
  })
});


//---------------------------------------------------------------------------------------------//
//Metodos POST

router.post('/novoContato', function(req, res) {
    const sql = `INSERT INTO contato(cpf, nomeContato, sobrenome, celular, email) VALUES (?)`;
    console.log("obj recebido: ",req.body)
    const values = [
      req.body.cpf,
      req.body.nomeContato,
      req.body.sobrenome,
      req.body.celular,
      req.body.email
    ];
    //console.log("body:", req.body)
    db.query(sql, [values], function(err, data, fields) {
      if (err) {
          console.log('erro:', err);
          throw err
        };
      res.json({
        status: 200,
        message: "Contato Criado"
      })
    })
  });

  router.post('/novoEvento', function(req, res) {
    const sql = `INSERT INTO evento(id,nomeEvento, dataEvento, hora) VALUES (?)`;
    const values = [
      req.body.id,
      req.body.nomeEvento,
      req.body.dataEvento,
      req.body.hora
    ];
    //console.log("body:", req.body)
    db.query(sql, [values], function(err, data, fields) {
      if (err) {
          console.log('erro:', err);
          throw err
        };
      res.json({
        status: 200,
        message: "Evento Criado"
      })
    })
  });

  router.post('/novoGrupo', function(req, res) {
    const sql = `INSERT INTO grupo(id,nomeGrupo) VALUES (?)`;
    const values = [
      req.body.id,
      req.body.nomeGrupo
    ];
    //console.log("body:", req.body)
    db.query(sql, [values], function(err, data, fields) {
      if (err) {
          console.log('erro:', err);
          throw err
        };
      res.json({
        status: 200,
        message: "Grupo Criado"
      })
    })
  });

  router.post('/add/contato-evento', function(req, res) {
    const sql = `INSERT INTO vaiAoEvento(idEvento, cpfContato) VALUES (?)`;
    const values = [
      req.body.idEvento,
      req.body.cpfContato
    ];
    //console.log("body:", req.body)
    db.query(sql, [values], function(err, data, fields) {
      if (err) {
          console.log('erro:', err);
          throw err
        };
      res.json({
        status: 200,
        message: "Contato adicionado ao Evento"
      })
    })
  });

  router.post('/add/contato-grupo', function(req, res) {
    const sql = `INSERT INTO participaDoGrupo(idGrupo, cpfContato) VALUES (?)`;
    const values = [
      req.body.idGrupo,
      req.body.cpfContato
    ];
    //console.log("body:", req.body)
    db.query(sql, [values], function(err, data, fields) {
      if (err) {
          console.log('erro:', err);
          throw err
        };
      res.json({
        status: 200,
        message: "Contato adicionado ao Grupo"
      })
    })
  });


  

module.exports = router