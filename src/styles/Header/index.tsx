import styled from "styled-components";

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 50px;
    background-color: var(--color-primary);

    padding: 0 5%;

    
    /* font-family: 'Montserrat', sans-serif; */
    
    h1 {
        color: white;
        font-size: 40px;
        font-weight: 600;

        span {
            font-size: 20px;
            font-weight: 300;
        }
    }
    

    #headerBtnCart {
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 8px;
        padding: 5px 10px;

        font-weight: 700;
        font-size: 12px;

        border: none;

        img {
            max-height: 15px;
        }
    }

    @media screen and (min-width: 768px){
        height: 80px;

        
        #headerBtnCart {
            font-size: 18px;
            padding: 10px 20px;

            img {
                max-height: none;
            }
        }
    }
`

export default Header