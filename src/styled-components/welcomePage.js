import styled from "styled-components";
import React from "react";

export const Div = styled.div`
  background: #212529;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  position: relative;
  align-items: center;
  transition: 0.6s;

  .grupo-illustration {
    transition: 0.6s;
  }

  div {
    transition: 0.6s;
  }

  img {
    width: 60%;
    height: 80%;
  }

  @media (min-width: 200px) {
    .grupo-illustration {
      display: none;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;
    }

    img {
      height: 19.5260009765625px;
      width: 122.67755126953125px;
    }

    h2 {
      height: 144px;
      width: 90%;
      max-width: 350px;
      height: 144px;
      font-weight: 800;
      font-size: 38px;
      line-height: 48px;
      color: white;
    }

    span {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
      color: white;
      margin-top: 1rem;
    }

    button {
      height: 48px;
      width: 241px;
      border-radius: 8px;
      padding: 13px 20px 13px 20px;
      background: #fd377e;
      border: 2px solid #fd377e;
      outline: none;
      color: white;
    }
  }

  @media (min-width: 500px) {
    div {
      align-items: flex-start;
      margin-left: 100px;
    }
  }

  @media (min-width: 800px) {
    .grupo-illustration {
      display: block;
      height: 90%;
      width: 60%;
    }
  }
`;
