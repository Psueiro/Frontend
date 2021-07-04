
const os = require('os');

console.log('sistema operativo: ' + os.platform());
console.log('version sistema operativo: ' + os.release());

var mysql = require('mysql2');

var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:'1158025575',
        database: 'utn'
    }
)

connection.connect(function (error) 
{
    if(error){
        console.log('sale error' + error.stack);
        return;
    }
    console.log('success');
});

connection.query('select * from empleado', function (error, results)
{
    if(error){
        console.log('sale otro error' + error.stack)
    }
    
    results.forEach(result => {
        console.log(result);
    });
});