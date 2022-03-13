import {
  ADD_CATEGORY,
  ADD_PRODUCT,
  CATEGORY_CHECKBOX,
  CLICK_CHECKBOX,
  REMOVE_PRODUCT,
  REMOVE_CATEGORY,
} from "../../ActionType";

export const addProduct = (product) => {
  return { type: ADD_PRODUCT, payload: product };
};
export const removeProduct = (id) => {
  return { type: REMOVE_PRODUCT, payload: id };
};

export const addCategory = () => {
  return { type: ADD_CATEGORY };
};

export const checkboxs = (id) => {
  return { type: CLICK_CHECKBOX, payload: id };
};

export const handleCategoryProductCheck = (id, categoryId) => {
  return { type: CATEGORY_CHECKBOX, payload: id, categoryId: categoryId };
};

export const removeCategory = (id) => {
  return { type: REMOVE_CATEGORY, payload: id };
};
