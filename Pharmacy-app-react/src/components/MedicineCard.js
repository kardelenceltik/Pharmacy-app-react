import axios from "axios";
import React from "react";
import { useContext } from "react";

import MedicineContext from "../context/MedicineContext";

const MedicineCard = ({ id, stock, name, description, photoUrl, price }) => {
  const { getList } = useContext(MedicineContext);
  // for increase stock operation
  const increaseStockHandler = () => {
    axios
      .patch(`http://localhost:6565/medicene/${id}`, {
        stock: stock + 1,
      })
      .then((resp) => {
        getList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // for decrease stock operation

  const decreaseStockHandler = () => {
    axios
      .patch(`http://localhost:6565/medicene/${id}`, {
        stock: stock - 1,
      })
      .then((response) => {
        getList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // for delete product operation

  const deleteMedicineHandler = () => {
    axios.delete(`http://localhost:6565/medicene/${id}`).then((response) => {
      getList();
    });
  };

  // for update product price operation

  const updatePriceHandler = (e) => {
    console.log(e.target.value);
    axios
      .patch(`http://localhost:6565/medicene/${id}`, {
        price: e.target.value,
      })
      .then((response) => {
        getList();
      });
  };
  return (
    <div className="card-area ">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={photoUrl}
              id="medicine-img"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="row">
                <div className="col-md-9">
                  <h3 className="card-title mt-2 ">{name}</h3>
                </div>
                <div className="col-md-3">
                  <button
                    id="deleteBtn"
                    className="btn-sm btn-secondary"
                    onClick={deleteMedicineHandler}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <p className="card-text small mt-2">{description}</p>

              <div className="stock-group mt-5">
                <div className="row">
                  <div className="col-md-9">
                    <button
                      className="btn-sm btn-outline-dark "
                      onClick={decreaseStockHandler}
                    >
                      -
                    </button>

                    <input
                      className="stockInput"
                      type="text"
                      readOnly={true}
                      value={stock}
                    />

                    <button
                      className="btn-sm btn-outline-dark"
                      onClick={increaseStockHandler}
                    >
                      +
                    </button>
                  </div>
                  <div className="col-md-3">
                    <div class="input-group mb-3">
                      <span class="input-group-text">$</span>
                      <input
                        type="number"
                        class="form-control text-center"
                        aria-label="Amount (to the nearest dollar)"
                        value={price}
                        onChange={updatePriceHandler}
                      />
                      <span class="input-group-text">.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
