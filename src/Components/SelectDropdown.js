import React from 'react'


function SelectDropdown({listData, isShow, clickHandler, label, handlerSelectData, value}) {

    return (
        <div className="mt-4">
        <label id="listbox-label"  className="hidden text-sm font-medium text-gray-700">
            
        </label>

        <div  className="mt-1 relative">
            <button 
                type="button"  
                className="relative w-auto border border-inforekan-textSecondary border-opacity-30 rounded-md shadow-sm pl-3 pr-8 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                aria-haspopup="listbox" 
                aria-expanded="true" 
                aria-labelledby="listbox-label" 
                onClick={clickHandler}
                >
                <span  className="flex items-center gap-2">
                    {value ? value : `Pilih ${label}`}
                </span>
            
            <span  className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    {/* <!-- Heroicon name: solid/selector --> */}
                    <svg  className="h-5 w-5 text-gray-400 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>

            {isShow && (

            <ul 
                className={`${isShow ? ' opacity-100' : ' opacity-0'} absolute transition duration-150 ease-in-out  mt-1 w-auto bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}>
                    <li className="text-gray-900 cursor-pointer relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
                        onClick={((index) => handlerSelectData('All'))}

                        >
                        <span className="font-normal ml-3 block truncate">
                            All
                        </span>   
                    </li>
                {listData && 
                listData.map((data,index) => {
                    
                        return(
                            <li 
                                key={index} 
                                value={data}
                                className="text-gray-900 cursor-pointer relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white" 
                                onClick={((index) => handlerSelectData(data))}
                                >
                                    <span className="font-normal ml-3 block truncate">
                                        {data.name}
                                    </span>
                                    {(value === data.name) && 
                                    (
                                        <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4 ml-4">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    )}
                                
                            </li>
                            
                        )
                    }
                )
                }
            </ul>
            )}

        </div>

    </div>
    )
}

export default SelectDropdown