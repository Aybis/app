import React, { useState } from 'react';
import { LogOut } from 'react-feather';
import { Link } from 'react-router-dom';
import Kalender from '../Components/Kalender';
import CardBoarding from './Atoms/CardBoarding';
import CardBoarding2 from './Atoms/CardBoarding2';
import CardMap from './Atoms/CardMaps';
import CardSmall from './Atoms/CardSmall';
import ReportUser from './Atoms/ReportUser';
import AvatarSvg from '../assets/png/avatar.png';

function AsideUser({location, address, isReady}) {

    const [isShow, setIsShow] = useState(false);

    setTimeout(() => {
        setIsShow(true)
    }, 500);

    return(
        <aside className={`hidden ${isShow ? 'w-1/5' : 'w-0'} duration-300 flex-shrink-0 right-0  bg-white xl:block z-10`}>
            <div className="h-screen w-1/5 fixed overflow-auto">

                <div className="flex items-center justify-between p-4 mt-4">
                    <div className="flex gap-2">
                        <span className="h-12 w-12 rounded-lg border border-gray-200  flex items-center justify-center">
                            <img src={AvatarSvg} alt="avatar" />
                        </span>
                        <div className="text-sm">
                            <p className="font-semibold">Abdul Muchtar Astria</p>
                            <p className="font-light text-gray-400">IT Management</p>
                        </div>
                    </div>
                    <Link to="/" className="inline-flex gap-1 text-gray-400 font-medium text-sm hover:text-gray-800 ease-in-out duration-300 items-center" title="Logout">
                            <LogOut className="h-5 w-5"  /> 
                    </Link>
                </div>

                { location && 
                    <CardMap status="Sehat" inTime="07:21" geoAddress={address} geoTag={location} />
                }
                <CardBoarding isHidden={false} inTime="07:21" workType="WFO" inLocation="Jakarta" status="Sehat"  />
                <ReportUser />

                <CardBoarding2 isHidden />
                
                <Kalender />

                <CardSmall />


            </div>
        </aside> 


    )
}

export default AsideUser;
