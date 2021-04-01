import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

function Kalender({isHidden = true}) {
  const [value, onChange] = useState(new Date());
//   const dateValue = [new Date(2020, 2, 11), new Date(2020, 2, 16)];

  return (
    <section className={`border-2 border-coolGray-100 m-4 rounded-lg  justify-center ${isHidden? 'hidden': 'flex'}`}>            
      <Calendar
        className="rounded-xl p-4 font-body w-full"
        onChange={onChange}
        value={value}
        showNavigation={true}
        onClickDay={(value, event) => alert('Clicked day', value)}
        />
      </section>
  );
}

export default Kalender;