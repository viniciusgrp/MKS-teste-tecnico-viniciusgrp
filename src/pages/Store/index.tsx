import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/ProductCard';
import Api from '../../requests';
import ProductList from '../../styles/ProductList';

const Store = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        async function getProducts() {
            const { data } = await Api.get('products?page=1&rows=8&sortBy=id&orderBy=ASC')
            console.log(data)
            setProducts(data.products)
        }

        getProducts()
    },[])

    return (
        <>
            <Header />
            <ProductList>
                {products && products.map((product, index) => <Card product={product} index={index} />) }
            </ProductList>
            <Footer/>
        </>
    )
}

export default Store