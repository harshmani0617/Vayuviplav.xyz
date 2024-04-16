import React, { Component } from "react";
import SidebarNav from "../components/SidebarNav";

export default class HomeScreen extends Component {
  render() {
    return (
      <>
        <div className="mainb flex space-x-4 p-2">
          <SidebarNav/>


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
                <div className="bg-white relative  w-3/4 h-[30rem] mt-[-30rem] rounded-tr-lg ">

                </div>
              </div>
              <div className="w-2/3">
                <img
                  src="/public/nature-3.jpg"
                  className="h-[60%] w-[100%] object-cover"
                  alt=""
                />
                <div className="bg-white w-1/2 h-36 -top-36 relative rounded-tr-lg "></div>

                <div className="bg-green-300 w-full h-52 relative -top-32  "></div>
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
