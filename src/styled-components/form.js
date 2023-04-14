import styled from "styled-components";

export const FormComponent = styled.form`
  display: flex;
  width: 90%;
  max-width: 363px;
  height: 351px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 24px;
  gap: 24px;
  background: #ffffff;
  transition: 0.6s;

  /* grey-2 */

  border: 1px solid #e9ecef;
  border-radius: 4px;

  p {
    height: 22px;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #212529;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }

  input {
    height: 52.80000305175781px;
    width: 90%;
    max-width: 314px;
    padding: 0px 16px 0px 16px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #fcedfc;
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;

  button {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    width: 35%;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  div {
    width: 50%;
  }

  select {
    height: 48px;
    width: 90%;
    max-width: 314px;
    border-radius: 8px;
    padding: 2px 16px;
    outline: none;
    border: 1px solid #fcedfc;
  }

  button {
    margin-top: 10px;
    width: 90%;
    height: 48px;
    max-width: 314px;
    border-radius: 8px;
    padding: 13px 20px 13px 20px;
    background: #fd377e;
    border: 2px solid #fd377e;
    color: white;
  }
`;
