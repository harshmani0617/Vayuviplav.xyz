import React, { Component } from "react";
import SidebarNav from "../components/SidebarNav";
import Donation from "../components/Donation";
import Posts from "../components/Posts";
import HomePageDec from "../components/HomePageDec";

export default class HomeScreen extends Component {
    render() {
        return (
            <>
                <div className="mainb flex space-x-4 p-2">
                    <SidebarNav />

                    <div className="content w-4/5">
                        <HomePageDec/>
                        <Posts/>
                        <Donation/>
                        <div className="threer my-20">
                            <p className="text-center font-[700] text-[45px]">Support Us</p>

                        </div>

                        {/* bottom */}
                    </div>


                </div>
            </>
        );
    }
}
