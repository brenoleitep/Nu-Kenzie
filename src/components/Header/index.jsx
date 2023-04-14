import Nukenzie from "../../assets/NuKenzie.png";
import { HeaderComponent } from "../../styled-components/header";

const Header = ({ logout }) => {
  return (
    <HeaderComponent>
      <div>
        <img src={Nukenzie} alt="Nukenzie" />
        <button onClick={logout}>Sair</button>
      </div>
    </HeaderComponent>
  );
};

export default Header;
