import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  padding: 0 6px;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  h1 {
    padding: 0;
    margin: 0;
    font-size: 44px;
    font-weight: 600;
  }

  img {
    width: 140px;
  }
`;

type IconProps = {
  invert?: boolean;
};

export const Icon = styled.img<IconProps>`
  width: 24px;
  height: 24px;

  filter: ${props => props.invert && "invert(1);"}
`;
