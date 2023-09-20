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
  gap: 40px;
  z-index: 200;
`;

export const Context = styled.div`
`;


export const ContainerModal = styled.div`
  background: #ffffff;
  border-radius: 0.5rem;
  padding: 36px;
  width: 646px;
  height: 995px;

  > p {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #000000;
  }

`;

export const ContainerModalFoto = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 70px;

  .perfil{
    display: flex;
    flex-direction: column;
    align-items: center;
   text-align: center;
   gap: 15px;

    button {
      background: transparent;
      border: 1px solid #456573;
      border-radius: 15px;
    width: 91px;
    height: 30px;
    padding: 2px;
    font-size: 12px;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 5px;

    }
  }

  > div {
    .name{
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
        width: 373px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .context{
        display: flex;
        gap: 30px;
        margin-top: 20px;

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
        width: 172px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
        }

        .cpf{
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
        width: 172px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
        }
    }

    .email{
      display: flex;
      flex-direction: column;
      margin-top: 20px;

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
        width: 373px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }

    }

  }
`;

export const Telephone = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;

    .celular {
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
        width: 271px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }
`;

export const Rg = styled.div`
    display: flex;
    gap: 25px;
    margin-top: 20px;

    .rg{
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
        width: 120px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .orgao{
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
        width: 120px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .mae{
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
        width: 272px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

`;

export const Cep = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;

    .cep {
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

       input {
        border: 1px solid #ded2d9;
        width: 271px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

`;

export const DadosEndereco = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 20px;

    .numero{
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

       input {
        border: 1px solid #ded2d9;
        width: 129px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .complemento{
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

       input {
        border: 1px solid #ded2d9;
        width: 129px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .bairro{
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

       input {
        border: 1px solid #ded2d9;
        width: 192px;
height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .zona{
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

       select {
        border: 1px solid #ded2d9;
        width: 65px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

`;

export const DadosCity = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 20px;

    .cidade{
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

       input {
        border: 1px solid #ded2d9;
        width: 129px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .estado{
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

       input {
        border: 1px solid #ded2d9;
        width: 129px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .pais{
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

       input {
        border: 1px solid #ded2d9;
        width: 271px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }
`;

export const ModalObs = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    text-align: start;
    align-items: flex-start;

    > text{
      width: 100%;
        border: none;
        box-shadow: none;
        align-items: flex-start;
        text-align: start;
        font-size: 13px;
        line-height: 24px;
        color: #000000;
    }

   > input {
        border: 1px solid #ded2d9;
        width: 556px;
        height: 52px;
        border-radius: 15.5px;
    }

    .check {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 12px;

      div {
        display: flex;
        gap: 5px;
        text-align: center;
        align-items: center;

        label {
          font-weight: 400;
          font-size: 10px;
          line-height: 8px;
          color: #456573;
          text-align: center;
          align-items: center;
        }

        > input {
          width: 14px;
          height: 14px;
          text-align: center;
          align-items: center;
        }

      }
    }
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 42px;
  gap: 42px;

  .voltar{
    background-color: transparent;
  }

  .salva{
    width: 227px;
    height: 38px;
    background: #44C0C2;
    border-radius: 19px;


  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: #FFFFFF;
  }

`;


export const ContainerModal2 = styled.div`
  background: #ffffff;
  border-radius: 0.5rem;
  padding: 36px;
  width: 646px;
  height: 531px;

  > p {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #000000;
  }
`;

export const DadosMae = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 50px;

    .nomemae{
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

       input {
        border: 1px solid #ded2d9;
        width: 370px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .cpfmae{
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

       input {
        border: 1px solid #ded2d9;
        width: 172px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }
`;

export const DadosMaeCell = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 30px;

    .telefonemae{
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

       input {
        border: 1px solid #ded2d9;
        width: 172px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .nascimentoemae{
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

       input {
        border: 1px solid #ded2d9;
        width: 172px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }
`;

export const DadosPai = styled.div`

    display: flex;
    margin-top: 20px;
    gap: 14px;

     .nomepai{
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

       input {
        border: 1px solid #ded2d9;
        width: 370px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .cpfpai{
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

       input {
        border: 1px solid #ded2d9;
        width: 172px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }
`;



