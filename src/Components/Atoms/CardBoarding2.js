import React from 'react'
import { Airplay, MapPin, Navigation } from 'react-feather';
import { Link } from 'react-router-dom';


function CardBoarding2({isHidden=true}) {
    
    return (
        <section className={`border-2 border-coolGray-100 rounded-lg m-4 ${isHidden? 'hidden':'display'}`}>
        <div className="flex flex-row items-center divide-x-2 divide-light-blue-400 px-2 py-4 font-body">
            <div className="w-1/2 p-2 flex flex-col">
                <div className="flex flex-row items-center gap-2">
                    <Navigation className=" bg-coolGray-50 fill-current rounded text-indigo-500 p-3 h-10 w-10" />
                    <div className="flex flex-col gap-0">
                        <h4 className="font-medium text-sm">Check In</h4>
                        <small className="font-light text-xs text-gray-400">Jan 30, 07:42</small>
                    </div>
                </div>
                <div className="border-l-2 border-dashed border-gray-200 h-16 ml-4 w-0" ></div>
                <div className="flex flex-row items-center gap-2">
                <MapPin className=" bg-coolGray-50  rounded text-indigo-500 p-3 h-10 w-10" />
                <div className="flex flex-col gap-0">
                <h4 className="font-medium text-sm">Check Out</h4>
                        <small className="font-light text-xs text-gray-400">Jan 30, 17:42</small>
                </div>
                </div>
            </div>
            <div className="w-1/2 p-2 flex flex-col items-center justify-center gap-4 font-body">
                <div className="flex flex-col items-center gap-1">
                    <Airplay className="w-6 h-6" />
                    <p className="font-semibold text-gray-900">WFH</p>
                </div>
                <div className="text-center flex flex-col">
                    <p className="text-xs font-extralight text-gray-400">Status :</p>
                    <p className="text-gray-900 text-sm font-medium"> Sehat</p>
                    <p className="text-xs font-extralight text-gray-400 mt-1">Kedatangan :</p>
                    <p className="text-gray-900 text-sm font-medium"> On Time</p>
                    

                    {/* <p className="text-xs font-light text-gray-300">Kedatangan : <span className="text-gray-900 font font-semibold">On Time</span></p> */}
                </div>
                {/* </div> */}
            </div>
            
        </div>
        <div className="flex flex-row items-center justify-between -mx-2">
            <div className="h-4 w-4 rounded-full bg-white border-r border-coolGray-100"></div>
            <hr  className="border-dashed w-full h-0"/>
            <div className="h-4 w-4 rounded-full bg-white border-l border-coolGray-100"></div>
        </div>
        <Link to="/" className="flex justify-center text-xs font-regular font-body text-blue-700 p-2 hover:text-blue-500">More Detail</Link>
    </section>
    )
}

export default CardBoarding2;