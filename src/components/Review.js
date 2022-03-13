import React from "react";
import { FiSave } from "react-icons/fi";
import { useSelector } from "react-redux";

const Review = () => {
  const { category_content, products } = useSelector((state) => state);
  return (
    <div className="review">
      <label className="review-header">
        <FiSave className="review-logo" /> Review
      </label>
      <div>Available Products:{products.length}</div>
      <div>Categories:{category_content.length}</div>
      <br />
      <div>Category Numbers</div>
      <div>
        {category_content.map((cat) => (
          <div key={cat.name}>
            {cat.name}: {cat.category_products.length} product
            {cat.category_products.length > 1 ? "s" : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
