import React from 'react';
import { ArrowRight } from 'react-feather';
import CardNotif from './CardNotif';


function CardSmall () {
    return (
        <section className="m-4 pb-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h4 className="font-bold text-sm text-gray-800">Recent Activity</h4>
                <ArrowRight className="h-3 w-3 text-gray-400" />
            </div>
            <CardNotif />
            <CardNotif />
            <CardNotif />
        </section>
    )
}

export default CardSmall;