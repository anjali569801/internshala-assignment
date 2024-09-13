import React from "react";
import { FaCircleArrowLeft,  FaCircleArrowRight } from "react-icons/fa6";

function BottomNavbar ({onClick,onNextClick,onPrevClick}) {
    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
      };
    return(
    <div className="flex  justify-between bottomNavbar">
        <span className="text-white bg-black rounded-md px-3 py-2 text-center">Gallery</span>
        <div className="flex mx-56">
            <button onClick={handleButtonClick}  class="AddImage" className="bg-gray-600 text-white font-semibold text-sm py-1 px-4 rounded-full">+Add IMAGE</button>
            <div className="flex text-gray-800 ml-16 items-center  text-2xl ">
                <FaCircleArrowLeft onClick={onPrevClick}/>
                <FaCircleArrowRight onClick={onNextClick} className='ml-3'/>
            </div>
        </div>
        <input
        id="fileInput"
        type="file"
        accept="image/*"
        multiple
        style={{ display: 'none' }} // Hide file input
        onChange={onClick} // Call the addOnClick function when files are selected
      />
    </div>
        
    );
}

export default BottomNavbar;
