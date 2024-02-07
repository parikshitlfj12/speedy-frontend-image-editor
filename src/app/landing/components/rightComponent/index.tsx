import React from "react";

const ThirdComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-red-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">
              L
            </div>
            <div className="ml-3">
              <p className="text-base font-bold mb-1">Lamborghini Paella</p>
              <p className="text-sm text-gray-500">September 14, 2016</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-base font-bold mb-2">File Preview</p>
        <img
          src="https://media.architecturaldigest.com/photos/5b9691509cd13621bf9b559b/16:9/w_2991,h_1682,c_limit/JPrice_Lamborghini_MCW18-1755.jpg"
          alt="car"
          className="w-full rounded-md"
        />
        <p className="text-base font-bold mt-4">
          Dil Mere - The Local Train
          <span className="text-gray-500">.mp4</span>
        </p>
        <p className="text-xs text-gray-500">2.6 GB, 26 Min</p>
      </div>
      <div className="p-4">
        <p className="text-base font-bold mb-2">File Description</p>
        <p className="text-sm text-gray-600">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </p>
      </div>
      <div className="p-4">
        <p className="text-base font-bold mb-2">File Shared With</p>
        <div className="flex items-center">
          <div className="bg-blue-400 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
            A
          </div>
          <p className="ml-3">- Alex Walker</p>
        </div>
        <div className="flex items-center mt-2">
          <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
            C
          </div>
          <p className="ml-3">- Christiano Ronaldo</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdComponent;
