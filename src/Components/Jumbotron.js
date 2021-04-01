import React from 'react'
import { ArrowDown } from 'react-feather';
import BG from '../assets/png/bg7.jpeg';


function Jumbotron({address, isReady}) {

    return(
        <div className={`flex flex-row ${isReady? 'opacity-100' : 'opacity-0'}`}>
        <img alt="img" src={BG}  className="h-96 w-full object-cover rounded-2xl" />

        <div className="bg-black bg-opacity-50 h-96 w-full rounded-2xl p-4" style={{ marginLeft:'-100%' }}>
            <div className="flex h-full gap-4 items-center">
                <div className="flex flex-col w-2/3 gap-8">
                    <div>
                        <h1 className="text-5xl text-white">Ex fugiat aliquip veniam ex ex. </h1>
                        <h1 className="text-3xl text-white"><span className="text-red-700 font-semibold">Reprehenderit</span> tempor in incididunt . </h1>
                    </div>
                    <p className="text-gray-300">
                        Reprehenderit tempor in incididunt officia ullamco aliqua duis mollit ullamco ut ex irure. Incididunt id laborum reprehenderit adipisicing commodo nisi eiusmod amet ad ad cillum. Consectetur sint velit pariatur culpa mollit duis Lorem adipisicing.
                    </p>
                    <div className="flex gap-4">    
                        <button className="mt-6 border border-gray-400 p-2 font-bold text-gray-300 w-36 rounded-lg disabled:opacity-40" disabled>Check In</button>
                        <div className="flex flex-col items-center gap-2">
                            <ArrowDown className="h-4 w-4 text-gray-200 animate-bounce" />
                            <button className="bg-red-700 p-4 font-bold text-white w-36 rounded-lg hover:bg-red-800 duration-300">Check Out</button>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-400 h-2/3">

                </div>

                <div className="grid grid-cols-2 grid-rows-2 w-1/3 gap-6 items-center">
                    <div className="text-left font-medium">
                        <p className="text-gray-400 ">Date</p>
                        <p className="text-gray-200">20 March 2021</p>
                    </div>
                    <div className="text-left font-medium">
                        <p className="text-gray-400 ">Time</p>
                        <p className="text-gray-200">07:23:57 AM</p>
                    </div>
                    <div className="text-left font-medium">
                        <p className="text-gray-400 ">Location In</p>
                        <p className="text-gray-200">{address}</p>
                    </div>
                    <div className="text-left font-medium">
                        <p className="text-gray-400 ">Location Out</p>
                        <p className="text-gray-200">-</p>
                    </div>
                   
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Jumbotron;