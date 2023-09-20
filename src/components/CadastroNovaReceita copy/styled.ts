import styled from 'styled-components';

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


export const ContainerCadastroNovaReceita = styled.div`
  width: 1010px;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 34px;

  display: flex;
  flex-direction: column;

`;

export const ContainerTitleReceita = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 22px;

  > p {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: #456573;
  }

  > span {
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: #456573;
  }
`;

export const Lancamento = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 50px;

  .data{
    display: flex;
    flex-direction: column;

      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > input {
        border: 1px solid #ded2d9;
        width: 222px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
  }

  .descricao{
    display: flex;
    flex-direction: column;

      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > input {
        border: 1px solid #ded2d9;
        width: 414px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
  }

  .forma{
    display: flex;
    flex-direction: column;

      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > input {
        border: 1px solid #ded2d9;
        width: 244px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
  }

`;


export const Clients = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 14px;

    .clients{
      display: flex;
      flex-direction: column;

      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > input {
        border: 1px solid #ded2d9;
        width: 293px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .fornecedor{
      display: flex;
      flex-direction: column;

      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > input {
        border: 1px solid #ded2d9;
        width: 293px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .profissional{
      display: flex;
      flex-direction: column;

      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > input {
        border: 1px solid #ded2d9;
        width: 293px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }
`;

export const Bancaria = styled.div`
   display: flex;
  gap: 28px;
  margin-top: 12px;

    .bancaria{
      display: flex;
      flex-direction: column;

      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > select {
        border: 1px solid #ded2d9;
        width: 238px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .custo{
      display: flex;
      flex-direction: column;

      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > select {
        border: 1px solid #ded2d9;
        width: 238px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .categoria{
      display: flex;
      flex-direction: column;

      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > select {
        border: 1px solid #ded2d9;
        width: 384px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }
`;

export const Clinica = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 12px;

  .clinica{
      display: flex;
      flex-direction: column;

      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > input {
        border: 1px solid #ded2d9;
        width: 220px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

  .vencimento{
    display: flex;
      flex-direction: column;

      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > input {
        border: 1px solid #ded2d9;
        width: 238px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
  }

  .valor{
    display: flex;
      flex-direction: column;
      margin-left: 24px;
      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > input {
        border: 1px solid #ded2d9;
        width: 377px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;

      }
  }

`;


export const TogglerButton = styled.div`
  margin-top: 29px;
  display: flex;
  flex-direction: column;


  .toggler{
    display: flex;
    gap: 44px;

    .recebido {
      display: flex;
      flex-direction: column;
      gap: 9px;

      p {
        font-size: 13px;
        line-height: 24px;
        color: #000000;
      }
    }
  }


  .valor {

    display: flex;
    gap: 50px;
    margin-top: 30px;


    .recebido{
      display: flex;
      flex-direction: column;

      text{
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        align-items: flex-start;
        text-align: start;
        margin-bottom: 4px;
      }

      > input {
        border: 1px solid #ded2d9;
        width: 189px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }


  }



`;

export const Btns = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 22px;

.btns{
    display: flex;
    gap: 38px;

    .cancelar{
      font-size: 14px;
      line-height: 16px;
      background-color: transparent;
      color: #000000;
    }

    .salvar{
      width: 203.25px;
      height: 33px;
      background: #44C0C2;
      border-radius: 19px;
      font-size: 14px;
      line-height: 16px;

      letter-spacing: 0.1px;
      color: #FFFFFF;
      margin-right: 40px;
    }
  }
`;
