import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  margin-top: 20px;
  width: 90%;
  max-width: 365px;
  height: 96px;
  justify-content: space-between;
  border: 1px solid #e9ecef;
  align-items: center;
  padding: 0 32px;
  transition: 0.6s;

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #fd377e;
    padding: 0 32px;
  }

  span {
    font-size: 12px;
  }
`;
