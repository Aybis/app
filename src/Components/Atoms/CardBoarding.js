import React from 'react';
import { Globe } from 'react-feather';
import { Link } from 'react-router-dom';

function CardBoarding ({isHidden=true, inTime="--:--", outTime="--:--", status="-", inLocation="-", outLocation="-", workType="-"}) {

    

    return (
        <section className={`bg-coolGray-50 rounded-lg m-4 font-body py-4 text-center ${isHidden ? 'hidden':'display'}`}>
        <div className="flex flex-row items-start justify-between p-4 text-indigo-600">
            <div className="w-72 flex flex-col items-center">
                <h1 className="text-xl font-extralight " >
                    IN
                </h1>
                <h4 className="font-semibold ">Home</h4>
                <h4 className="text-sm font-normal text-gray-600">{inTime}</h4>
            </div>
            <hr className="border border-gray-300 border-dashed h-0 rounded-full w-full mt-4" />
            <Globe className="h-20 w-20 -mt-6 m-1 text-indigo-500" />
            <hr className="border border-gray-300 border-dashed h-0 rounded-full w-full mt-4" />

            <div className="w-72 flex flex-col items-center">
                <h1 className="text-xl font-extralight ">
                    OUT
                </h1>
                <h4 className="font-semibold">{workType}</h4>
                <h4 className="text-sm font-normal text-gray-600">{outTime}</h4>
            </div>
        </div>
        <h2 className="text-center font-medium text-gray-600">Thursday, 18 Mar 2021</h2>

        <div className="grid grid-cols-3 grid-rows-2 bg-white rounded-md m-4 gap-4 p-4">
            <div className="flex flex-col items-center">
                <p className="font-light text-gray-400 text-xs">Departure</p>
                <p className="font-medium text-gray-800 text-sm">-</p>
            </div>
            <div className="flex flex-col items-center row-span-2 justify-center ">
                <p className="font-light text-gray-400 text-xs">Status</p>
                <p className="font-medium text-gray-800 ">{status}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-light text-gray-400 text-xs">Arrival</p>
                <p className="font-medium text-gray-800 text-sm">-</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-light text-gray-400 text-xs">Location</p>
                <p className="font-medium text-gray-800 text-sm">{inLocation}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-light text-gray-400 text-xs">Location</p>
                <p className="font-medium text-gray-800 text-sm">{outLocation}</p>
            </div>
        </div>

        <div className="flex flex-row items-center justify-between -mx-2">
            <div className="h-5 w-5 rounded-full bg-white"></div>
            <hr  className="border-dashed w-full h-0"/>
            <div className="h-5 w-5 rounded-full bg-white"></div>
        </div>
        <div className="flex items-center justify-center pt-2">
            <Link to="/" className="text-xs font-regular font-body text-blue-700 hover:text-blue-500">More Detail</Link>
        </div>

    </section>
    )
}

export default CardBoarding;