const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
//var router = express.Router();
const port = 1337;
let connection = null;
//npm install mysql cors express node
function Connect_Mysql() {//mysql 연결 
    
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'fenpon',
        password: '0711',
        database: 'teddy_db'
    });
    connection.connect();
}
let Data;

app.use(cors());//cors 정책 헤더 설정 Access-Control-Allow-Origin 설정
/*
app.get('/users/:name', (req, res) => {
  return  res.json(users);
});
*/
app.get('/operation', (req, res) => {//메인 
    Connect_Mysql();
    connection.query('SELECT * from operation', (error, rows, fields) => {
        if (error) throw error;
        Data = rows[0];
       
        //console.log('User info is: ', rows);
    });
    return   res.json(Data);
});

let Get_Doll_Data = {};
app.get('/Get_Doll', (req, res) => {//인형 목록
    Connect_Mysql();
    
    
    connection.query('SELECT * from doll', (error, rows, fields) => {
        if (error) throw error;
        //Get_Doll_Data = { };
        for (var row in rows) {
            console.log('T ', row);
            let key = rows[row].id;
            Get_Doll_Data[key] = rows[row];
            //let next_query = 'SELECT * from \'' + key + '\'';
            connection.query('SELECT * from '+key+'', (error2, rows2, fields2) => {
                if (error2) throw error2;
                //Get_Doll_Data = { };
                let key2 = rows2[0]._Name;
                Get_Doll_Data[key2]["arr"] = rows2;
               
                // console.log('T ', Get_Doll_Data);
            });
        }
        
       // console.log('T ', Get_Doll_Data);
    });
    console.log(Get_Doll_Data);
    return res.json(Get_Doll_Data);
});

app.listen(port, function () { // port변수를 이용하여 3000번 포트에 node.js 서버를 연결합니다.
    console.log('server on! http://localhost:' + port); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});


