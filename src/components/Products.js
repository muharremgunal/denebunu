import React from "react";
import { FiBox } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { checkboxs } from "../redux/actions";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  const handleCheckbox = (id) => {
    dispatch(checkboxs(id));
  };

  return (
    <div className="product">
      <label className="available-product">
        <FiBox className="available-logo" /> Available Products
      </label>
      {products.map((product) => (
        <div>
          <div className="form-check form-check-inline">
            <input
              checked={product.isChecked}
              onClick={() => handleCheckbox(product.id)}
              className="form-check-input"
              type="checkbox"
              key="product"
            />
            <label key={product.name}>{product.name}</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
