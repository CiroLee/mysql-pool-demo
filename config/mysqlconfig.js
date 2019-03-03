const mysql = require('mysql');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'yiibaidb'
});

//方法1
// exports.query = function(sql,callback){
//     pool.getConnection(function(err,connection){
//         connection.query(sql,function(error,results,fields){
//             connection.release();
//             if(error) throw error;
//             callback && callback(results,fields);
//         })
//     })
// }
function sqlQuery(sql){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err){
                resolve(err);
                return;
            }
            connection.query(sql,(error,result)=>{
                if(error){
                    reject(error);
                }
                else{
                    resolve(result)
                }
                connection.release();
            });
        })
    });
}

module.exports = sqlQuery;