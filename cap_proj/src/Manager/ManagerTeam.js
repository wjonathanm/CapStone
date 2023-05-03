import Navbar from "./mNav"
import {useEffect, useState} from "react";
import "../css/tablestyles.css"

function ManagerTeam(){
  const [team, setTeams] = useState([]);
  useEffect(() => {
    fetch("/mTeam").then(
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
              <td className="data">{team[i].id}</td>
              <td className="data">{team[i].firstname} {team[i].lastname}</td>
              <td className="data">{team[i].email}</td>
              <td className="data">{team[i].hiredate.slice(0,10)}</td>

          </tr>
      )
  }
  return(
    
      <div>
          <Navbar />
          <h1 className="header-title">Team Home Page</h1>
          <br/>
          {/*{list}*/}
          <table border="2">
              <thead>
                  <tr>
                      <th className="head">ID</th>
                      <th className="head">Name</th>
                      <th className="head">Email</th>
                      <th className="head">Hire Date</th>

                  </tr>
              </thead>
              <tbody>
                    {list}
              </tbody>
          </table>
      </div>
  )
}
export default ManagerTeam;