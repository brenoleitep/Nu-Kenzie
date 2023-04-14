import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  width: 100vw;
  transition: 0.6s;

  div {
    width: 90%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 32px 0;
  }

  button {
    width: 64px;
    height: 40px;

    /* grey-2 */

    background: #e9ecef;
    /* grey-2 */

    border: 1.4px solid #e9ecef;
    border-radius: 8px;

    font-size: 14px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
