import styled from 'styled-components';

export const ContainerPage = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const Header = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding: 0;
    margin: 6px 0;
    font-size: 48px;
    font-weight: 600;
  }

  img {
    width: 140px;
  }
`;

export const ContainerLoading = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
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
