import Colors from '@/styles/theme';
import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;
  z-index: 200;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(0.2813rem);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  background: #ffffff;
  border-radius: 0.5rem;
  padding: 36px;
  width: 880px;

  display: flex;
  justify-content: space-between;

  .div1Modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
    max-width: 303px;

    > input {
      width: 100%;
      max-width: 410px;
    }
    .calendario {
      width: 304px;

      background: #f5f5f5;
      border-radius: 10px 10px 0px 0px;
      padding: 0 18px;

      > .linha {
        width: 274px;
        height: 1px;
        margin-top: 20px;
        background: rgba(69, 101, 115, 0.35);
      }

      .repetir {
        display: flex;
        justify-content: space-between;
        p {
          font-weight: bold;
          font-size: 12px;
          line-height: 24px;
          color: #456573;
        }
      }

      .semana {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        select {
          background-color: #f5f5f5;
        }

        .agenda {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          input {
            background-color: transparent;
            border-radius: 15.5px;
            width: 264px;
            border: 1px solid #ded2d9;
            height: 32px;
            padding-left: 20px;
            font-size: 11px;
          }
        }

        .ate {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 23px;
          margin-top: 13px;

          text {
            font-size: 12px;
            line-height: 24px;
            color: #456573;
          }

          input {
            background-color: transparent;
            font-size: 12px;
            width: 76px;
            height: 24px;
          }
        }

        .qual {
          margin-top: 12px;
        }

        p {
          font-weight: bold;
          font-size: 12px;
          line-height: 24px;
          color: #456573;
          margin-bottom: 10px;
        }
      }

      .radio {
        div {
          display: flex;
          flex-wrap: wrap;
          gap: 3 px;
          margin-top: 5px;
        }
      }

      > aside {
        display: flex;
        align-items: center;
        text-align: center;
        margin-top: 14px;
        gap: 10px;

        p {
          font-size: 12px;
          line-height: 24px;
          color: #000000;
        }

        div {
          input {
            background: transparent;
            width: 47px;
            border-bottom: 1px solid #e8e8e8;

            text-align: center;

            font-weight: 300;
            font-size: 12px;
            line-height: 24px;
            color: #000000;
          }
        }
      }

      h3 {
        font-weight: bold;
        font-size: 12px;
        line-height: 24px;
        align-items: flex-start;
        text-align: start;

        color: #000000;
      }

      > div {
        display: flex;
        justify-content: space-around;
        margin-top: 6px;
        margin-bottom: 11px;
        align-items: center;
        text-align: center;
        p {
          font-weight: bold;
          font-size: 12px;
          line-height: 24px;
          color: #44c0c2;
        }
        text {
          font-weight: bold;
          font-size: 12px;
          line-height: 24px;
          color: #ff3838;
        }
      }
    }
  }

  .div2Modal {
    > p {
      font-size: 17px;
      line-height: 24px;
      text-align: center;
      color: #000000;
      margin-bottom: 9px;
      font-weight: bold;
    }

    > section {
      margin-top: 61px;

      p {
        font-size: 17px;
        line-height: 24px;
        text-align: center;
        color: #000000;
        margin-bottom: 9px;
        font-weight: bold;
      }

      button {
        background: transparent;
        width: 139px;
        height: 38px;
        border: 1px solid #44c0c2;
        border-radius: 19px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #44c0c2;
      }
    }

    > aside {
      display: flex;
      gap: 23px;
      justify-content: flex-end;
      margin-top: 83px;

      .cancel {
        background: transparent;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.1px;
        color: #000000;
      }

      .confirm {
        width: 201px;
        height: 38px;
        background: #44c0c2;
        border-radius: 19px;
        color: #ffffff;
      }
    }
  }
`;

export const ModalRegistro = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  > p {
    font-weight: bold;
    font-size: 17px;
    line-height: 24px;
    text-align: center;
    color: #000000;
  }
`;

