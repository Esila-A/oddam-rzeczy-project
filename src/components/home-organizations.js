import ReactPaginate from "react-paginate";
import { useState } from "react";
import decoration from "../assets/Decoration.svg"

const HomeOrganizations = () => {

  return (
    <div className="organizations" id="#home-organizations">
      <h1 className="organizations_heading">Komu pomagamy?</h1>
      <img src={decoration} alt="decoration" className="organizations_decoration"/>
      <div>
        
      </div>
    </div>
  )
}

export default HomeOrganizations;
