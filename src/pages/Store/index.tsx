import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/ProductCard';
import Api from '../../requests';

const Store = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        async function getProducts() {
            const { data } = await Api.get('products?page=1&rows=8&sortBy=id&orderBy=ASC')
            console.log(data)
            setProducts(data)
        }

        getProducts()
    },[])

    return (
        <>
            <Header />
            {products?.length && products.map((product) => <Card elem={product} />) }
        </>
    )
}

export default Store