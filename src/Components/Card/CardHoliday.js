import React from 'react';
import HolidaySVG from '../../assets/svg/holiday-1.svg';

function CardHoliday () {
    return (

        <div className="bg-white text-gray-600 rounded-lg shadow-lg p-8 ease-in-out duration-500 text-center">
        <img alt="person" src={HolidaySVG} className=" object-cover " /> 
        <h4 className="font-medium to-gray-800 mt-10">Abdul Muchtar Astria</h4>
     
    </div>
    )
}

export default CardHoliday;