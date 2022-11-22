import { IProducts } from './../../../pages/Store/index';

export const addProduct = (product:IProducts) => {
    return {
      type: "ADD_PRODUCT",
      product,
    };
};
  
export const removeProduct = (product:IProducts) => {
    return {
      type: "REMOVE_PRODUCT",
      product,
    };
};

export const deleteProduct = (product:IProducts) => {
    return {
      type: "DELETE_PRODUCT",
      product,
    };
};