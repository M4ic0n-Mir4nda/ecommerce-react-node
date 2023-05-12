let Sequelize = require('sequelize'); 
//instancia de conexão ao banco de dados 
let sequelize = new Sequelize('aut_db_me','root','root', {
    host: '192.168.1.240',
    port: '30000',
    dialect: 'mysql'
})
//conexão estabelecida ou não 
sequelize.authenticate().then(function(){
    console.log("conexão estabelecida!");
}).catch(function(erro){
    console.log("conexão falha! "+erro);
})