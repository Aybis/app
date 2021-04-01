import React from 'react'
import AvatarPng from '../../assets/png/avatar.png';

function ReportUser({isHidden=true}) {

    return(
        <div className={` flex-col items-center justify-center bg-white m-4 rounded-xl p-2 gap-6 ${isHidden ? 'hidden':'flex'}`}>
            <div className="flex h-32 rounded-full w-32 items-center justify-center">
                <img src={AvatarPng} alt="avatar" className="object-cover h-32 rounded-full w-32 bg-gray-900" /> 
            </div>
            <div>
                <p className="font-bold text-lg">Abdul Muchtar Astria</p>
                <p className="font-extralight text-gray-800">IT Management & Support</p>        
            </div>
            <div className="flex flex-col w-full gap-8 p-2 text-gray-900 rounded-lg ">
                <div className="flex flex-row items-center justify-between gap-2">
                    <div className="flex flex-col text-center gap-1 border-2 border-coolGray-100 rounded-lg w-1/3 p-1">
                        <p className="text-xs font-medium text-gray-700">Kehadiran</p>
                        <p className="font-bold text-xl">24</p>
                    </div>
                    <div className="flex flex-col text-center gap-1 border-2 border-coolGray-100 rounded-lg w-1/3 p-1">
                        <p className="text-xs font-medium text-gray-700 ">Terlambat</p>
                        <p className="font-bold text-xl">4</p>
                    </div>
                    <div className="flex flex-col text-center gap-1 border-2 border-coolGray-100 rounded-lg w-1/3 p-1">
                        <p className="text-xs font-medium text-gray-700">Absent</p>
                        <p className="font-bold text-xl">0</p>
                    </div>
                </div>
                {/* </div> <!-- End Report Presensi --> */}
            </div>
        </div>
    )
}

export default ReportUser;