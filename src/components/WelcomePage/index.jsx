import Grupo from "../../assets/illustration.svg";
import NuKenzie from "../../assets/Nu Kenzie.svg";
import { Div } from "../../styled-components/welcomePage";

const WelcomePage = ({ login }) => {
  return (
    <Div>
      <div>
        <img src={NuKenzie} alt="nukenzie" />
        <h2>Centralize o controle das suas finanças</h2>
        <span>de forma rápida e segura</span>
        <button onClick={login}>Iniciar</button>
      </div>

      <img src={Grupo} alt="nuKenzie" className="grupo-illustration" />
    </Div>
  );
};

export default WelcomePage;
