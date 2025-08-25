import React, { useState } from "react";

export default function Guests({
  button,
  count1,
  count2,
  setCount1,
  setCount2,
}) {
  return (
    <div className={`${button ? "grid" : "hidden"} w-[90%] gap-4 mt-8`}>
      <div className="w-32 grid place-items-center">
        <div className="w-full">
          <p className="text-[12px] font-semibold">Adults</p>
        </div>
        <span className="text-gray-500">Ages 13 or above</span>
        <div className="flex gap-7 p-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              setCount1(count1 <= 0 ? (count1 = 0) : count1 - 1);
            }}
            className="bg-gray-300 w-6 rounded-xs border-1 border-gray cursor-pointer"
          >
            -
          </button>
          <p>{count1}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCount1(count1 + 1);
            }}
            className="bg-gray-300 w-6 rounded-xs border-1 border-gray cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
      <div className="w-32 grid place-items-center">
        <div className="w-full">
          <p className="text-[12px] font-semibold">Children</p>
        </div>
        <span className="text-gray-500">Ages 13 or above</span>
        <div className="flex gap-7">
          <button
            onClick={(e) => {
              e.preventDefault();
              setCount2(count2 <= 0 ? (count2 = 0) : count2 - 1);
            }}
            className="bg-gray-300 w-6 rounded-xs border-1 border-gray cursor-pointer"
          >
            -
          </button>
          <p>{count2}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCount2(count2 + 1);
            }}
            className="bg-gray-300 w-6 rounded-xs border-1 border-gray cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
