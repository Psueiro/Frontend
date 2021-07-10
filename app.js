const mysql = require('mysql2');


// const connection = mysql.createConnection(config.mysql);

// connection.connect((error) =>{
//     if(error){
//         console.error(error);
//         process.exit();
//     }
//     console.log("aaaaaa")
// });


var connection = mysql.createConnection(
    {
        host: '000webhost.com',
        user: 'id17201801_root',
        password:'Poncho11111-',
        database: 'id17201801_lilaplata'
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

connection.query('select * from products', function (error, results)
{
    if(error){
        console.log('sale otro error' + error.stack)
    } 

    results.forEach(result => {
        console.log(result);
    });
});