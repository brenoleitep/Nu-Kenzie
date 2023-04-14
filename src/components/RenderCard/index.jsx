import { Div } from "../../styled-components/card";
import { IoMdTrash } from "react-icons/io";
import { useState } from "react";
import { LiEntry, Section, LiOut } from "../../styled-components/renderCard";
import NoCard from "../../assets/NoCard.svg";

const RenderCard = ({ transaction, setTransaction }) => {
  const [filterEntry, setFilterEntry] = useState([]);

  const entries = () => {
    const newItem = transaction.filter((elem) => {
      return elem.type === "Entrada";
    });
    setFilterEntry(newItem);
  };

  const all = () => {
    setFilterEntry("");
  };

  const out = () => {
    const newItem = transaction.filter((elem) => {
      return elem.type === "Despesa";
    });
    setFilterEntry(newItem);
  };

  const itemDelete = (item) => {
    setTransaction(
      transaction.filter((transaction) => transaction.description !== item)
    );
  };

  return (
    <>
      <Div>
        <h2>Resumo financeiro</h2>

        <div>
          <button onClick={all}>Todos</button>
          <button onClick={entries}>Entradas</button>
          <button onClick={out}>Despesas</button>
        </div>
      </Div>
      <Section>
        <ul>
          {!filterEntry.length &&
            transaction.map((elem, index, array) =>
              elem.type === "Entrada" ? (
                <LiEntry key={index}>
                  <div>
                    <h2>{elem.description}</h2>
                    <span>{elem.type}</span>
                  </div>

                  <div>
                    <span>$ {elem.value}</span>
                    <IoMdTrash onClick={() => itemDelete(elem.description)} />
                  </div>
                </LiEntry>
              ) : (
                <LiOut key={index}>
                  <div>
                    <h2>{elem.description}</h2>
                    <span>{elem.type}</span>
                  </div>

                  <div>
                    <span key={index}>$ {elem.value}</span>
                    <IoMdTrash onClick={() => itemDelete(elem.description)} />
                  </div>
                </LiOut>
              )
            )}

          {filterEntry &&
            filterEntry.map((elem, index) =>
              elem.type === "Entrada" ? (
                <LiEntry key={index}>
                  <div>
                    <h2>{elem.description}</h2>
                    <span>{elem.type}</span>
                  </div>

                  <div>
                    <span key={index}>$ {elem.value}</span>
                    <IoMdTrash onClick={() => itemDelete(elem.description)} />
                  </div>
                </LiEntry>
              ) : (
                <LiOut key={index}>
                  <div>
                    <h2>{elem.description}</h2>
                    <span>{elem.type}</span>
                  </div>

                  <div>
                    <span key={index}>$ {elem.value}</span>
                    <IoMdTrash onClick={() => itemDelete(elem.description)} />
                  </div>
                </LiOut>
              )
            )}
        </ul>
      </Section>
    </>
  );
};

export default RenderCard;
