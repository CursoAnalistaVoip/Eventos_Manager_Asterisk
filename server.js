const app = require ('express')();
const http = require ('http').createServer(app);
const asterikManager = require ('asterisk-manager');
const mongoose = require("mongoose");
const fs = require('fs');

//mongoose.connect("mongodb://localhost:27017/asterisk",{useNewUrlParser: true});

//mongoose.connection.on('connected',function(){
//console.log('MongoDB conectado!!!');
//});

let ami = asterikManager(5038, '127.0.0.1', 'zabbix', 'Senha1234');
ami.keepConnected(); // Esta opcao tenta reconectar no manager do Asterisk caso  perca a conexao 



ami.on("managerevent", async(evt) => {
  var miny = "### Eventos do Asterisk : \r\n "+Date()+" \r\n "+JSON.stringify(evt)+" \r\n \r\n \r\n"
        console.log("### Eventos de Registro de ramais : \r\n "+Date()+" \r\n "+JSON.stringify(evt)+" \r\n \r\n \r\n")

  
  fs.writeFile('arquivo.txt', miny , {enconding:'utf-8',flag: 'a'}, function (err) {
        //fs.writeFile('arquivo.txt', miny ,hoje, function (err) {
            if (err) throw err;
       console.log(Date())
          });

});


http.listen(7000, function() {

    console.log("App rodando na porta 7000")

})



