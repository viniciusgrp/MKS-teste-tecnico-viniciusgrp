import styled from 'styled-components';

const Card = styled.li`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 250px;
    margin: 0 auto;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 10px;

    .productImg {
        width: 100%;
        height: 150px;

        display: flex;
        justify-content: center;

        img {
            max-height: 100%;
        }
    }

    .productInfos {
        display: flex;
        width: 90%;
        margin: 0 auto;
        gap: 1rem;
        height: 2em;
        overflow: hidden;

        h2 {
            width: 70%;
            font-weight: 400;
            font-size: 16px;
        }

        p {
            display: flex;
            align-items: center;

            background-color: var(--grey);
            color: white;

            padding: 10px 10px ;
            border-radius: 5px;
            
            width: fit-content;
        }
    }

    p {
        font-size: 10px;
        font-weight: 300;
        width: 90%;
        margin: 0 auto;
    }

    .description {
        height: 3em;
        overflow: hidden;
    }

    @media screen and (min-width: 768px){
        width: 22%;
        
    }
`

export default Card