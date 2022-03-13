import { products } from "../../Data";
import {
  ADD_PRODUCT,
  ADD_CATEGORY,
  CLICK_CHECKBOX,
  REMOVE_PRODUCT,
  CATEGORY_CHECKBOX,
  REMOVE_CATEGORY,
} from "../../ActionType";

const Initial_State = {
  products: products,
  category_content: [{ name: "Category 1", id: 1, category_products: [] }],
  remove_product: [],
  add_category: [],
};

export const reducer = (state = Initial_State, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newCategories = [...state.category_content];
      const categoryIndex = state.category_content.findIndex(
        (c) => c.id === action.payload
      );

      const newProductsA = state.products.filter((p) => !p.isChecked);

      newCategories[categoryIndex].category_products = [
        ...newCategories[categoryIndex].category_products,
        ...state.products
          .filter((p) => p.isChecked)
          .map((pr) => {
            pr.isChecked = false;
            return pr;
          }),
      ];
      return {
        ...state,
        category_content: newCategories,
        products: newProductsA,
      };
    case REMOVE_PRODUCT:
      const categoryList = [...state.category_content];
      const catInd = categoryList.findIndex((c) => c.id === action.payload);
      const goBackToProducts = categoryList[catInd].category_products
        .filter((p) => p.isChecked)
        .map((p) => ({ ...p, isChecked: false }));
      categoryList[catInd].category_products = categoryList[
        catInd
      ].category_products.filter((p) => !p.isChecked);
      return {
        ...state,
        category_content: categoryList,
        products: [...state.products, ...goBackToProducts].sort(
          (a, b) => a.id - b.id
        ),
      };
    case ADD_CATEGORY:
      const newCatI = state.category_content.length + 1;
      const newCats = [
        ...state.category_content,
        { name: `Category ${newCatI}`, id: newCatI, category_products: [] },
      ];
      return {
        ...state,
        category_content: newCats,
      };
    case CLICK_CHECKBOX:
      const newProducts = [...state.products];
      const index = state.products.findIndex((p) => p.id === action.payload);
      newProducts[index].isChecked = !newProducts[index].isChecked;
      return {
        ...state,
        products: newProducts,
      };
    case CATEGORY_CHECKBOX:
      const categories = [...state.category_content];
      const catIndex = state.category_content.findIndex(
        (c) => c.id === action.categoryId
      );
      const product = categories[catIndex].category_products.find(
        (p) => p.id === action.payload
      );
      product.isChecked = !product.isChecked;
      return {
        ...state,
        category_content: categories,
      };
    case REMOVE_CATEGORY:
      const newCategoryList = [...state.category_content];
      const removeInd = newCategoryList.findIndex(
        (c) => c.id === action.payload
      );

      const backToProducts = newCategoryList[removeInd].category_products.map(
        (p) => ({
          ...p,
          isChecked: false,
        })
      );
      newCategoryList.splice(removeInd, 1);
      return {
        ...state,
        category_content: newCategoryList,
        products: [...state.products, ...backToProducts].sort(
          (a, b) => a.id - b.id
        ),
      };
    default:
      return state;
  }
};
