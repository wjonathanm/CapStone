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
        // let getQuery2 = `Select * From holiday`
        // client.query(getQuery2, (err, resp) => {
        //     if(!err){
        //         // console.log(resp.rows)
        //         res.send(resp.rows)
        //     }
        // });
        // client.end;
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
app.get('/mEQ', (req, res) => {
    let eid = req.session.employeeid;
    let getQuery = `Select * From requests Where leader_id = '${eid}'`
    client.query(getQuery, (err, resp) => {
        if (!err){
            console.log(resp)
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
        let insertQuery = `INSERT INTO requests(employee_id,leader_id,ptype,reasons,start_date,end_date,status)VALUES('${eid}','${lid}','${ptype}','${reason}','${sDate}','${eDate}','pending')`
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
    let role = req.body.role;
    let insertQuery = `Insert INTO employee(id,firstname,lastname,email,hiredate, leaderid, role, ptobalancevacation, ptobalancepersonal,ptobalancesick)Values('${eid}', '${fname}', '${lname}', '${email}', '2023-4-8', '12345', '${role}', '0', '0', '0')`
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
                    holiday_name: row.holiday_name,
                    holiday_date: row.holiday_date
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
app.post('/administratorSetHoliday', (req, res) => {
    const { holiday_name, holiday_date } = req.body;
    const addQuery = `INSERT INTO holiday (holiday_name, holiday_date) VALUES ($1, $2) RETURNING *`;
    const values = [holiday_name, holiday_date];
    client.query(addQuery, values, (err, resp) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error adding holiday');
        } else {
            const newHoliday = {
                holiday_name: resp.rows[0].holiday_name,
                holiday_date: resp.rows[0].holiday_date
            };
            console.log(`Added holiday: ${JSON.stringify(newHoliday)}`);
            res.json(newHoliday);
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


app.get('/administratorModifyRequests', (req, res) => {
    let getQuery = `SELECT request_id, employee_id, leader_id, ptype, reasons, start_date, end_date, request_date FROM requests`;
    client.query(getQuery, (err, resp) => {
        if (!err) {
            const requests = resp.rows.map(row => {
                return {
                    request_id: row.request_id,
                    employee_id: row.employee_id,
                    leader_id: row.leader_id,
                    ptype:row.ptype,
                    reasons: row.reasons,
                    start_date: row.start_date,
                    end_date: row.end_date,
                    request_date: row.request_date
                };
            });
            console.log(requests);
            res.json(requests);
        } else {
            console.error(err);
            res.status(500).send('Error retrieving employees');
        }
    });
});
app.put('/administratorModifyRequests/:request_id', (req, res) => {
    const { request_id } = req.params;
    const { employee_id, leader_id, ptype, reasons, start_date, end_date, request_date } = req.body;
    const updateQuery = `UPDATE requests SET employee_id = $1, leader_id = $2, ptype = $3, reasons = $4, start_date = $5, end_date = $6, request_date = $7 WHERE request_id = $8`;
    const values = [employee_id, leader_id, ptype, reasons, start_date, end_date, request_date, request_id];
    client.query(updateQuery, values, (err, resp) => {
        if (!err) {
            res.sendStatus(204); // return 204 No Content status code to indicate success
        } else {
            console.error(err);
            res.status(500).send('Error updating request');
        }
    });
});
app.delete('/administratorModifyRequests/:request_id', (req, res) => {
    const { request_id } = req.params;

    const deleteQuery = ` DELETE FROM requests WHERE request_id = $1 `;
    const values = [request_id];

    client.query(deleteQuery, values, (err, resp) => {
        if (!err) {
            res.sendStatus(204); // return 204 No Content status code to indicate success
        } else {
            console.error(err);
            res.status(500).send('Error deleting request');
        }
    });
});
app.get('/employeeRequest', (req, res) => {
    let eid = req.session.employeeid
    if (eid){
    let getQuery = 'Select * FROM requests Where leader_id = ${eid}' //Manager's ID = Employees leaderID
    client.query(getQuery, (err, resp) => {
        if (!err) {
            console.log(resp.rows)
            res.send(resp.rows)
        }
    });
    client.end;
}
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