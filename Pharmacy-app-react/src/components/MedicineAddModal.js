import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import MedicineContext from "../context/MedicineContext";

const MedicineAddModal = () => {
  const { getList } = useContext(MedicineContext);
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  // for new product operation
  const addMedicineHandler = () => {
    axios
      .post("http://localhost:6565/medicene", {
        name: name,
        stock: stock,
        price: price,
        photoUrl: photoUrl,
        description: description,
      })
      .then((response) => {
        // for clear inputs
        setName("");
        setStock("");
        setPhotoUrl("");
        setPrice("");
        setDescription("");
        getList();
      });
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Medicine Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Medicine name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Stock"
                value={stock}
                onChange={(e) => {
                  setStock(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Photo Url"
                value={photoUrl}
                onChange={(e) => {
                  setPhotoUrl(e.target.value);
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={addMedicineHandler}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineAddModal;
