import React from "react";
import TopSection from "./TopSection";
import { GoQuestion } from "react-icons/go";
import { IoAppsSharp } from "react-icons/io5";

function Container ({children}){
    return(
        <div  className='flex container bg-gray-400 "overflow-x-auto" py-3 m-5 rounded-md px-8'>
        <div className='flex  flex-col text-white text-lg font-xl'>
        <GoQuestion />
        <IoAppsSharp className="mt-20"/>
        </div>
        <div className="ml-4">
            {children}
        </div>
        </div>
    );

}

export default Container;