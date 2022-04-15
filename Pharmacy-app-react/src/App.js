import "./App.css";
import axios from "axios";
import MedicineList from "./components/MedicineList";
import MedicineAddModal from "./components/MedicineAddModal";
import MedicineContext from "./context/MedicineContext";
import { useLayoutEffect, useState } from "react";

function App() {
  const [medicineList, setMedicineList] = useState([]);
  useLayoutEffect(() => {
    getList();
  }, []);
  const getList = () => {
    axios.get("http://localhost:6565/medicene").then((response) => {
      setMedicineList(response.data); //
    });
  };

  return (
    <MedicineContext.Provider
      value={{ medicineList: medicineList, getList: getList }}
    >
      <nav className="navbar navbar-dark bg-dark"> Pharmacy</nav>

      <div className="container">
        <header className="header">Medicines</header>
        <div className="row">
          <div className="col-md-12">
            <button
              id="addBtn"
              className="btn btn-dark  "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add
            </button>
          </div>
        </div>

        <MedicineList />
        <MedicineAddModal />
      </div>
    </MedicineContext.Provider>
  );
}

export default App;
