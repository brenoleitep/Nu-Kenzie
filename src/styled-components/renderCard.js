import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 560px;
  margin: 0 auto;

  button {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 300px;
    right: 0px;
  }

  @media (min-width: 1440px) {
    position: absolute;
    top: 300px;
    right: 300px;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    /* margin-top: 163px; */
    align-items: center;
    max-height: 600px;
    overflow-y: auto;
  }

  h1 {
    text-align: center;
  }
`;

export const LiEntry = styled.li`
  display: flex;
  justify-content: center;
  width: 98%;
  height: 87px;
  border-radius: 4px;
  justify-content: space-between;
  box-shadow: -4px 0px 0px 0px #17ebaf;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    padding: 0 16px;
  }

  span {
    min-width: 90px;
    max-width: 90px;
  }
`;

export const LiOut = styled.li`
  display: flex;
  justify-content: center;
  width: 98%;
  height: 87px;
  border-radius: 4px;
  justify-content: space-between;
  box-shadow: -4px 0px 0px 0px #cfc1c2;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    padding: 0 16px;
  }

  span {
    min-width: 90px;
    max-width: 90px;
  }
`;
