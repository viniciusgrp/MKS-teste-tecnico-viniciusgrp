import Cart from '../../img/cart.png'
import HeaderStyle from '../../styles/Header'
import { showModal } from "../../store/modules/cartModal/action";
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const productCart = useSelector((state) => state.product);
    console.log('header', productCart)

    const items = productCart.reduce((acc, act) => acc += act.quantity, 0)
    
    const dispatch = useDispatch();

    const handleShowModal = () => dispatch(showModal());

    return (
        <HeaderStyle>
            <h1>MKS<span> Sistemas</span></h1>
            <button onClick={handleShowModal} id="headerBtnCart"><img src={Cart} alt="Botão do carrinho" /><p>{items}</p></button>
        </HeaderStyle>
    )
}

export default Header