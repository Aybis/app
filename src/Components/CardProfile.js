import React from 'react'
import { BarChart2, FileText, User } from 'react-feather';
import { Link } from 'react-router-dom';
import PersonSVG from '../assets/svg/person.svg';


function CardProfile () {
    return (

        <div className="bg-white text-gray-600 rounded-lg shadow-lg p-8 ease-in-out duration-500">
        <img alt="person" src={PersonSVG} className="h-32 w-32 bg-indigo-50 rounded-full object-cover  mx-auto" /> 
        
        <div className="text-center  p-2">
            <h4 className="font-medium to-gray-800 ">Abdul Muchtar Astria</h4>
            <p className=" text-xs text-gray-300">abdul.muchtar@pins.co.id</p>
        </div>
        <div className="flex justify-evenly gap-8 text-center text-sm mt-10">
        <div className="">
              <h4 className="text-gray-300">Unit</h4>
              <h4 className="text-gray-700 font-medium">Operation & Regional</h4>
          </div>
          <div className="h-12 border border-gray-100"></div>
          <div className="text-center">
              <h4 className="text-gray-300">Sub Unit</h4>
              <h4 className="text-gray-700 font-medium">IT Management & Support</h4>
          </div>
        </div>
        
        <div className="grid grid-cols-3 text-center mt-10 items-center">
            <Link to="/" className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-700 duration-500">
                <BarChart2 className="h-10 w-10 p-2 rounded-full bg-indigo-500 hover:bg-indigo-600 duration-500 text-white" />
                <p className="text-xs font-light ">Dashboard</p>
            </Link>
            <Link to="/" className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-700 duration-500">
                {/* <img alt="avatar" src={PersonSVG} className="h-10 w-10 object-cover" />  */}
                <User className="h-10 w-10 p-2 rounded-full bg-green-500 hover:bg-green-600 duration-500 text-white" />
                <p className="text-xs font-light">Me</p>
            </Link>
            <Link to="/" className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-700 duration-500">
                <FileText className="h-10 w-10 p-2 rounded-full bg-blue-500 hover:bg-blue-600 duration-500 text-white" />
                <p className="text-xs font-light">Report</p>
            </Link>
            
        </div>
    </div>
    )
}

export default CardProfile;