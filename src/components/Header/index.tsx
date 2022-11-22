import Cart from '../../img/cart.png'
import HeaderStyle from '../../styles/Header'
import { showModal } from "../../store/modules/cartModal/action";
import { useDispatch, useSelector } from 'react-redux';

interface IState {
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
    }
}

const Header = () => {
    const productCart = useSelector((state:IState) => state.product);
    console.log('header', productCart)

    const items: any = productCart.reduce((acc, act) => acc += act.quantity, 0)
    
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