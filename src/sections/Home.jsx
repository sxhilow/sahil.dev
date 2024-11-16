import React from "react";
import { lightprofile } from "../assets/icons";


export default function Home(){
  return(
    <div className="w-screen h-[90%] md:w-[90%] md:h-screen fixed right-0">
      <div className="md:w-[50%] md:h-screen">
        <div className="m-1 md:m-5 shadow-md rounded-md ">
        <div className=" flex justify-center items-center flex-col md:flex-row ">
          <div className="md:p-2 text-cente">
            <img src={lightprofile} alt="Profile" className="  rounded-full border border-slate-500 w-20" />
          </div>
          <div className="p-2 text-center md:text-left">
            <h4 className="font-poppins font-semibold">Hi, <span className="text-blue-600">I'm Sahil</span></h4>  
            <h1 className="font-poppins font-semibold">I'm a Future <span className="text-teal-600">Full-Stack </span> Dev</h1>
          </div>
        </div>
        <div className="w-full h-[20%]">
          <div className="flex justify-center items-center border border-slate-500 p-2">
            <ul>
              <li>
                Git
              </li>
            </ul>
          </div>
        </div>
        </div>
      
      </div>
      
    </div>
  )
}