import styled from 'styled-components';


export const Container = styled.div`

margin-left: 42px;

`;

export const HeadeTable = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 42px;
  margin-top: 55px;
  align-items: center;
  text-align: center;

  > p {
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    color: #1C1C1C;
  }

  text {
    font-size: 21px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #456573;
  }

 > div {
    display: flex;
    gap: 30px;

    button {
      background-color: transparent;
    }

    .new {
      display: flex;
      justify-content: center;
      padding: 8px 12px;
      gap: 8px;
      width: 138px;
      height: 40px;
      background: #44C0C2;
      align-items: center;
      border-radius: 8px;


      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      color: #FFFFFF;
    }
  }
`;


export const ContainerCards = styled.div`
    display: flex;
    margin-top: 44px;
    gap: 20px;
    flex-wrap: wrap;
`;

export const ContainerTable = styled.div`
      margin-top: 44px;
`;
