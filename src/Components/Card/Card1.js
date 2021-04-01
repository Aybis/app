import React from 'react'
import { Map } from 'react-feather';


function Card1() {
    return (
        <div className="bg-white flex flex-col rounded-lg shadow-lg">
            <div className="flex gap-8 p-4">
                <Map className="h-16 w-16 p-5 rounded-lg bg-indigo-500 text-white" />
                <div>
                    <p className="text-gray-500">Lorem Ipsum</p>
                    <p className="text-gray-800 font-bold text-2xl">24 <small className="text-gray-500 text-sm font-medium">days</small></p> 
                </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg">
                <p className="text-indigo-600">View all</p>
            </div>
        </div>
    )
}

export default Card1;