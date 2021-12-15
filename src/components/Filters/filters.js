import React from "react";
import Gender from "./Category/gender";
import Species from "./Category/species";
import Status from "./Category/status";

const Filter = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus(""); setPageNumber(""); setGender(""); setSpecies("");
    window.location.reload(false)
  }
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};
export default Filter;
