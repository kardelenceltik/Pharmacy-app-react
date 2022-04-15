import React from "react";
import MedicineCard from "./MedicineCard";
import { useContext } from "react";
import MedicineContext from "../context/MedicineContext";
const MedicineList = () => {
  const { medicineList } = useContext(MedicineContext);
  return (
    <div>
      {/* generate medicine card for each product */}
      {medicineList.map((medicine) => {
        return (
          <MedicineCard
            key={medicine.id}
            stock={medicine.stock}
            name={medicine.name}
            description={medicine.description}
            photoUrl={medicine.photoUrl}
            id={medicine.id}
            price={medicine.price}
          />
        );
      })}
    </div>
  );
};

export default MedicineList;
