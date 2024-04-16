import React, { Component } from 'react';
import { Home, Info, Activity, DollarSign,PhoneCall  } from 'react-feather';

export default class SidebarNav extends Component {
    render() {
        return (
            <>
                <div className="sidenav w-1/5 bg-green-900 p-2 space-y-4 h-full rounded-tr-lg sticky top-5">
                    <p className="text-white text-center text-[40px] mt-10 mb-[-10px] font-[700]">Vayuviplav</p>
                    <p className='text-center text-yellow-50'>Come Back Greenary</p>

                    <div className="bg-green-700 px-2 py-4 h-20 rounded-lg flex items-center justify-center">
                        <Home className="text-white mr-2" size={24} />
                        <a href="#" className="text-white text-lg font-semibold hover:underline">Home</a>
                    </div>

                    <div className="bg-green-700 px-2 py-4 h-20 rounded-lg flex items-center justify-center">
                        <Info className="text-white mr-2" size={24} />
                        <a href="#" className="text-white text-lg font-semibold hover:underline">About</a>
                    </div>

                    <div className="bg-green-700 px-2 py-4 h-20 rounded-lg flex items-center justify-center">
                        <Activity className="text-white mr-2" size={24} />
                        <a href="#" className="text-white text-lg font-semibold hover:underline">Activities</a>
                    </div>

                    <div className="bg-green-700 px-2 py-4 h-20 rounded-lg flex items-center justify-center">
                        <DollarSign className="text-white mr-2" size={24} />
                        <a href="#" className="text-white text-lg font-semibold hover:underline">Donate</a>
                    </div>
                    <div className="bg-green-700 px-2 py-4 h-20 rounded-lg flex items-center justify-center">
                        <PhoneCall className="text-white mr-2" size={24} />
                        <a href="#" className="text-white text-lg font-semibold hover:underline"> Contact</a>
                    </div>

                </div>
            </>
        )
    }
}