export const ModalRegistroInfo = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 30px;
`;

export const ModalRegistroInfo2 = styled.div`
  display: flex;
  flex-direction: column;

  .pacienteInfo {
    display: flex;
    gap: 40px;

    p {
      font-size: 15px;
      line-height: 24px;
      text-align: center;
      color: #000000;
    }

    div {
      display: flex;
      flex-direction: row;

      span {
        border: none;
        box-shadow: none;
        font-size: 11px;
        line-height: 24px;
        text-align: center;
        color: #000000;

        button{
          background-color: transparent;
        }
      }
    }
  }
`;

export const ModalRegistroInfo3 = styled.div`
      display: flex;
      gap: 30px;

      div {
        display: flex;
        flex-direction: column;
        text-align: start;
        align-items: flex-start;


        text {
          font-size: 12px;
          line-height: 24px;
          text-align: center;
          color: #585757
        }
      }
`;


export const ModalPlanos = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;


    > div {
      display: flex;
      gap: 30px;


      div {
        display: flex;
        flex-direction: column;

      span{
        width: 100%;
        border: none;
        box-shadow: none;
        align-items: flex-start;
        text-align: start;
        font-size: 13px;
        line-height: 24px;
        color: #000000;
      }

      > select {
        width: 127px;
        height: 32px;
        border-radius: 15.5px;
        border: 1px solid #ded2d9;
      }

      > input {
        border: 1px solid #ded2d9;
        width: 155px;
        height: 32px;
        border-radius: 15.5px;
      }
      }
    }
`;

export const ModalProcedimentos = styled.div`
      display: flex;
      gap: 32px;
      margin-top: 12px;
      text-align: start;
      align-items: flex-start;

    .div1{
        span{
        width: 100%;
        border: none;
        box-shadow: none;
        align-items: flex-start;
        text-align: start;
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        }

        input {
          border: 1px solid #ded2d9;
          width: 281px;
          height: 32px;
          border-radius: 15.5px;
        }
    }


    .div2{
        span{
          width: 100%;
        border: none;
        box-shadow: none;
        align-items: flex-start;
        text-align: start;
        font-size: 13px;
        line-height: 24px;
        color: #000000;
        }

        input {
          border: 1px solid #ded2d9;
          width: 155px;
          height: 32px;
          border-radius: 15.5px;
        }
    }
`;

export const ModalCodigo = styled.div`
     display: flex;
      text-align: start;
      align-items: flex-start;
      margin-top: 14px;
      gap: 11px;


    .codigo{
      span{
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
        width: 57px;
        height: 23px;
        border-radius: 15.5px;
      }
    }

    .tipo{
      span{
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
        width: 57px;
        height: 23px;
        border-radius: 15.5px;
      }

    }

    .valor{
      span{
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
        width: 129px;
        height: 23px;
        border-radius: 15.5px;
      }
    }

    .qua{
      span{
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
        width: 49px;
        height: 23px;
        border-radius: 15.5px;
      }

    }

    .sub{
      span{
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
        width: 130px;
        height: 23px;
        border-radius: 15.5px;
      }
    }


`;

export const ModalValor = styled.div`
 display: flex;
 gap: 60px;
 margin-top: 29px;

 > P {
  font-weight: 500;
  font-size: 13px;
  color: #177045;
  text-align: start;
  align-items: flex-start;
  width: 260px;
 }

 > text {
  font-weight: 400;
  font-size: 13px;
  line-height: 3px;
  color: #44C0C2;
 }

`;

export const ModalSala = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    text{
      width: 100%;
        border: none;
        box-shadow: none;
        align-items: flex-start;
        text-align: start;
        font-size: 13px;
        line-height: 24px;
        color: #000000;
    }

    > select {
        width: 465px;
        height: 39px;
        border-radius: 15.5px;
        border: 1px solid #ded2d9;
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
        width: 465px;
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

export const ModalBtn = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    justify-content: space-between;

    > button {
      background: transparent;
    }

    div{
        display: flex;
        gap: 21px;

      button {
        background: transparent;
      }

      .confirma{
        width: 201px;
        height: 38px;
        background: #44C0C2;
        border-radius: 19px;
        color: white;
      }
    }

`;

export const CustomSelect = styled.select`
  border: none;
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
  border: 1px solid #DED2D9;
  border-radius: 5px;
  color: ${Colors.text.dark};
  height: 32px;

border-radius: 15.5px;
`;
