import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 42px;
`;

export const HomeHeader = styled.div`
  display: flex;
  margin-left: 42px;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
  justify-content: space-between;
`;


export const ContainerLink = styled.a`
  display: flex;
  gap:10px;
  margin-left: -40px;
`;

export const Link = styled.a`
  display: flex;
  color:#456573;
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

export const ContainerTop = styled.div`
  display: flex;
`;

export const HeadeTable = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 42px;
  margin-top: 30px;
  align-items: center;
  text-align: center;

  > p {
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    color: #1c1c1c;
  }

  .Text {
    font-size: 21px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #456573;
  }
`;
