import styled from 'styled-components';

export const DadosInfo = styled.div`
  margin-top: 58px;

  .dadosmae{
    display: flex;
    gap: 30px;
    margin-bottom: 38px;

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
        width: 370px;
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
        width: 172px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
  }


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

      > input {
        border: 1px solid #ded2d9;
        width: 172px;
        height: 32px;
        border-radius: 15.5px;
        padding-left: 10px;
      }
  }

  .nascimentomae{
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

  .profissaomae{
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
`;
