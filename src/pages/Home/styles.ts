import styled from 'styled-components';

export const ContainerPage = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const ContainerLoading = styled.div`
  width: 100%;
  height: calc(100vh - 52px - 40px);
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

export const Title = styled.h1`
  font-size: 42px;
  margin: 0;
  margin-bottom: 4px;
`;
