import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 90%;
  max-width: 560px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px auto;
  transition: 0.6s;

  @media (min-width: 1024px) {
    position: absolute;
    top: 150px;
    right: 0px;
  }

  @media (min-width: 1440px) {
    position: absolute;
    top: 150px;
    right: 300px;
  }

  div {
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    gap: 10px;
  }

  button {
    height: 40px;
    max-width: 87px;
    border-radius: 8px;
    padding: 0 15px;
    background: #e9ecef;
    border: 1.4px solid #e9ecef;
  }
`;
