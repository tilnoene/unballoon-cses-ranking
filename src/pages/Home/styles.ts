import styled from 'styled-components';

export const ContainerPage = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding-top: 14px;

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

export const Footer = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding: 0;
    margin: 0;
    font-size: 14px;
  }
`;

export const ContainerLoading = styled.div`
  width: 100%;
  height: calc(100vh - 150px - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerRanking = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Ranking = styled.div`
  padding: 0 40px;
  width: 100%;
  max-width: 420px;
`;
