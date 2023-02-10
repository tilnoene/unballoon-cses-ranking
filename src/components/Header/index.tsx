import { Link } from 'react-router-dom';

import Button from '../Button';

import { HeaderContainer, Icon } from './styles';

import unballoonBrand from '../../assets/unballoon_brand.png';
import airplaneIcon from '../../assets/airplane.svg';
import aboutIcon from '../../assets/about.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <a href="https://linktr.ee/unballoon" target="_blank" rel="noreferrer">
        <Button iconButton>
          <Icon src={airplaneIcon} invert />
        </Button>
      </a>

      <Link to="/">
        <img src={unballoonBrand} alt="Grupo de estudos UnBalloon" />
      </Link>

      <Link to="/sobre">
        <Button iconButton>
          <Icon src={aboutIcon} invert />
        </Button>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
