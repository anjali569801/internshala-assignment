import React, { useState } from 'react';
import Button from './Button';
import BottomNavbar from './BottomNavbar';
function BottomSection() {
 const [images, setImages] = useState([]);
 const [currentIndex, setCurrentIndex] = useState(0);

 const addOnClick =(event)=>{
    const files=event.target.files;
    const uploadedImages=[];

    for(let i=0;i<files.length;i++){
        const file=files[i]
        const imageURl=URL.createObjectURL(file);
        uploadedImages.push(imageURl)
    }
    setImages([...images,...uploadedImages]);
 }

 const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1); 
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); 
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);


  return (
    <div >
     
     <BottomNavbar onClick={addOnClick} onPrevClick={handlePrev} onNextClick={handleNext}></BottomNavbar>
      
     <div className="flex overflow-x-hidden space-x-10 mt-10">
          {visibleImages.map((image, index) => (
            <div key={index} className="w-1/5 h-32 bg-gray-200">
              <img src={image} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
    </div>
  )
}

export default BottomSection;

// import React, { useState } from 'react';

// const Gallery = () => {
//   const [images, setImages] = useState([]);

//   // Function to handle image uploads
//   const handleAddImage = (event) => {
//     const files = event.target.files;
//     const uploadedImages = [];

//     // Convert FileList into array and store image URLs
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
//       const imageUrl = URL.createObjectURL(file);
//       uploadedImages.push(imageUrl);
//     }

//     setImages([...images, ...uploadedImages]); // Add new images to the gallery
//   };

//   return (
//     <div className="bg-white p-4 shadow-md">
//       <div className="flex justify-between mb-4">
//         <h3 className="text-lg">Gallery</h3>
        
//         {/* Hidden file input for uploading images */}
//         <input
//           type="file"
//           id="file-upload"
//           accept="image/*"
//           multiple
//           className="hidden"
//           onChange={handleAddImage}
//         />
        
//         {/* Label to trigger the file input click */}
//         <label
//           htmlFor="file-upload"
//           className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
//         >
//           + Add Image
//         </label>
//       </div>

//       <div className="grid grid-cols-3 gap-4">
//         {images.map((image, index) => (
//           <div key={index} className="w-full h-32 bg-gray-200">
//             <img src={image} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
