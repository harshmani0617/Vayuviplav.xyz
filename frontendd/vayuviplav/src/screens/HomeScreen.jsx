import React, { Component } from "react";
import SidebarNav from "../components/SidebarNav";

export default class HomeScreen extends Component {
    render() {
        return (
            <>
                <div className="mainb flex space-x-4 p-2">
                    <SidebarNav />


                    <div className="content w-4/5">
                        <div className="firstblock h-[235px] w-full bg-cover">
                            <p className="text-center pt-24 text-[62px] opacity-100 text-white font-[800]">Let's Save Our Earth Together!</p>

                        </div>
                        {/* <img
              src="public\nature-1.jpg"
              className="h-[18%] w-[100%] object-cover"
              alt=""
            />   */}

                        <div className="flex mt-2 space-x-2">
                            <div className="w-1/3">
                                <img
                                    src="/public/nature-2.jpg"
                                    className="max-w-full h-[45rem] object-cover"
                                    alt=""
                                />
                                <div className="bg-white relative  w-3/4 h-[30rem] mt-[-30rem] rounded-tr-lg p-2">
                                    <p className="font-[600] text-[30px] cursor-pointer">When Disaster Strikes: Preparing for Climate Change</p>
                                    <p className="mt-3 text-gray-600">By Seán Nolan and Krishna Srinivasan</p>

                                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestias perferendis vero illum quos corrupti unde iusto officia, cumque libero, enim, aspernatur eveniet mollitia numquam a accusamus ducimus velit vitae. eveniet mollitia numquam a accusamus ducimus velit vitae</p>

                                </div>
                            </div>
                            <div className="w-2/3">
                                <img
                                    src="/public/nature-3.jpg"
                                    className="h-[29rem] w-[100%] object-cover"
                                    alt=""
                                />
                                <div className="bg-white w-1/2 h-44 mt-[-11rem] relative rounded-tr-lg p-4">
                                    <p className="font-[700] text-3xl ">The Adaptive Age</p>
                                    <p className="mt-2 text-gray-600">By Kristalina Georgieva</p>
                                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem, dolore adipisci voluptate esse aut.</p>

                                

                                    


                                </div>

                                <div className="bg-green-300 w-full h-64 mt-2 "></div>

                            </div>
                        </div>

                        <div className="h-[20rem]"></div>




                        {/* bottom */}


</div>


                </div>
            </>
        );
    }
}
