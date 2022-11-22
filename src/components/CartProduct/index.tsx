import { useDispatch } from "react-redux";
import CartProductStyle from "../../styles/CartProduct";
import { addProduct, removeProduct, deleteProduct } from "../../store/modules/addProduct/action";

interface IProduct {
  product: {
    brand: string;
    createdAt: string;
    description: string;
    id: number;
    name: string;
    photo: string;
    price: string;
    updatedAt: string;
    quantity?: number;
    reduce(arg0: (acc: any, act: any) => any, arg1: number): unknown;
  map(
    arg0: (product: any, index: any) => JSX.Element
  ): import("react").ReactNode;
  };
}

const CartProduct = ({ product }:IProduct) => {
  const productPrice: string = Number(product.price).toFixed()

  const dispatch = useDispatch();
 
  const handleAddProduct = () => dispatch(addProduct(product));

  const handleRemoveProduct = () => dispatch(removeProduct(product));

  const handleDeleteProduct = () => dispatch(deleteProduct(product));

  return (
    <CartProductStyle key={product.id}>
      <div className="cartProductImg">
        <img src={product.photo} alt="Produto" />
        <button className="cartBtnRemove" onClick={handleDeleteProduct}>X</button>
      </div>
      <div className="productCartInfos">
        <h2>{product.name}</h2>
      </div>
      <div className="productCartBottom">
        <div className="productCartQuantity">
          <button onClick={handleRemoveProduct}>-</button>
          <p>{product.quantity}</p>
          <button  onClick={handleAddProduct}>+</button>
        </div>
        <p className="productPrice">{productPrice}</p>
      </div>
    </CartProductStyle>
  );
};

export default CartProduct;
