import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import RenderCard from "./components/RenderCard";
import WelcomePage from "./components/WelcomePage";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [transaction, setTransaction] = useState([]);

  const login = () => {
    setIsLogged(true);
  };

  const logout = () => {
    setIsLogged(false);
  };

  return (
    <div className="div-app">
      {isLogged ? (
        <>
          <Header logout={logout} />
          <main>
            <Form transaction={transaction} setTransaction={setTransaction} />

            <RenderCard
              transaction={transaction}
              setTransaction={setTransaction}
            />
          </main>
        </>
      ) : (
        <WelcomePage login={login} />
      )}
    </div>
  );
};

export default App;
