import CartStyle from "../../styles/Cart"

const Cart = () => {
    return (
        <CartStyle>
            <header>
                <h2>Carrinho de compras</h2>
                <button>X</button>
            </header>
            <section className="productsCart">

            </section>
            <div className="totalCart">
            <p>Total:</p>
            <p>R$5.000,00</p>
            <button>Finalizar Compra</button>
            </div>
        </CartStyle>
    )
}

export default Cart