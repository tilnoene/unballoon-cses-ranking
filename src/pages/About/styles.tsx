import styled from 'styled-components';

export const ContainerPage = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  padding-top: 2px;
`;

export const ContainerMedals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 0 24px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  margin: 0;
`;

export const Text = styled.p`
  text-align: center;
  margin: 12px 0;
  font-size: 16px;

  a {
    text-decoration: underline;
  }
`;
