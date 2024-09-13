import React,{useState} from 'react';

import Navbar from './Navbar';

function TopSection() {
   const [activeTab,setActiveTab] = useState('AboutMe')
   const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=''>
     <Navbar onClick={handleButtonClick} activeTab={activeTab} ></Navbar>
    <div className='mt-10 text-white'>
      {activeTab==='AboutMe' && (
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur voluptatem cumque doloribus obcaecati perspiciatis, iusto quis, inventore eaque at earum minus odio quibusdam impedit quia fugit velit! Delectus, iure.</p>
      )}
    {activeTab==='Experience' && (
        <p>this is Experience section</p>
      )}
    {activeTab==='Recomended' && (
        <p>this is Recomended section</p>
      )}
    </div>
    </div>
   
  )
}

export default TopSection;
