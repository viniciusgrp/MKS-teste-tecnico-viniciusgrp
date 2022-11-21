import CardStyle from "../../styles/CardProduct";
import Bag from "../../img/bag.png";
import { ButtonPrimary } from "../../styles/Buttons";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/modules/addProduct/action";

export interface IProduct {
  reduce(arg0: (acc: any, act: any) => any, arg1: number): unknown;
  map(
    arg0: (product: any, index: any) => JSX.Element
  ): import("react").ReactNode;
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

const Card = ({ product }:IProduct) => {
  const priceNumber = Number(product.price).toFixed();
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(product))
    
  };

  return (
    <CardStyle key={product.id}>
        <div className="productImg">
          <img src={product.photo} alt="Foto do produto" />
        </div>
        <div className="productInfos">
          <h2>{product.name}</h2>
          <p>R${priceNumber}</p>
        </div>
        <p className="description">{product.description}</p>
      <ButtonPrimary onClick={handleAddProduct}>
          <img src={Bag} alt="Icone sacola" /> Comprar
      </ButtonPrimary>
    </CardStyle>
  );
};

export default Card;
