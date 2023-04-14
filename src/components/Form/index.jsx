import { useState } from "react";
import { FormComponent, Div, DivForm } from "../../styled-components/form";
import TotalMoney from "../TotalMoney";

const Form = ({ transaction, setTransaction }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("-");
  const [value, setValue] = useState();

  const handleValues = (event) => {
    event.preventDefault();

    setTransaction([
      ...transaction,
      {
        description: description,
        type: type,
        value: value * -1,
      },
    ]);
    if (type === "Entrada") {
      setTransaction([
        ...transaction,
        {
          description: description,
          type: type,
          value: +1 * value,
        },
      ]);
    }
    setDescription("");
    setValue("");
    setType("");
  };

  return (
    <Div>
      <FormComponent onSubmit={handleValues}>
        <p>Descrição</p>
        <input
          required
          type="text"
          placeholder="Digite aqui sua descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <span>Ex: Compra de roupas</span>

        <DivForm>
          <div>
            <p>Valor</p>
            <input
              required
              type="number"
              placeholder="Valor"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <p>Tipo de valor</p>
            <select
              required
              name="select"
              id="select"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Null">-</option>
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>

          <button onClick={handleValues}>Inserir valor</button>
        </DivForm>
      </FormComponent>
      <TotalMoney transaction={transaction} />
    </Div>
  );
};

export default Form;
