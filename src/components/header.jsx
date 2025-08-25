export default function Header({ modal, setModal }) {
  return (
    <>
      <nav className="h-full  md:flex md:justify-between items-baseline ">
        <div className="">
          <img
            src="https://joregesosa.github.io/windbnb_challenge/assets/logo-f7862584.svg"
            alt="Windbnb logo"
          />
        </div>
        <div className="h-full flex justify-center items-center mt-7 p-2">
          <div
            className="flex  w-[90%] md:w-full"
            onClick={() => setModal(!modal)}
          >
            <button className="border border-gray-100 w-full shadow p-4 px-6 rounded-l-2xl text-center text-gray-400">
              Add location
            </button>
            <button className="border border-gray-100 w-full shadow p-2 px-6  text-center text-gray-400">
              Add guests
            </button>
            <div className="border border-gray-100 shadow  rounded-r-2xl  flex justify-center items-center ">
              <img
                className="w-4.5 mx-4"
                src="search-svgrepo-com.svg"
                alt="search icon"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

{
}
