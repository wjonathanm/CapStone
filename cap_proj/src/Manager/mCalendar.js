import Navbar from "./mNav";
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
         <Navbar />
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
    

 
export default MyApp;