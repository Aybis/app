import React from 'react'
import { ChevronRight, Clock } from 'react-feather'


function ListAttendance ({date, month, timeIn, timeOut, address }) {

    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center ">
        <div className="text-center text-gray-500">
            <h2 className="font-medium text-xl">{date}</h2>
            <h4 className="font-light">{month}</h4>
        </div>
        <div className="border border-dashed border-gray-200 h-16 lg:ml-4"></div>
        <div className="flex flex-col lg:hidden">
            <h4 className="font-medium text-gray-700">WFH</h4>
                <span className="flex flex-row items-center gap-2 text-sm font-light text-gray-400">
                    <Clock className="h-4 w-4" /> 
                    <p>07 : 45</p>
                    <p>-</p>
                    <p>17 : 45</p>
                </span>
        </div>
        <div className="lg:flex flex-row gap-8 px-2 hidden text-gray-700">
            <div className="flex flex-col gap-2 items-end">
                <h4 className="text-sm font-medium">07:45 - IN </h4>
                <p className="text-xs font-normal text-right text-gray-400">Jalan Gatot Subroto, No.Kav 52, Kuningan Barat, Kecamatan Mampang Prapatan</p>
                
            </div>
            <div className="flex flex-col items-start gap-2">
                <h4 className="text-sm font-medium">OUT - 17:24</h4>
                <p className="text-xs font-normal text-gray-400 text-left">Jalan Gatot Subroto, No.Kav 52, Kuningan Barat, Kecamatan Mampang Prapatan</p>
                
            </div>
        </div>
        <ChevronRight className="text-gray-200 lg:h-10 lg:w-10 h-4 w-4 cursor-pointer" />
    </div>
    )
}

export default ListAttendance;