import React from 'react'


function CardHistory() {
    return (
        <div className="flex flex-col rounded-lg bg-blue-100 bg-opacity-50">
            <div className="flex justify-between items-center px-4 py-2 text-blue-600">
                <h1 className="font-semibold text-lg">3-14</h1>
                <h4 className="text-xs font-bold">WFH</h4>
            </div>
    
            <div className="flex justify-between pb-2 px-4 ">
                <div className="w-full flex flex-col items-center">
                    <p className="text-sm font-regular text-gray-400">Status</p>
                    <p className="font-semibold text-coolGray-800">Sehat</p>
                </div>
                <div className="w-full flex flex-col items-center">
                    <p className="text-sm font-regular text-gray-400">Check In</p>
                    <p className="font-semibold text-coolGray-800">07:20</p>
                </div>
                <div className="w-full flex flex-col items-center">
                    <p className="text-sm font-regular text-gray-400">Check Out</p>
                    <p className="font-semibold text-coolGray-800">17:20</p>
                </div>
            </div>
        </div>
    )
}

export default CardHistory;