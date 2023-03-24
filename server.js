const client = require('./connection');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(5000, () => {
    console.log("listening on http://localhost:5000")
})
app.post('/login', (req,res) => {
    let employeeid = req.body.userid;
    if(employeeid) {
        let postQuery = `Select * FROM employee WHERE id = ${employeeid}`
        client.query(postQuery, (err, result) => {
            let person = result.rows;
            // console.log(person)
            if(person.length > 0){
                for( let i = 0; i < person.length; i++) {
                    if(person[i].id == employeeid){
                        req.session.loggedin = true;
                        req.session.employeeid = employeeid;
                        // console.log(req.session.employeeid)
                        res.send(person);
                    }else{
                        res.send("That didn't work");
                    }
                }
            }
        })
    }else{
        res.send("please enter an id")
        res.end();
    }
});

// app.get('/ePTO', (req ,res) => {
//     let employeeid = req.session.employeeid;
//     if(employeeid){
//         let getQuery = `Select * FROM employee WHERE id = ${employeeid}`
//         client.query(getQuery, (err, results) => {
//             let employee = results.rows
//             console.log(employee)
//             if (employee.length > 0){
//                 for (let i = 0; i < employee.length; i++){
//                     if (employee[i].id === employeeid){
//                         res.send(employee)
//                     }else{
//                         res.send("didn't work");
//                     }
//                 }
//             }
//         })
//     }else{
//         res.send("please enter an id");
//         res.end();
//     }
    // let employee = req.session.employeeid;
    // let getQuery = `Select * FROM employee WHERE id = ${employee}`
    // // let getQuery = `Select * FROM employee`
    // client.query(getQuery, (err, res) =>{
    //     let per = res.rows
    //     console.log(per)
    //     if(per.length > 0){
    //         for( let i = 0; i < per.length; i++) {
    //             if(per[i].id == employee){
    //                 res.send(per)
    //             }else{
    //                 res.send("That didn't work");
    //             }
    //         }
    //     }
    // });
    // client.end;
// })
// app.get('/users', (req, res) => {
//     client.query(`Select * from employee where id = 259200 `, (err, result) => {
//         if(!err){
//             res.send(result.rows);
//         }
//     });
//     client.end;
// })

client.connect();