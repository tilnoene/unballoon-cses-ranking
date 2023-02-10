import { HeaderContainer } from './styles';

import unballoonBrand from '../../assets/unballoon_brand.png';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={unballoonBrand} alt="Grupo de estudos UnBalloon" />
    </HeaderContainer>
  );
};

export default Header;
