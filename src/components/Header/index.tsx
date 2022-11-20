import Cart from '../../img/cart.png'
import HeaderStyle from '../../styles/Header'

const Header = () => {
    return (
        <HeaderStyle>
            <h1>MKS<span> Sistemas</span></h1>
            <button id="headerBtnCart"><img src={Cart} alt="Botão do carrinho" /><p>0</p></button>
        </HeaderStyle>
    )
}

export default Header