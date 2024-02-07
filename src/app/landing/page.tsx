import React from "react";
import LeftComponent from "./components/leftComponent";
import RightComponent from "./components/rightComponent";
import MiddleComponent from "./components/middleComponent";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="container-fluid mx-auto">
      <div className="flex flex-wrap justify-between gap-x-2">
        <div className="w-full md:w-2/12">
          <LeftComponent />
        </div>
        <div className="w-full md:w-6/12">
          <MiddleComponent />
        </div>
        <div className="w-full md:w-3/12">
          <RightComponent />
        </div>
      </div>
    </div>
  );
}
