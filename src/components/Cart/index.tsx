import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartStyle from "../../styles/Cart";
import CartProduct from "../CartProduct";
import { hideModal } from "../../store/modules/cartModal/action";
import {IProducts} from '../../pages/Store'
import { IProduct } from "../ProductCard";

const Cart = () => {
  const [animation, setAnimation] = useState<boolean>(false)
  const productCart: IProducts = useSelector((state) => state.product);
  console.log(productCart)
  const total: any = productCart.reduce((acc, act) => acc += (act.price * act.quantity), 0)

  const dispatch = useDispatch();

  const handleHideModal = () => {
    setAnimation(true)
    setTimeout(() => dispatch(hideModal()), 1100) };

  useEffect(() => {
    console.log(total)
  }, [total])

  return (
    <CartStyle className={!animation ? "openingCart" : "closingCart"}>
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
  );
};

export default Cart;
