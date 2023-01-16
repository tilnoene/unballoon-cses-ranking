import styled from "styled-components";

export const Balloon = styled.object`
  animation: breath 2s alternate infinite;

  width: 200px;
  height: 200px;

  @keyframes breath {
    from {
      transform: scale(0.9);
    }
    to {
      transform: scale(1);
    }
  }
`;
