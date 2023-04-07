import Navbar from "./mNav"
import {useEffect, useState} from "react";

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
              <td>{team[i].id}</td>
              <td>{team[i].firstname} {team[i].lastname}</td>
              <td>{team[i].email}</td>
              <td>{team[i].hiredate}</td>

          </tr>
      )
  }
  return(
      <div>
          <Navbar />
          {/*{list}*/}
          <table border="2">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>email</th>
                      <th>Hire Date</th>

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