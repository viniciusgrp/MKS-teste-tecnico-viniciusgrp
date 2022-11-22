import styled from 'styled-components';

const CartProduct = styled.li`
    width: 70%;
    height: 180px;
    margin: 0 auto;
    background-color: white;
    padding: 10px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .cartProductImg {
        max-width: 100%;
        height: 80px;
        position: relative;
        display: flex;
        justify-content: center;

        img {
            max-width: 100%;
            max-height: 100%;
        }

        button {
            position: absolute;
            right: 0;
            top: 0;
            border: none;
            background-color: transparent;
            font-size: 42px;
        }
    }

    
    .productCartInfos {
        h2 {
            font-weight: 400;
            height: 1rem;
            overflow: hidden;
        }
    }

    .productCartBottom {
        display: flex;
        justify-content: space-between;


        .productCartQuantity {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: row;
            width: 30%;

            border: 1px solid grey;
            border-radius: 8px;
            
            button {
                height: 100%;
                border: none;
                border-radius: 8px;
                font-size: 22px;
                background-color: transparent;
            }
        }
    
        .productPrice {
            display: flex;
            align-items: center;

            background-color: var(--grey);
            color: white;

            padding: 10px 10px ;
            border-radius: 5px;
            
            width: fit-content;
        }
    }

    @media screen and (min-width: 768px){
        flex-direction: row;
        position: relative;
        justify-content: space-between;
        max-height: 100px;
        

        .cartProductImg {
            position: initial;

            .cartBtnRemove {
                position: absolute;
                right: -5px;
                top: -5px;
                background-color: black;
                color: white;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                font-size: 12px;
            }
        }

        .productCartInfos {
            height: 100%;
            display: flex;
            align-items: center;
        }

        .productCartBottom {
            align-items: center;

            .productCartQuantity {
                width: 50%;
                height: fit-content;

            }
    
            .productPrice {
                background-color: transparent;
                color: black;
                font-weight: 700;
            }
        }
    }
`

export default CartProduct