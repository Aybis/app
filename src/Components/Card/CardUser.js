import React from 'react';
import { Clipboard, Mail, MoreVertical, Phone, Send } from 'react-feather';
import { Link } from 'react-router-dom';
import Avatar2 from '../../assets/png/5.jpg';


function CardUser ({name, position, email}) {

    return(
        <div className="flex flex-col justify-between shadow-lg bg-white col-span-1 rounded-lg">
        <div className="flex flex-col">
            <div className="flex flex-row-reverse p-4">
                <MoreVertical className="h-5 w-5 text-gray-700 cursor-pointer" />
            </div>
            <div className="flex flex-col items-center -mt-4 p-4">
                <img alt="" src={Avatar2} className="h-32 w-32  rounded-full bg-inforekan-backgroundLight border-2  object-cover" />
                <div className="flex flex-col items-center gap-4 mt-4 text-center">
                    <h4 className=" font-semibold text-inforekan-header">{name}</h4>
                    <h6 className="text-xs font-semibold text-inforekan-text -mt-2">{email}</h6>
                </div>
                <div className="flex gap-4 mt-6">
                    <Link to="#" title="Preview">
                        <Clipboard className="h-4 w-4 text-indigo-500 cursor-pointer"/>
                    </Link>
                    <Link to="#" title="Facebook">
                        <Phone className="h-4 w-4 text-inforekan-primary" />
                    </Link>
                    <Link to="#" title="Instagram">
                        <Mail className="h-4 w-4 text-inforekan-info" />
                    </Link>
                    <Link to="#" title="Like">
                        <Send className="h-4 w-4 text-inforekan-success" />
                    </Link>
                </div>
            </div>
        </div>  
        <div className="bg-inforekan-cardFooter rounded-b-xl p-4 text-center border-t border-inforekan-text border-opacity-40 h-16 flex items-center justify-center">
            <h4 className="font-medium text-sm text-inforekan-textSecondary uppercase">{position}</h4>
        </div>
    </div>
    )
}

export default CardUser;