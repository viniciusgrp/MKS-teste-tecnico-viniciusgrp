import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartStyle from "../../styles/Cart";
import CartProduct from "../CartProduct";
import { hideModal } from "../../store/modules/cartModal/action";
import {IProducts} from '../../pages/Store'
import './index.css'

interface IState {
  product: {
    reduce(arg0: (acc: any, act: any) => any, arg1: number): unknown;
    map(
      arg0: (product: any, index: any) => JSX.Element
    ): import("react").ReactNode;
    brand: string;
    createdAt: string;
    description: string;
    id: number;
    name: string;
    photo: string;
    price: string;
    updatedAt: string;
  }
}

const Cart = () => {
  const [animation, setAnimation] = useState<boolean>(true)
  const productCart: IProducts = useSelector((state:IState) => state.product);
  const total: any = productCart.reduce((acc, act) => acc += (act.price * act.quantity), 0)

  const dispatch = useDispatch();

  const handleHideModal = () => {
    setAnimation(false)
    setTimeout(() => dispatch(hideModal()), 1100) };

  return (
    <div className="cart openCart">
      <CartStyle className={animation ? 'openCart' : 'closeCart'}>
      <div className="topCart">
      <header>
        <h2>Carrinho de compras</h2>
        <button onClick={handleHideModal}>X</button>
      </header>
      <section className="productsCart">
        <ul>
          {productCart?.map((product:IProducts) => (
            <CartProduct product={product} />
          ))}
        </ul>
      </section>
      </div>
      <div className="bottomCart">
      <div className="totalCart">
        <p>Total:</p>
        <p>{total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}</p>
      </div>
      <button className="btnCartFinish">Finalizar Compra</button>
      </div>
    </CartStyle>
    </div>
  );
};

export default Cart;
