import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../../components/Cart";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/ProductCard";
import CardSkeleton from "../../components/ProductCardSkeleton";
import Api from "../../requests";
import ProductList from "../../styles/ProductList";

export interface IApiResponse {
  products: {
    reduce(arg0: (acc: number, act: number) => number, arg1: number): number;
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
  };
}

export interface IProducts {
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

interface IState {
  cartModal: boolean
}

const Store = () => {
  const [products, setProducts] = useState<IProducts | null>(null);

  const showCart = useSelector((state:IState) => state.cartModal);

  useEffect(() => {
    async function getProducts() {
      const { data } = await Api.get<IApiResponse>(
        "products?page=1&rows=8&sortBy=id&orderBy=ASC"
      );
      setProducts(data.products);
    }

    getProducts();
  }, []);

  return (
    <>
      <Header />
      <ProductList>
        {products ? (
          products.map((product:IProducts) => (
            <Card product={product} name={""} quantity={0} />
          ))
        ) : (
          <CardSkeleton />
        )}
      </ProductList>
      {showCart && <Cart />}
      <Footer />
    </>
  );
};

export default Store;
