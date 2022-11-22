import { IProduct } from "../../../components/ProductCard";

const cartReducer = (state:IProduct[] = [], action: any) => {
  let { product } = action;
  console.log(action);
  switch (action.type) {
      case "ADD_PRODUCT":
          const existes = state.find((elem:IProduct) => elem.name === product.name);
      if (existes) {
        existes.quantity++;
        return [...state];
      } else {
        product.quantity = 1;
        product.price = Number(product.price);
        return [...state, product];
      }
      case "REMOVE_PRODUCT":
        const existe = state.find((elem:IProduct) => elem.name === product.name);
      if (existe) {
        if (existe.quantity > 1) {
          existe.quantity--;
          return [...state];
        } else {
          const remove = state.filter((elem:IProduct) => elem.name !== existes?.name);
          return remove;
        }
      }
      break
      case "DELETE_PRODUCT":
      const alreadyExistes = state.find((elem:IProduct) => elem.name === product.name);
      if (alreadyExistes) {
        const remove = state.filter((elem:IProduct) => elem.name !== alreadyExistes.name);
        return remove;
      }
      break
    default:
      return state;
  }
};

export default cartReducer;
