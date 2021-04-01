import React from 'react'
import { MoreVertical, Slack } from 'react-feather'

function CardStatus () {

    return(
        // <div className="bg-white p-4 rounded-lg " style={{ boxShadow:'0 25px 50px -12px rgba(255, 204, 102, 0.25)' }}>
        <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center">
                <div className="bg-gradient-to-br bg-yellow-300 rounded-full " style={{ boxShadow:'0 10px 15px -3px rgba(255, 170, 0, 0.25), 0 4px 6px -2px rgba(255, 170, 0, 0.25)' }} >
                    <Slack className="w-14 h-14 text-white p-3" />
                </div>
                <MoreVertical />
            </div>
            <h3 className="mt-6 text-sm font-medium">Lorem Ipsum</h3>
            <h1 className="mt-4 text-4xl font-semibold text-red-400">24</h1>
            <p className="-mt-2 font-medium text-sm text-gray-400">Days</p>
        </div>
    )
}

export default CardStatus;