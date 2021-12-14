import React from "react";
import Gender from "./Category/gender";
import Species from "./Category/species";
import Status from "./Category/status";

const Filter = ({setStatus,setPageNumber}) => {
  return (
    <div className="col-3">
      <div className="text-center">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} /> <Species /> <Gender />
      </div>
    </div>
  );
};
export default Filter;
