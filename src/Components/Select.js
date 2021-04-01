import React, { useState } from 'react';
import { ChevronUp } from 'react-feather';

const Select = ({label, listData}) => {

    const [isShow, setIsShow] = useState(false);
    const [value, setValue] = useState(null);
    

    const showData = () => {
        setIsShow(!isShow);
    }

    const removeValueSelected = () => {
        setValue(null);
    }

    const selectData = (e, data) => {
        setIsShow(!isShow)
        setValue(data.name);
    }

 

    return( 
       
    <div className="flex flex-col items-center h-64 mt-12">
        <div className="flex flex-col items-center relative">
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded w-auto">
                    <div className="flex flex-auto flex-wrap"></div>
                    <span className="p-1 px-2 text-gray-800 appearance-none w-auto">
                        {value ? value : `Pilih ${label}`}
                    </span>
                    
                    {value && (
                        <div>
                          <button className="cursor-pointer w-6 h-full flex items-center text-gray-400 outline-none focus:outline-none" onClick={removeValueSelected}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x w-4 h-4">
                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                          </button>
                        </div>
                    )}
                  
                    <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                        <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none" onClick={showData}>
                           <ChevronUp className={`${isShow ? 'rotate-0': 'rotate-180'} transform duration-300 ease-in-out`} />
                        </button>
                    </div>
                </div>


                <div className={`${isShow ? "absolute " : ' opacity-0'} transition duration-300 ease-in-out  shadow z-40  lef-0 rounded  overflow-y-auto`} style={{ top:"100%", maxHeight: "300px" }}>
                    <div className="flex flex-col">

                    {listData && listData.map((data, index) => {
                        return (
                            <div 
                                key={index} 
                                className="cursor-pointer border-gray-100 border-b hover:bg-teal-100 w-auto"
                                onClick={((index) => selectData(index, data))}>
                                {data.name === value }
                                <div 
                                    className={`${data.name === value && 'border-l-2'} flex items-center p-2  border-transparent bg-white relative hover:bg-teal-600 hover:text-teal-100 border-teal-600`} >
                                    <span className="items-center flex px-2">
                                        {data.name}
                                    </span>
                                </div>
                            </div>
                        )
                    })}


                      
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Select;