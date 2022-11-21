import styled from "styled-components";

const CartStyle = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: fit-content;
  width: 90%;
  background-color: var(--color-primary);
  z-index: 1;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: openingCart 1s ease;

  .closingCart {
    animation: closeCart 1s ease;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 25px 20px;

    h2 {
        color: white;

        font-size: 27px;
        font-weight: 700;

        max-width: 75%;
    }

    
    button {
      background-color: black;
      border-radius: 50%;
      border: none;
      color: var(--color-primary);
      
      width: 50px;
      height: 50px;
      
      font-size: 30px;
      font-weight: 100;
    }

  }
  .productsCart {
    ul {
      max-height: 60vh;
      overflow: auto;
      padding: 10px 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .totalCart {
    display: flex;
    justify-content: space-between;

    padding: 10px 10px;

    color: white;

    font-size: 28px;
    font-weight: 700;
  }

  .btnCartFinish {
    width: 100%;
    height: 100%;
    background-color: black;
    text-align: center;
    color: white;
    height: 50px;
    border: none;
    font-size: 20px;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    width: 40%;

    .btnCartFinish {
      height: 80px;
    }
  }

  @media screen and (min-width: 1380px){
    width: 30%;
    
    
    .productsCart {
      ul {
        height: 80%;
        max-height: 75vh;
      }
    }
    .btnCartFinish {
      height: 100px;
    }
  }

  @keyframes openingCart {
    0% {
      right: -100%;
    }

    100% {
      right: 0;
    }
  }

  @keyframes closeCart {
    0% {
      right: 0;
      background-color: red;
    }

    100% {
      right: -100%;
    }
  }
`;

export default CartStyle;
