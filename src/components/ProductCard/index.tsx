import CardStyle from "../../styles/CardProduct";
import Bag from "../../img/bag.png";
import { ButtonPrimary } from "../../styles/Buttons";

const Card = ({ product, index }) => {
  const priceNumber = Number(product.price).toFixed();

  return (
    <CardStyle key={index}>
        <div className="productImg">
          <img src={product.photo} alt="Foto do produto" />
        </div>
        <div className="productInfos">
          <h2>{product.name}</h2>
          <p>R${priceNumber}</p>
        </div>
        <p className="description">{product.description}</p>
        <ButtonPrimary>
          <img src={Bag} alt="Icone sacola" /> Comprar
        </ButtonPrimary>
    </CardStyle>
  );
};

export default Card;
