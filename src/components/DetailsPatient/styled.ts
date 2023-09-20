import styled from 'styled-components';


export const HomeHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
  justify-content: flex-end;

`;


export const HomeInput = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;

  > button {
    background-color: transparent;
  }
`;

export const ContainerCard = styled.div`
    padding: 23px 50px 50px 50px;
    display: flex;
    flex-direction: column;


    width: 1524px;
    height: 760px;
    background-color: white;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);

    > p {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: #456573;
    }
`;

export const ContextCard = styled.div`
    display: flex;
    margin-top: 60px;
    gap: 70px;

    .perfilCard{
      margin-top: 80px;
      display: flex;
      align-items: center;
      flex-direction: column;

      > button {
        border: 1px solid #456573;
        border-radius: 15px;
        background: transparent;
        width: 91px;
        height: 30px;
        margin-top: 15px;

        font-size: 12px;
        line-height: 24px;
        text-align: center;
        color: #456573;
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }

      select {
        width: 147px;
        height: 30px;
        border: 1px solid #456573;
        border-radius: 15px;

        font-size: 11px;
        line-height: 24px;
        text-align: center;
        color: #456573;
        margin-top: 40px;
      }
    }
`;





export const DadosCard = styled.div`
    display: flex;
    flex-direction: column;

    .buttonNav{
      display: flex;
      gap: 30px;


      button {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: #456573;
      background-color: transparent;

      }
    }
`;


export const ContainerBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 42px;
  gap: 15px;

  .voltar{
    background-color: transparent;
  }

  .salva{
    width: 160px;
    height: 38px;
    background: #44C0C2;
    border-radius: 19px;


  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: #FFFFFF;
  }

  .salva2{
    width: 87px;
    height: 38px;
    background: #456573;
    border-radius: 19px;

    font-size: 14px;
line-height: 16px;
align-items: center;
text-align: center;
color: #FFFFFF;
  }

`;




export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(0.2813rem);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 200;
`;
