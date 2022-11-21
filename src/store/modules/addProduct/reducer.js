const cartReducer = (state = [], action) => {
  let { product } = action;
  let existes
  console.log(action);
  switch (action.type) {
      case "ADD_PRODUCT":
          existes = state.find((elem) => elem.name === product.name);
      if (existes) {
        existes.quantity++;
        return [...state];
      } else {
        product.quantity = 1;
        product.price = Number(product.price);
        return [...state, product];
      }
      case "REMOVE_PRODUCT":
        existes = state.find((elem) => elem.name === product.name);
      if (existes?.quantity > 1) {
        existes.quantity--;
        return [...state];
      } else {
        const remove = state.filter((elem) => elem.name !== existes.name);
        return remove;
      }
      case "DELETE_PRODUCT":
        existes = state.find((elem) => elem.name === product.name);
      const remove = state.filter((elem) => elem.name !== existes.name);
      return remove;
    default:
      return state;
  }
};

export default cartReducer;
