import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;

  background-color: #FBFBFB;

  > section {
    background-color: #f4f4f4;
    width: 100%;
  }
`;

export const HomeContext = styled.div`
  padding-top: 26px;
  /* padding-left: 42px; */
  width: 100%;
  height: 100%;


  > section {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 25px;
    justify-content: end;
    margin-right: 40px;
    margin-bottom: 15px;
    margin-top: 54px;

    > div {
      > button {
      background-color: transparent;
    }

    }


   .leads {
      width: 94px;
      height: 28px;
      text-align: center;
      background: #ffffff;
      border: 1px solid #e8e8e8;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06);
      border-radius: 8px;
    }

   > .lista {
      width: 140px;
      height: 28px;
      text-align: center;
      background: #ffffff;
      border: 1px solid #e8e8e8;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06);
      border-radius: 8px;
    }
  }
`;
