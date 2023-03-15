import Navbar from "./mNav"

export const Team = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    }
  ];

  const mTeam = () => {
    return(
      <div>
          <Navbar />
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Postion</th>
          <th>Date of Hire</th>
        </tr>
        <tr>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
          <td>Cashier</td>
          <td>07/25/2015</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
          <td>Cashier</td>
          <td>03/14/2015</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
          <td>Janitor</td>
          <td>10/28/2005</td>
        </tr>
      </table>
    </div>
    )

}
  
export default mTeam