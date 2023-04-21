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
app.get('/mTeam', (req, res) => {
    let lid = req.session.leaderid;
    let getQuery = `Select * From employee Where leaderid = ${lid}`
    client.query(getQuery , (err, resp) => {
        if(!err){
            res.send(resp.rows)
        }else{
            console.log(err)
        }
    })
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
app.get('/eHistory', (req, res) => {
    let eid = req.session.employeeid;
    let getQuery = `SELECT * FROM requests WHERE employee_id = ${eid}`
    // let getQuery = `SELECT request_status.a, requests.b FROM (SELECT * from holiday) as x, (SELECT * FROM b) as y FROM requests WHERE employee_id = ${eid}`
    client.query(getQuery, (err,resp) => {
        if(!err){
            res.send(resp.rows);
        }else{
            console.log(err);
        }
    })
})
app.post('/signup', (req, res)=>{
    let eid = req.body.userid2;
    let email = req.body.email;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let insertQuery = `Insert INTO employee(id,firstname,lastname,email,hiredate, leaderid, role, ptobalancevacation, ptobalancepersonal,ptobalancesick)Values('${eid}', '${fname}', '${lname}', '${email}', '2023-4-8', '12345', 'Employee', '0', '0', '0')`
    client.query(insertQuery, (err, result) => {
        if (!err){
            console.log("Success")
        }else{
            console.log(err)
        }
    })
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
})
app.get('/administratorSetHoliday', (req, res) => {
    let getQuery = `SELECT * FROM holiday`;
    client.query(getQuery, (err, resp) => {
        if (!err) {
            const holidays = resp.rows.map(row => {
                return {
                    holiday_id: row.holiday_id,
                    hname: row.hname,
                    hdate: row.hdate
                };
            });
            console.log(holidays);
            res.json(holidays);
        } else {
            console.error(err);
            res.status(500).send('Error retrieving holidays');
        }
    });
});
app.get('/administratorCUser', (req, res) => {
    let getQuery = `SELECT id, firstname, lastname, email, hiredate, leaderid, role FROM employee`;
    client.query(getQuery, (err, resp) => {
        if (!err) {
            const employees = resp.rows.map(row => {
                return {
                    id: row.id,
                    firstname: row.firstname,
                    lastname: row.lastname,
                    email: row.email,
                    hiredate: row.hiredate,
                    leaderid: row.leaderid,
                    role: row.role
                };
            });
            console.log(employees);
            res.json(employees);
        } else {
            console.error(err);
            res.status(500).send('Error retrieving employees');
        }
    });
});


app.post('/administratorSetHoliday', (req, res) => {
    const { hname, hdate } = req.body;
    const addQuery = `INSERT INTO holiday (hname, hdate) VALUES ($1, $2) RETURNING *`;
    const values = [hname, hdate];
    client.query(addQuery, values, (err, resp) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error adding holiday');
        } else {
            const newHoliday = {
                holiday_id: resp.rows[0].holiday_id,
                hname: resp.rows[0].hname,
                hdate: resp.rows[0].hdate
            };
            console.log(`Added holiday: ${JSON.stringify(newHoliday)}`);
            res.json(newHoliday);
        }
    });
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