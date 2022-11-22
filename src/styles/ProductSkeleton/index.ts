import styled from "styled-components";

const Skeleton = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin: 0 auto;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 10px;
  background-color: #dddddd;
  position: relative;

  .productImg {
    width: 100%;
    height: 150px;

    display: flex;
    justify-content: center;

    background-color: #cccccc;
    border-radius: 5px 5px 0 0;

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

      background-color: #cccccc;
      color: white;

      padding: 10px 10px;
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

  button {
    background-color: #cccccc;
    height: 40px;
    border-radius: 0px 0px 8px 8px;
    border: none;
  }

  @media screen and (min-width: 768px) {
    width: 22%;
    max-width: 22%;
    overflow: hidden;
  }

  .ligth {
    height: 100%;
    width: 100%;
    background-color: #eeee;
    opacity: 0.3;
    animation: loading 1.2s infinite;
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes loading {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export default Skeleton;
