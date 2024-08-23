import React from "react";
import SidePanel from "../panels/SidePanel";
import AddAccountPanel from "../panels/AddAccountPanel";

export default function index() {
  return (
    <div className="flex flex-row justify-between w-[100%] h-screen">
      <div className="bg-red-100 fixed w-[15%]">
        <SidePanel></SidePanel>
      </div>
      <div className="grow ml-[15%] h-screen bg-red-300">
        <div className="p-2">
          <AddAccountPanel></AddAccountPanel>
        </div>
      </div>
    </div>
  );
}
