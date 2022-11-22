import styled from 'styled-components';
const ProductList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    padding-bottom: 10px;

    @media screen and (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
        margin: 2rem auto 0;
    }
`

export default ProductList