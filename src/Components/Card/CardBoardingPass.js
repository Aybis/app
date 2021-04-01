import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';
import ListAttendance from '../Atoms/ListAttendance';


function CardBoardingPass() {

    const [isShow, setIsShow] = useState(true)

    const onClickShowHideData =() =>{
        setIsShow(!isShow);
    }

    const ListData = () => {
    
        let data = [];
    
        for (let index = 1; index < 10; index++) {
            data.push(<ListAttendance key={index} date={index} month="March" />)
        }

        return data;
    }

    return (
        <div className="lg:col-span-2 max-h-full">
            <div className="bg-emerald-500 py-2 flex items-center justify-between rounded-lg text-white text-sm px-8">
                <h4>
                    Attendants this March
                </h4>
                <ChevronDown className={`${isShow ? 'rotate-0': 'rotate-180'} transform ease-in-out duration-500 cursor-pointer`} onClick={onClickShowHideData} />

            </div>
            <div className={`${isShow ? 'max-h-96 p-4 ' : 'max-h-0'}  ease-in-out duration-500 flex flex-col gap-8 mt-4 scroll-hidden overflow-y-auto`}>
                <ListData />
            </div>
        </div>
    )
}

export default CardBoardingPass;