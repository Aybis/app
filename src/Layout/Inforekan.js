import React, { Component } from 'react';
import { List, MoreHorizontal, Search } from 'react-feather';
import CardUser from '../Components/Card/CardUser';
import SelectDropdown from '../Components/SelectDropdown';

class Inforekan extends Component {

    constructor() {
        super();
        this.state = {
            isUnit : false,
            isSubUnit : false,
            isDirektorat : false,
            dataDirektorat: null,
            dataUnit: null,
            dataSubUnit: null,
            dataUser: null,
            form: {
                unit: '',
                subunit: '',
                direktorat: '',
            }
        }
    }


    openDropdownSelect = () => {
        let isDropdown = this.state.isDropdown;
        this.setState({
            isDropdown : !isDropdown,
        })
    }

    selectDataDirektorat = (data, el) => {
        this.setState(prevState => { 
            let form = Object.assign({}, prevState.form);   // creating copy of state variable form
            form.direktorat = data.name;                    // update the direktorat property, assign a new value                 
            return { form };                                // return new object form object
        })
        this.handlerDirektorat();
        this.getDataUnitbyDirektorat(data.id);
    }

    handlerDirektorat = () => {
        let isDirektorat = this.state.isDirektorat;
        this.setState({
            isDirektorat : !isDirektorat,
        })
    }

    selectDataUnit = (data, el) => {
        this.setState(prevState => { 
            let form = Object.assign({}, prevState.form);   // creating copy of state variable form
            form.unit = data.name;                          // update the unit property, assign a new value                 
            return { form };                                // return new object form object
        })
        this.handlerUnit();
        this.getDataSubUnitByUnit(data.id);

    }

    handlerUnit = () => {
        let isUnit = this.state.isUnit;
        this.setState({
            isUnit : !isUnit,
        })
    }

    selectDataSubUnit = (data, el) => {
        this.setState(prevState => { 
            let form = Object.assign({}, prevState.form);   // creating copy of state variable form
            form.subunit = data.name;                       // update the subunit property, assign a new value                 
            return { form };                                // return new object form object
          })
        this.handlerSubUnit();
    }

