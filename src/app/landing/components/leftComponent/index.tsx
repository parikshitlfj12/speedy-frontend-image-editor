import React from "react";
import {
  AiOutlineHome,
  AiFillFolderOpen,
  AiOutlineClockCircle,
  AiOutlineSetting,
} from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="p-5">
      <div className="flex items-center cursor-pointer gap-x-1">
        <AiOutlineHome className="text-buttons text-lg" />
        <span className="text-typography"> Home</span>
      </div>
      <div className="flex items-center gap-x-1">
        <AiFillFolderOpen className="text-typography" />
        <span className="text-typography"> My Files</span>
      </div>
      <div className="flex items-center gap-x-1">
        <AiOutlineClockCircle className="text-typography" />
        <span className="text-typography"> Recent</span>
      </div>
      <div className="flex items-center gap-x-1">
        <AiOutlineSetting className="text-typography" />
        <span className="text-typography"> Settings</span>
      </div>
      <div className="flex items-center gap-x-1">
        <RiDeleteBin7Line className="text-typography" />
        <span className="text-typography"> Recycle bin</span>
      </div>

      <div className="mt-12 text-typography">
        <b>25.32 GB</b> used of 1TB <br />
        <div className="w-full mt-4 ml-1">
          <div className="bg-gray-700 h-2">
            <div className="bg-buttons h-2 w-3/4"></div>
          </div>
        </div>
      </div>

      <div className="mt-5 text-typography">
        <b>Get the SPEEDY.IO App</b>
      </div>
    </div>
  );
}
