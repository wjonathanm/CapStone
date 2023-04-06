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
app.get('/ePTO', (req, res) => {
    let eid = req.session.employeeid
    if (eid){
        let getQuery = `Select * From employee WHERE id = ${eid}`
        client.query(getQuery, (err, resp) => {
            if(!err){
                // console.log(resp.rows)
                res.send(resp.rows)
            }
        });
        client.end;
    }
})
app.post('/eRequest', (req, res) =>{
    let ptype = req.body.ptype;
    let sDate = req.body.sDate;
    let eDate = req.body.eDate;
    let reason = req.body.comment;
    let eid = req.session.employeeid;
    let lid = req.session.leaderid;
    console.log(ptype);
    console.log(sDate);
    console.log(eDate);
    console.log(reason);
    console.log(eid)
    console.log(lid)
    if(eid){
        let insertQuery = `INSERT INTO requests(employee_id,leader_id,ptype,reasons,start_date,end_date)VALUES('${eid}','${lid}','${ptype}','${reason}','${sDate}','${eDate}')`
        client.query( insertQuery, (err, result) => {
            if(!err){
                console.log("Success")
            }else{
                console.log(err)
            }
        })
    }

})
app.post('/login', (req,res) => {
    let employeeid = req.body.userid;
    if(employeeid) {
        let postQuery = `Select * FROM employee WHERE id = '${employeeid}'`
        client.query(postQuery, (err, result) => {
            let person = result.rows;
            if(person.length > 0){
                for( let i = 0; i < person.length; i++) {
                    if(person[i].id == employeeid){
                        req.session.loggedin = true;
                        req.session.employeeid = employeeid;
                        req.session.leaderid = person[i].leaderid;
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
app.get('/administratorHome', (req, res) => {
    let eid=555149
    if(eid) {
        let eid = req.session.employeeid
        if (eid){
        let getQuery = `Select * From employee WHERE id = ${eid}`
        client.query(getQuery, (err, resp) => {
            if (!err) {
                console.log(resp.rows)
                res.send(resp.rows)
            }
        });
        client.end;
    }
    }
})
app.get('/administratorSetHoliday', (req, res) => {
    let getQuery = `Select * From holiday`
    let holiday= ["Id"]
    holiday.forEach(text=>{
        id=

    })
        client.query(getQuery, (err, resp) => {
            if (!err) {
                //Do i need to set variables for each holidays here??
                console.log(resp.rows)
                res.send(resp.rows)
            }
        });
        client.end;

})
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