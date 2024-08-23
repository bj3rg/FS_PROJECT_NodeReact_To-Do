import React from "react";
import Button from "../component/Button";

export default function SidePanel() {
  return (
    <div className="grow h-screen ">
      <div className="text-xl p-5 text-center ">
        <h1 className="font-bold">ToDo Burg</h1>
        <Button name="ACCOUNTS" otherStyle="w-[150px]" />
        <Button name="CREATE" otherStyle="w-[150px]" />
        <Button name="CLICKME" otherStyle="w-[150px]" />
      </div>
    </div>
  );
}
