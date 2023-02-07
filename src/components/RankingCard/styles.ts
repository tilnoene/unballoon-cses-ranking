import styled from "styled-components";

export const Card = styled.div`
  background: #2F3336;
  border-radius: 6px;
  height: 40px;
  margin: 12px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-weight: 600;
`;

export const CardPosition = styled.div`
  width: 40px;
  padding-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardRank = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
  }
`;

export const CardName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

export const CardNumberOfQuestions = styled.div`
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
