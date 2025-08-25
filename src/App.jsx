import { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Modal from "./components/modal";

function App() {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [guests, setGuests] = useState(0);
  const [data1, setData1] = useState([]);

  return (
    <>
      <Modal
        modal={modal}
        setModal={setModal}
        search={search}
        setSearch={setSearch}
        guests={guests}
        setGuests={setGuests}
        data1={data1}
      />
      <div className="w-full flex flex-col justify-center items-center mt-6">
        <div className="w-[90%] lg:w-[80%]">
          <Header modal={modal} setModal={setModal} />
          <Main
            search={search}
            guests={guests}
            data1={data1}
            setData1={setData1}
          />
        </div>
      </div>
    </>
  );
}

export default App;
