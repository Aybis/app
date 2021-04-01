import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import BG from '../assets/png/bg7.jpeg';
import AsideUser from '../Components/AsideUser';
import Card1 from "../Components/Card/Card1";
import CardBoardingPass from "../Components/Card/CardBoardingPass";
import CardHoliday from "../Components/Card/CardHoliday";
import CardProfile from "../Components/CardProfile";
import Header from '../Components/Header';


class Absensi extends Component {

    constructor() {
        super();
        this.state = {
            isReady : false,
            isLoading: false,
            isModal: false,
            checkIn: true,
            checkOut: false,
            nodeRef: React.createRef(),
            isDropdown : false,
            location : null,
            address: 'Jakarta',
            testState: true,
            geocoder : L.Control.Geocoder.nominatim(),

        }
    }

     getLocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    location: {
                            lat: position.coords.latitude, 
                            lng:position.coords.longitude
                        },
                })
                this.reverseGeoCode();

            })
        } else {
             alert('Geolocation is not supported by this browser');
        }
    }

    reverseGeoCode = () => {
        this.state.geocoder.reverse(
            this.state.location,
            15,
            results => {
                this.setState({
                    address: results[0].name
                })
            }
        );
    }

    openDropdownUser = () => {
        let isDropdown = this.state.isDropdown;
        this.setState({
            isDropdown : !isDropdown,
        })
    }
    
    openModal = () => {
        let isModal = this.state.isModal;
        this.setState({isModal: !isModal})
    }

    closeModal = () => {
        let isModal = this.state.isModal;
        this.setState({isModal: !isModal})
    }

    onCheckInAndOut = () => {
        let checkIn = this.state.checkIn;
        let checkOut = this.state.checkOut;

        this.setState(
            {
                checkIn : !checkIn,
                checkOut : !checkOut,
            }
        )
    }

    openSidebar = () => {
        let isOpen = this.state.isOpen;
        this.setState({
            isOpen : !isOpen,
        })
    }

    onClickTransition = () => {
        let testState = this.state.testState;

        this.setState({
            testState: !testState
        });
    }

    componentDidMount() {
        this.getLocation();
        setTimeout(() => {
            let  isReady = this.state.isReady;
            this.setState({isReady : !isReady});
        }, 300);

    }



    render() {
        return (
           <div className="flex">
                <main className="flex-1 bg-gray-50 scroll-hidden overflow-auto h-screen z-50 pb-12">
                    <Header nodeRef={this.state.nodeRef} isDropdown={this.state.isDropdown} openDropdownUser={this.openDropdownUser} />

                    {/* Content */}
                    <div className={`h-auto mx-8 p-4 ease-in-out duration-700`}>
                        
                        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
                        <div className="rounded-xl" style={{ backgroundImage:`url(${BG})`, backgroundSize:'cover', boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.4)' }}>
                            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    <span className="block">Are you ready to lose?</span>
                                    <span className="block text-indigo-600">Lorem Ipsum Extgue.</span>
                                </h2>
                                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                    <div className="inline-flex rounded-md shadow">
                                        <Link to="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                        Check In
                                        </Link>
                                    </div>
                                    <div className="ml-3 inline-flex rounded-md shadow">
                                        <Link to="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                                        Check Out
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-8">
                            <h1 className="text-gray-800 text-xl font-semibold">Overview</h1>
                            <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 gap-8">
                                <Card1 />
                                <Card1 />
                                <Card1 />
                            </div>

                            <h1 className="text-gray-800 text-xl font-semibold mt-10">Summary</h1>
                            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8 font-body ease-in-out duration-500 h-1/4">
                                <CardProfile  />
                                <CardBoardingPass />
                            </div>

                            <h1 className="text-gray-800 text-xl font-semibold mt-10">Holiday</h1>
                            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8 font-body ease-in-out duration-500 h-1/4">
                                <CardHoliday  />
                                <CardBoardingPass />
                            </div>

                           


                        </div>              

                 

                    </div>
                    {/* End Content */}
                </main>

                {/* <!-- User Section --> */}
                {this.state.isReady && 
                <AsideUser location={this.state.location} address={this.state.address} isReady={this.state.isReady} />
                }
           </div>
        )
    }
}


export default withRouter(Absensi);

