
import React, { useState } from 'react';
import { ArrowRightCircle } from 'react-feather';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


function CardMap({isHidden, inTime, outTime, status="-", geoTag, geoAddress}) {

    const [isShow, setIsShow] = useState(false);


    const StatusCheckIn = () => {
        if(inTime) {
            return <p className="font-semibold">{inTime}</p>            
        }else{
            return <button className="p-1 text-white bg-indigo-600 text-xs font-semibold rounded animate-pulse"> Check In</button>

        }
    }

    const StatusCheckOut = () => {
        if(outTime){
            return <p className="font-semibold">{outTime}</p>            
        }else {
            return <button className="p-1 text-white bg-indigo-600 text-xs font-semibold rounded animate-pulse"> Check Out</button>
        }
    }

    setTimeout(() => {
        setIsShow(true)
    }, 500);



    return(
        <section className={`m-4 rounded-lg my-8 ${isShow ? 'opacity-100' : 'opacity-0'} duration-500 ease-in-out`}>
        <p className="text-xs font-medium text-gray-400">Latest Presensi</p>
        <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-800">Check In</h1>
            <ArrowRightCircle className="h-4 w-4" />
        </div>
        <div className="grid mt-4">
            <div className="h-full rounded-lg">
            { geoTag && 
                <MapContainer center={[geoTag.lat, geoTag.lng]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[geoTag.lat, geoTag.lng]}>
                        <Popup className="bg-red-400">
                        {/* Jakarta Indonesia. <br /> <span onClick={()=>console.log('On click pokoknya')} className="cursor-pointer">Test </span> */}
                            {geoAddress}
                        </Popup>
                    </Marker>
                </MapContainer>
            }
            </div>
            <div className="flex flex-row gap-2 items-center text-center justify-between bg-coolGray-800 text-white px-4 mx-4 -mt-24 mb-4 z-10 rounded-xl">
                <div className="w-full flex flex-col gap-2">
                    <p className="text-sm font-light text-gray-300">Status</p>
                    <p className="font-semibold">{status}</p>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <p className="text-sm font-light text-gray-300">Departure</p>
                    <StatusCheckIn />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <p className="text-sm font-light text-gray-300">Arrival</p>
                    <StatusCheckOut />
                </div>
            </div>
        </div>
    </section>

    )
}

export default CardMap;