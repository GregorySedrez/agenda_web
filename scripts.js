window.onload = init;


function init(){
    listaContatos();
    listaGrupos();
    listaEventos();
}

async function listaContatos(){
    var ul = document.getElementById("contacts");
    try {
        var contatos = await fetch("http://localhost:8888/api/lista/contatos"); 
        contatos = await contatos.json();

        contatos.data.forEach(contato => {
            var li = document.createElement("li");

            var pCPF = document.createElement("p");
            var pNome = document.createElement("p");
            var pSobrenome = document.createElement("p");
            var pCelular = document.createElement("p");
            var pEmail = document.createElement("p");

            li.classList.add("list-group-item");
            
            pNome.innerHTML = `Nome: ${contato.nomeContato} ${contato.sobrenome}`;
            pCPF.innerHTML = `CPF: ${contato.cpf}`;
            pCelular.innerHTML = `Celular: ${contato.celular}`;
            pEmail.innerHTML = `Email: ${contato.email}`;
            

            li.appendChild(pNome);
            li.appendChild(pCPF);
            li.appendChild(pCelular);
            li.appendChild(pEmail);

            
            ul.appendChild(li);
        });

    } catch (error) {
        console.log(error);
    }
    
}

async function listaGrupos(){
    var ul = document.getElementById("grupo");
    try {
        var contatos = await fetch("http://localhost:8888/api/lista/grupos"); 
        contatos = await contatos.json();

        contatos.data.forEach(grupo => {
            var li = document.createElement("li");

            var pID = document.createElement("p");
            var pNome = document.createElement("p");
           
            li.classList.add("list-group-item");
            
            pNome.innerHTML = `Nome: ${grupo.nomeGrupo}`;
            pID.innerHTML = `ID: ${grupo.id}`;
           
            li.appendChild(pNome);
            li.appendChild(pID);

            ul.appendChild(li);
        });

    } catch (error) {
        console.log(error);
    }
    
}


async function listaEventos(){
    var ul = document.getElementById("evento");
    try {
        var contatos = await fetch("http://localhost:8888/api/lista/eventos"); 
        contatos = await contatos.json();

        contatos.data.forEach(evento => {
            var li = document.createElement("li");

            var pID = document.createElement("p");
            var pNome = document.createElement("p");
            var pData = document.createElement("p");
            var pHora = document.createElement("p");


           
            li.classList.add("list-group-item");
            
            pNome.innerHTML = `Nome: ${evento.nomeEvento}`;
            pID.innerHTML = `ID: ${evento.id}`;
            pData.innerHTML = `Data: ${evento.dataEvento}`;
            pHora.innerHTML = `Hora: ${evento.hora}`;
            
           
            li.appendChild(pNome);
            li.appendChild(pID);
            li.appendChild(pData);
            li.appendChild(pHora);


            ul.appendChild(li);
        });

    } catch (error) {
        console.log(error);
    }
    
}




//--------------------------------------------------------------------------------------------//
//Funções de criação

async function criaContato(){
    var obj = Array.from(document.querySelectorAll('#formContato input')).reduce((acc, input) => ({
        ...acc, [input.id]: input.value }), {});
    obj.cpf = parseInt(obj.cpf);
    obj.celular = parseInt(obj.celular);
    console.log(JSON.stringify(obj));
    try {
        await fetch('http://localhost:8888/api/novoContato', 
        {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(obj)
        });
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}



async function criaGrupo(){
    var obj = Array.from(document.querySelectorAll('#formGrupo input')).reduce((acc, input) => ({
        ...acc, [input.id]: input.value }), {});
    obj.id = parseInt(obj.id);
    try {
        await fetch('http://localhost:8888/api/novoGrupo', 
        {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(obj)
        });
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
   
}

async function criaEvento(){
    var obj = Array.from(document.querySelectorAll('#formEvento input')).reduce((acc, input) => ({
        ...acc, [input.id]: input.value }), {});
    obj.id = parseInt(obj.id);
    try {
        await fetch('http://localhost:8888/api/novoEvento', 
        {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(obj)
        });
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
   
}