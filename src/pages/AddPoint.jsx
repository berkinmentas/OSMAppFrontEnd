import React, { useState,useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import BackArrow from "../components/BackArrow";

const AddPointPanel = ({ coord }) => {
  const [xCoord, setXCoord] = useState('');
  const [yCoord, setYCoord] = useState('');

  useEffect(() => {
    if (coord) {
      setXCoord(coord[0]);
      setYCoord(coord[1]);
    }
  }, [coord]);
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "865px" }}
    >
      <div className="card" style={{ width: "800px", height: "500px" }}>
        <div className="card-header pt-4">
          <div>
            <BackArrow />
          </div>
          <h5 className="card-title pt-2">Add Point</h5>
        </div>
        <div className="card-body">
          <div className="row mb-4">
            <Input
              labelText="Name"
              inputType="text"
              placeholder="Enter your location name"
              inputName="Name"
            />
          </div>
          <div className="row mb-4">
            <Input
              labelText="Number"
              inputType="text"
              placeholder="Enter your location number"
              inputName="Number"
            />
          </div>
          <div className="row mb-4">
            <div className="col-6">
              <Input
                labelText="X Coordinate"
                inputType="text"
                placeholder="Enter your location x coordinate"
                inputName="Xcoordinate"
                value={xCoord} onChange={(e) => setXCoord(e.target.value)}              />
            </div>
            <div className="col-6">
              <Input
                labelText="Y Coordinate"
                inputType="text"
                placeholder="Enter your location y coordinate"
                inputName="Ycoordinate"
                value={yCoord} onChange={(e) => setYCoord(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              buttontext="Add Point"
              buttonStyle={{ width: "130px", height: "40px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPointPanel;
