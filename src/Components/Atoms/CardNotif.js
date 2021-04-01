import React from 'react'
import { AlertCircle } from 'react-feather'

function CardNotif() {

    return(
        <div className="border-2 border-coolGray-100 rounded-lg flex gap-4 px-3 py-2">
            <AlertCircle className="h-12 w-12 p-3 text-red-600 bg-red-200 bg-opacity-40 rounded-lg" />
            <div>
                <h4 className="font-bold text-sm tracking-wide">Check Out</h4>
                <p className="text-xs font-medium text-gray-300">Tuesday, 16 March 2021 - 17:21</p>
            </div>
            {/* <p className="text-tiny font-extralight">Yesterday</p> */}
        </div>
    )
}

export default CardNotif;