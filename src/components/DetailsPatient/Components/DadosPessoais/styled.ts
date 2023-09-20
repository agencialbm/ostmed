import styled from 'styled-components';

export const DadosInfo = styled.div`
  margin-top: 58px;

  .nomecpf{
    display: flex;
    gap: 26px;

  .nome {
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
        width: 490px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
  }

  .cpf {
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
        width: 226px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
  }

  }

  .nascimentoRg{
    display: flex;
    gap: 22px;
    margin-top: 15px;

    .nacimento{
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

    .email{
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
        width: 291px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

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
        width: 94px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }
  }

  .wppcell{
    display: flex;
    gap: 26px;
    margin-top: 15px;

    .cellWpp{
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
        width: 208px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .tellephone{
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
        width: 208px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .comercial{
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
        width: 208px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    }

    .profIndicacao{
      display: flex;
      gap: 26px;
      margin-top: 15px;

      .prof{
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
        width: 208px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }


    }

    .ind{
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
        width: 208px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
    }

    .pes{
      display: flex;
      flex-direction: column;

      text{
        color: transparent;
      }

        input {
        border: 1px solid #ded2d9;
        width: 208px;
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
        width: 573px;
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
