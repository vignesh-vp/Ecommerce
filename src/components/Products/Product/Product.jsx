import React from 'react';
import "./Product.scss";
import {useNavigate} from "react-router-dom"
const Product = ({ id, data }) => {
  const navigate=useNavigate()
  // Check if data and data.img are defined before rendering
  if (!data || !data.img || !data.img.data || data.img.data.length === 0) {
    return null; // or you can return an error message or placeholder
  }
  return (
    <div className="product-card" onClick={() => navigate("/product/"+id)}>
      <div className="thumbnail">
        {/* Check if data.img.data[0].attributes.url is defined before using it */}
        {data.img.data[0].attributes.url ? (
          <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />
        ) : null}
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#x20B9;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
