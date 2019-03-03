
const express = require('express');
const app = express();
const sqlQuery = require('./config/mysqlconfig');
let PORT = process.env.PORT || '3000',
    IP   = process.env.IP || 'localhost';

//方法1调用
// app.get('/employees',function(req,res){
//     let sql = `select * from employees`;
//     db.query(sql,function(results,fields){
//         console.log(fields)
//         res.send(results);
//     })
// })

//方法2，promise异步调用
app.get('/employees',async function(req,res){
    let sql = 'select * from employees';
    let result = await sqlQuery(sql);
    console.log(result)

    res.send(result)
})

app.listen(PORT,IP,()=>{
    console.log('server is running on ' + IP + " " + PORT)
})
