import Navbar from "./mNav"
import {useEffect, useState} from "react";
import "../css/tablestyles.css"

function MangerEQ(){
  const [team, setTeams] = useState([]);
  useEffect(() => {
    fetch("/mEQ").then(
        response => response.json()
    ).then(
        data => {
          JSON.stringify(data)
          console.log(data)
          setTeams(data)
        }
    )
  },[])
  console.log(team);
  const list = [];
  for (let i in team){
      list.push(
          // <div key={i}>
          //     <div> ID: {team[i].id}</div>
          // </div>
          <tr key={i}>
              <td className="data">{team[i].employee_id}</td>
              <td className="data">{team[i].ptype}</td>
              <td className="data">{team[i].start_date.slice(0,10)}</td>
              <td className="data">{team[i].end_date.slice(0,10)}</td>
              <td className="data">{team[i].reasons}</td>
              <td className="data">{team[i].status}</td>
              <td><button>Approve</button><button>Deny</button></td>
          </tr>
      )
  }
  return(
      <div>
          <Navbar />
          <h1 className="header-title">Employee's Requests</h1>
          <br/>
          {/*{list}*/}
          <table border="2">
              <thead>
                  <tr>
                      <th className="head">ID</th>
                      <th className="head">PTO Type</th>
                      <th className="head">Start</th>
                      <th className="head">End</th>
                      <th className="head">Reason</th>
                      <th className="head">Status</th>
                      <th className="head">Approve/Deny</th>

                  </tr>
              </thead>
              <tbody>
                    {list}
              </tbody>
          </table>
      </div>
  )
}
export default MangerEQ;