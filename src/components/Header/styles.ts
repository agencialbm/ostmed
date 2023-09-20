import styled from 'styled-components';

export const HomeHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
`;

export const HomeSelect = styled.div`
  display: flex;
  gap: 10px;

  > button {
    background-color: transparent;
  }
`;

export const HomeInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  > button {
    background-color: transparent;
  }
`;
