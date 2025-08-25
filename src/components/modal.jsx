import React, { useState, useEffect } from "react";
import Guests from "./guests";
import Location from "./location";

export default function Modal({
  modal,
  setModal,
  search,
  setSearch,
  guests,
  setGuests,
  data1,
}) {
  // Estados locales para los inputs
  const [localSearch, setLocalSearch] = useState(search);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [loc, setLoc] = useState(true);
  const [button, setButton] = useState(false);

  // Estado local para guests
  const localGuests = count1 + count2;

  // Sincroniza los valores locales cuando se abre el modal
  useEffect(() => {
    if (modal) {
      setLocalSearch(search);
      setCount1(0);
      setCount2(0);
    }
  }, [modal, search]);

  // Handler para el botón de búsqueda
  const handleSearch = () => {
    setSearch(localSearch);
    setGuests(localGuests);
    setModal(false);
  };

  return (
    <div className={`${modal ? "absolute" : "hidden"}`}>
      <div className="bg-white w-full flex flex-col h-[80%] md:h-[60%] fixed top-0 ">
        <div>
          <div className="flex md:hidden justify-between mx-5 mt-6 items-center pb-4">
            <h3 className="text-[12px] font-bold">Edit your search</h3>
            <button
              onClick={() => setModal(!modal)}
              className="font-bold text-lg hover:text-red-500/70"
            >
              X
            </button>
          </div>
          <form className="grid place-items-center md:flex md:justify-center md:items-center md:mx-25 md:mt-20">
            <div className="flex flex-col w-[90%]  focus-within:border-black  border border-gray-100 shadow p-2 rounded-2xl md:rounded-l-2xl md:rounded-r-none ">
              <label className="text-[10px] font-semibold">LOCATION</label>
              <input
                onClick={() => {
                  setButton(false);
                  setLoc(true);
                }}
                className="border-none focus:outline-none"
                type="text"
                name="location"
                id="location"
                placeholder="Add location"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[90%]  focus-within:border-black border border-gray-100 shadow p-2 rounded-2xl md:rounded-none ">
              <label className="text-[10px] font-semibold">GUESTS</label>
              <input
                onClick={() => {
                  setButton(true);
                  setLoc(false);
                }}
                className="border-none focus:outline-none"
                type="text"
                name="guests"
                id="guests"
                placeholder="Add guests"
                value={localGuests > 0 ? localGuests + " guests" : ""}
                readOnly
              />
            </div>
            <div className="hidden md:flex flex-col focus-within:border-black  border border-gray-100 shadow p-1.5 rounded-r-2xl ">
              <button
                onClick={handleSearch}
                type="button"
                className="flex text-white items-center justify-center bg-red-500/80 gap-4 hover:bg-red-500/90  rounded-full  px-6 py-1.5 text-center me-2 mb-2 "
              >
                <svg
                  className="w-4 h-4 -white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
                search
              </button>
            </div>

            <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button
                type="button"
                onClick={handleSearch}
                className="flex text-white items-center justify-center bg-red-500/80 gap-4 hover:bg-red-500/90  rounded-full  px-6 py-1.5 text-center me-2 mb-2 "
              >
                <svg
                  className="w-4 h-4 -white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
                search
              </button>
            </div>
          </form>
        </div>
        <div className="ml-4 md:w-full md:ml-30">
          <Location val={localSearch} setVal={setLocalSearch} loc={loc} />
        </div>
        <div className="ml-4 md:w-full md:ml-110 lg:ml-180">
          <Guests
            button={button}
            count1={count1}
            count2={count2}
            setCount1={setCount1}
            setCount2={setCount2}
          />
        </div>
      </div>

      <div
        onClick={() => setModal(!modal)}
        className="bottom-0 w-full h-[20%] md:h-[40%] bg-blue-950/40 fixed"
      ></div>
    </div>
  );
}
