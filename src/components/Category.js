import React from "react";
import { FiCodesandbox } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  addCategory,
  removeProduct,
  handleCategoryProductCheck,
  removeCategory,
} from "../redux/actions";

const Category = () => {
  const dispatch = useDispatch();
  const { category_content, products } = useSelector((state) => state);

  const selectedProductsLength = products.filter((p) => p.isChecked).length;
  const buttonNumber = selectedProductsLength > 0 ? selectedProductsLength : "";
  const suffix = selectedProductsLength > 1 ? "s" : "";
  const colorClass = selectedProductsLength > 0 ? "colored" : "";

  const onCategoryProductChange = (id, categoryId) => {
    dispatch(handleCategoryProductCheck(id, categoryId));
  };

  return (
    <div className="category-container">
      {category_content.map((category) => {
        const selectedRemoveProductsLength = category.category_products.filter(
          (pr) => pr.isChecked
        ).length;
        const buttonRemoveNumber =
          selectedRemoveProductsLength > 0 ? selectedRemoveProductsLength : "";
        const suffixRemove = selectedRemoveProductsLength > 1 ? "s" : "";
        const coloredClass =
          selectedRemoveProductsLength > 0 ? "coloredRemove" : "";

        return (
          <div className="category">
            <React.Fragment key={category.name}>
              <label className="category-name">
                <FiCodesandbox className="category-logo" /> {category.name}
              </label>
              <div className="category-content">
                {category.category_products.map((product) => (
                  <div
                    className="form-check form-check-inline"
                    key={product.name}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={product.isChecked}
                      onChange={() =>
                        onCategoryProductChange(product.id, category.id)
                      }
                      key={product.id}
                    />
                    <label key={product.name}>{product.name}</label>
                  </div>
                ))}
              </div>
              <div className="add-buttons">
                <div className="add-products-button">
                  <button
                    className={`add-products-buttons ${colorClass}`}
                    onClick={() => {
                      dispatch(addProduct(category.id));
                    }}
                  >
                    Add {buttonNumber} Product{suffix}
                  </button>
                  <button
                    className={`add-remove-buttons ${coloredClass} `}
                    onClick={() => {
                      dispatch(removeProduct(category.id));
                    }}
                  >
                    Remove {buttonRemoveNumber} Product{suffixRemove}
                  </button>
                </div>
                <button
                  className="remove-category-buttons "
                  onClick={() => {
                    if (category_content.length > 1) {
                      dispatch(removeCategory(category.id));
                    }
                  }}
                >
                  Remove Category
                </button>
              </div>
            </React.Fragment>
          </div>
        );
      })}
      <button
        onClick={() => {
          dispatch(addCategory());
        }}
        className="add-category-button"
      >
        Add Category
      </button>
    </div>
  );
};

export default Category;
