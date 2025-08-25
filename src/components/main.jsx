import React, { useState, useEffect } from "react";
import useApi from "../hooks/useApi";

export default function Main({ search, guests, data1, setData1 }) {
  const { data, loading, error } = useApi("/stays.json");
  useEffect(() => {
    setData1(
      data.filter(
        (e) =>
          (!search ||
            (e.city && e.city.toLowerCase().includes(search.toLowerCase()))) &&
          (!guests || e.maxGuests >= Number(guests))
      )
    );
  }, [data, search, guests]);
  return (
    <section>
      <div className="flex justify-between items-center p-8">
        <h1 className="text-2xl text-gray-800 font-bold "> Stays in Finland</h1>
        <p className="font-semibold text-gray-700">12+ stays</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 place-items-center ">
        {data1.length > 0 ? (
          data1.map((e) => (
            <div className="w-full">
              <div className="flex justify-center w-[90%] h-[240px] sm:w-full overflow-hidden rounded-2xl">
                <img src={e.photo} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between w-[90%] md:w-full">
                {e.superHost ? (
                  <div className="border rounded-2xl flex items-center m-1 ">
                    <p className=" text-[12px] px-2">SUPERHOST</p>
                  </div>
                ) : (
                  ""
                )}
                <p className="text-gray-500 text-[13px] p-1">
                  {e.type}. {e.beds ? e.beds + " beds" : ""}
                </p>
                <div className="flex">
                  <p> {e.rating}</p>
                  <img
                    className="w-6 h-6"
                    src="https://joregesosa.github.io/windbnb_challenge/assets/star-55f860b4.svg"
                    alt=""
                  />
                </div>
              </div>
              <h3 className="text-gray-800 font-semibold">{e.title}</h3>
            </div>
          ))
        ) : (
          <div className="w-full h-full col-span-5 flex flex-col justify-center items-center">
            <p>Cargando...</p>
          </div>
        )}
      </div>
    </section>
  );
}
