import React, { Component } from 'react';
import { BarChart2, Briefcase, FileText, Folder, Map, MapPin, Users } from 'react-feather';
import Header from '../Components/Header';
import AvatarPng from '../assets/png/avatar.png'
import { Link } from 'react-router-dom';




class Home extends Component {
    
    constructor() {
        super();
        this.state = {
            isOpen: false,
            isDropdown : false,
            nodeRef: React.createRef(),
        }
    }


    openDropdownUser = () => {
        let isDropdown = this.state.isDropdown;
        this.setState({
            isDropdown : !isDropdown,
        })
    }

    render () {
        return (
            <main className="flex-grow flex-auto bg-gray-50 overflow-auto min-h-screen py-4">

                <Header nodeRef={this.state.nodeRef} isDropdown={this.state.isDropdown} openDropdownUser={this.openDropdownUser} />

                 <div className="lg:mt-32 flex flex-col gap-8 items-center justify-center px-4 lg:px-12">
                    <h1 className="text-2xl md:text-4xl font-body font-semibold text-gray-900">List Modules</h1>
                    <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 w-full transition ease-in-out duration-700">
                        
                        <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-orange-100 to bg-orange-200 bg-opacity-50">
                            <div className="h-20 w-20 rounded-full flex items-center justify-center bg-amber-500">
                                <Users className="h-12 w-12 rounded-full text-white" />
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-body font-semibold">INFOREKAN</p>
                                <p className="text-sm font-body font-light">Modules</p>
                            </div>
                            <Link to="/inforekan" className="px-4 py-2 w-full rounded-full bg-white shadow-lg text-center">
                                <p className="text-lg font-body font-medium">View</p>
                            </Link>
                        </div>

                        <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-emerald-100 to bg-emerald-200 bg-opacity-50">
                            <div className="h-20 w-20 rounded-full flex items-center justify-center bg-emerald-500">
                                <Briefcase className="h-12 w-12  text-white" />
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-body font-semibold">SPPD</p>
                                <p className="text-sm font-body font-light">Modules</p>
                            </div>
                            <button className="px-4 py-2 w-full rounded-full bg-white shadow-lg">
                                <p className="text-lg font-body font-medium">View</p>
                            </button>
                        </div>

                        <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-rose-100 to bg-rose-200 bg-opacity-50">
                            <div className="h-20 w-20 rounded-full flex items-center justify-center bg-rose-500">
                                <Map className="h-12 w-12  text-white" />
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-body font-semibold">CUTI</p>
                                <p className="text-sm font-body font-light">Modules</p>
                            </div>
                            <button className="px-4 py-2 w-full rounded-full bg-white shadow-lg">
                                <p className="text-lg font-body font-medium">View</p>
                            </button>
                        </div>

                        <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-cyan-100 to bg-cyan-200 bg-opacity-50">
                            <div className="h-20 w-20 rounded-full flex items-center justify-center bg-cyan-500">
                                <MapPin className="h-12 w-12  text-white" />
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-body font-semibold">POP</p>
                                <p className="text-sm font-body font-light">Modules</p>
                            </div>
                            <Link to="/absensi" className="px-4 py-2 w-full rounded-full bg-white shadow-lg text-center">
                                <p className="text-lg font-body font-medium">View</p>
                            </Link>
                        </div>

                        <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-violet-100 to bg-violet-200 bg-opacity-50">
                            <div className="h-20 w-20 rounded-full flex items-center justify-center bg-violet-500">
                                <FileText className="h-12 w-12  text-white" />
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-body font-semibold">SPT</p>
                                <p className="text-sm font-body font-light">Modules</p>
                            </div>
                            <button className="px-4 py-2 w-full rounded-full bg-white shadow-lg">
                                <p className="text-lg font-body font-medium">View</p>
                            </button>
                        </div>

                        <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-blue-100 to bg-blue-200 bg-opacity-50">
                            <div className="h-20 w-20 rounded-full flex items-center justify-center bg-blue-500">
                                <Folder className="h-12 w-12  text-white" />
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-body font-semibold">FTP</p>
                                <p className="text-sm font-body font-light">Modules</p>
                            </div>
                            <button className="px-4 py-2 w-full rounded-full bg-white shadow-lg">
                                <p className="text-lg font-body font-medium">View</p>
                            </button>
                        </div>

                        <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-green-100 to bg-green-200 bg-opacity-50">
                            <div className="h-20 w-20 rounded-full flex items-center justify-center bg-green-500">
                                <BarChart2 className="h-12 w-12  text-white" />
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-body font-semibold">Dashboard</p>
                                <p className="text-sm font-body font-light">Modules</p>
                            </div>
                            <button className="px-4 py-2 w-full rounded-full bg-white shadow-lg">
                                <p className="text-lg font-body font-medium">View</p>
                            </button>
                        </div>

                        <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-amber-100 to bg-amber-200 bg-opacity-50">
                            <div className="h-20 w-20 rounded-full flex items-center justify-center bg-amber-500">
                                <img src={AvatarPng} alt="img" className="object-cover h-20 w-20 rounded-full " />
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-body font-semibold">Me</p>
                                <p className="text-sm font-body font-light">Modules</p>
                            </div>
                            <button className="px-4 py-2 w-full rounded-full bg-white shadow-lg">
                                <p className="text-lg font-body font-medium">View</p>
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        );
    }
}

export default Home;