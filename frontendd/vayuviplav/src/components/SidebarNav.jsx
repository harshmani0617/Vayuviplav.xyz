import React, { Component } from 'react'

export default class SidebarNav extends Component {
    render() {
        return (
            <>

                <div className="sidenav w-1/5 bg-green-900 p-2 space-y-4 h-full rounded-tr-lg sticky top-5">
                    <p className="text-white text-center text-[40px] mt-10 mb-[-10px] font-[700]">Vayuviplav</p>
                    <p className='text-center text-yellow-50'>Come Back Greenary</p>

                    <div className="bg-green-700  px-2 py-4 h-20 rounded-lg">
                    </div>
                    <div className="bg-green-700  px-2 py-4 h-20 rounded-lg"></div>
                    <div className="bg-green-700  px-2 py-4 h-20 rounded-lg"></div>
                    <div className="bg-green-700  px-2 py-4 h-20 rounded-lg"></div>

                </div>


            </>
        )
    }
}
