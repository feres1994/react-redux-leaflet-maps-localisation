import React from "react";
import Maps from "./map";
import RegionContainer from "./regionContainer";
export default function MainLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9 col-md-8">
          <Maps />
        </div>
        <div className="col-lg-3 col-md-4 ">
          <RegionContainer />
        </div>
      </div>
    </div>
  );
}