    getDataUnitbyDirektorat = (direktorat_id) => {
        const url =`https://foodmarket.test/api/unit?id=${direktorat_id}`;
       
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                dataUnit: data,
            })
        })
        .catch(err => alert(err));
    }

    getDataSubUnitByUnit = (unit_id) => {
        const url =`https://foodmarket.test/api/subunit?id=${unit_id}`;
       
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                dataSubUnit: data
            })
        })
        .catch(err => alert(err));
    }

    handlerSubUnit = () => {
        let isSubUnit = this.state.isSubUnit;
        this.setState({
            isSubUnit : !isSubUnit,
        })
    }

    listDataDirektorat = () => {
        const url ='https://foodmarket.test/api/units';
       
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                dataDirektorat: data.direktorat,
                dataUnit: data.unit,
                dataSubUnit: data.subunit
            })
        })
        .catch(err => alert(err));

    }

    listDataUser = () => {
        let data = [
            {
                name: 'Junaidi Abdillah',
                position: 'Senior Officer IT & Management',
                email: 'joen@pins.co.id',
            },
            {
                name: 'Ahmad Fauzi Hanif',
                position: 'Enginer 3 IT Support',
                email: 'ahmad.fauzi@pins.co.id',
            },
            {
                name: 'Abdul Muchtar Astria',
                position : 'IT Programmer',
                email: 'abdul.muchtar@pins.co.id',
            },
            {
                name: 'Bayu Respati',
                position : 'IT Programmer',
                email: 'bayu.respati@pins.co.id',
            },
            {
                name: 'Junaidi Abdillah',
                position: 'Senior Officer IT & Management',
                email: 'joen@pins.co.id',
            },
            {
                name: 'Ahmad Fauzi Hanif',
                position: 'Enginer 3 IT Support',
                email: 'ahmad.fauzi@pins.co.id',
            },
            {
                name: 'Abdul Muchtar Astria',
                position : 'IT Programmer',
                email: 'abdul.muchtar@pins.co.id',
            },
            {
                name: 'Bayu Respati',
                position : 'IT Programmer',
                email: 'bayu.respati@pins.co.id',
            }, {
                name: 'Junaidi Abdillah',
                position: 'Senior Officer IT & Management',
                email: 'joen@pins.co.id',
            },
            {
                name: 'Ahmad Fauzi Hanif',
                position: 'Enginer 3 IT Support',
                email: 'ahmad.fauzi@pins.co.id',
            },
            {
                name: 'Abdul Muchtar Astria',
                position : 'IT Programmer',
                email: 'abdul.muchtar@pins.co.id',
            },
            {
                name: 'Bayu Respati',
                position : 'IT Programmer',
                email: 'bayu.respati@pins.co.id',
            },
            
        ];
    
        this.setState({dataUser : data})
    }

    listDataUserAPI = () => {
        const url ='https://foodmarket.test/api/employee';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                dataUser: data
                })
            }
        )
        .catch(err => alert(err));
        
    }

    componentDidMount =() =>{
        setTimeout(() => {
            this.listDataDirektorat();
            this.listDataUserAPI();
        }, 300);
    }

    render () {
        return (
           <div className="bg-inforekan-background h-auto">
               
               <header className="w-full top-0 fixed z-20 hidden lg:block">
                   <div className="bg-white py-6 px-24 flex justify-between items-center rounded-b-full w-full mx-auto container shadow">
                        <h1 className="text-xl uppercase font-semibold font-body text-inforekan-header">Inforekan</h1>
                        <ul className="flex flex-row gap-8 text-inforekan-textPrimary ">
                            <li className="border-b-2 pb-2 border-inforekan-primary transition duration-300 ease-in-out">Employee </li>
                            <li className="border-b-2 pb-2 border-transparent hover:border-inforekan-primary text-inforekan-text hover:text-inforekan-textPrimary transition duration-300 ease-in-out">Me</li>
                            <li className="border-b-2 pb-2 border-transparent hover:border-inforekan-primary text-inforekan-text hover:text-inforekan-textPrimary transition duration-300 ease-in-out">Profile</li>
                        </ul>
                        <div>
                            <div className="h-12 w-12 bg-inforekan-primary rounded-full flex items-center justify-center text-white p-4">
                                <p className="text-center font-light">
                                    AM
                                </p>
                            </div>
                        </div>
                   </div>
                  
               </header>
               <header className="w-full bottom-0 fixed z-20">
                   <div className="bg-white py-6 px-24 flex justify-between items-center rounded-t-lg w-full mx-auto container shadow">
                        <ul className="flex flex-row gap-8 text-inforekan-textPrimary ">
                            <li className="border-b-2 pb-2 border-inforekan-primary transition duration-300 ease-in-out">Employee </li>
                            <li className="border-b-2 pb-2 border-transparent hover:border-inforekan-primary text-inforekan-text hover:text-inforekan-textPrimary transition duration-300 ease-in-out">Me</li>
                            <li className="border-b-2 pb-2 border-transparent hover:border-inforekan-primary text-inforekan-text hover:text-inforekan-textPrimary transition duration-300 ease-in-out">Profile</li>
                        </ul>
                        <div>
                            <div className="h-12 w-12 bg-inforekan-primary rounded-full flex items-center justify-center text-white p-4">
                                <p className="text-center font-light">
                                    AM
                                </p>
                            </div>
                        </div>
                   </div>
                  
               </header>


            <main className="bg-inforekan-background pt-4 lg:pt-32 mx-8 font-body">
                
                <div className="bg-white  p-8 rounded-xl max-h-96 border-b border-inforekan-backgroundLight lg:sticky lg:top-32" >
                        <h1 className="text-xl text-inforekan-header text-left font-semibold">Employee</h1>
                        <div className="flex justify-between border-b border-inforekan-backgroundDark items-center mt-4">
                            <div className="flex gap-8 text-sm font-medium text-inforekan-textSecondary">
                                <p className="border-b-2 border-inforekan-primary pb-2">All</p>
                                <p className="border-b-2 border-transparent hover:border-inforekan-primary pb-2 text-inforekan-text hover:text-inforekan-textPrimary transition duration-300 ease-in-out">Organization</p>
                            </div>

                            <div className="pb-2 flex  items-center mr-4">
                                <input type="text" className="w-64 h-full p-3 rounded-md bg-inforekan-background placeholder-inforekan-textSecondary text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-inforekan-primary focus:border-transparent" placeholder="Search Name" />
                                <Search className="-ml-8 h-4 w-4 text-inforekan-textSecondary text-opacity-60" />
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-wrap gap-4">
                                <SelectDropdown 
                                    listData={this.state.dataDirektorat} 
                                    label="Direktorat" 
                                    clickHandler={this.handlerDirektorat}
                                    isShow={this.state.isDirektorat}
                                    value={this.state.form.direktorat}
                                    handlerSelectData={((data) => this.selectDataDirektorat(data, this))}
                                />

                                <SelectDropdown 
                                    listData={this.state.dataUnit} 
                                    label="Unit" 
                                    clickHandler={this.handlerUnit}
                                    isShow={this.state.isUnit}
                                    value={this.state.form.unit}
                                    handlerSelectData={((data) => this.selectDataUnit(data, this))}
                                />
                                <SelectDropdown
                                    listData={this.state.dataSubUnit} 
                                    label="Sub Unit" 
                                    clickHandler={this.handlerSubUnit}
                                    isShow={this.state.isSubUnit}
                                    value={this.state.form.subunit}
                                    handlerSelectData={((data) => this.selectDataSubUnit(data, this))}
                                />
                            </div>
                            <div className="hidden w-32 rounded-lg px-4 bg-inforekan-backgroundDark mt-2 p-2  justify-between gap-6">
                                <button className="bg-white px-2 rounded flex flex-col items-center text-inforekan-textSecondary shadow-lg">
                                    <MoreHorizontal className=" h-6 w-6" />
                                    <MoreHorizontal className="-mt-4 h-6 w-6" />
                                    <MoreHorizontal className="-mt-4 h-6 w-6" />
                                </button>
                                <button className=" px-2 py-1 rounded flex items-center text-inforekan-textSecondary">
                                    <List />
                                </button>
                            </div>
                        </div>
                </div>

                <div className="bg-transparent">
                    <div className="w-full scroll-hidden overflow-auto pb-8 pt-4 rounded-xl mt-4" style={{ minHeight:'65vh', maxHeight:'80vh' }}>
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 font-body">
                            {this.state.dataUser && 
                                this.state.dataUser.slice(0, 20).map((data, index) => {
                                    return (
                                        <CardUser key={index} name={data.user_roles.name} position={data.user_positions.name} email={data.user_roles.email} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    

                </div>

            </main>
              

           </div>
        );
    }
}

export default Inforekan;