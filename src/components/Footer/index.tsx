import { FooterContainer } from './styles';

import unballoonBrand from '../../assets/unballoon_brand.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <p>&copy; {currentYear} UnBalloon</p>
    </FooterContainer>
  );
};

export default Footer;
