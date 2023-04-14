import { useState } from "react";
import { Div } from "../../styled-components/totalMoney";

const TotalMoney = ({ transaction }) => {
  return (
    <Div>
      <div>
        <h2>Valor total:</h2>
        <span>O valor se refere ao saldo</span>
      </div>

      <h3>
        $
        {transaction.type === "Entrada"
          ? transaction.reduce((acc, act) => {
              return acc - act.value;
            }, 0)
          : transaction.reduce((acc, act) => {
              return acc + act.value;
            }, 0)}
      </h3>
    </Div>
  );
};

export default TotalMoney;
