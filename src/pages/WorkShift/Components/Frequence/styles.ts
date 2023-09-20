import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  /* margin-left: 40px; */
  /* margin-top: -150px; */
`;

export const ContainerWeek = styled.div`
  display: flex;
`;
export const ContainerHour = styled.div`
  border-right: 1px solid #456573;
  height: 170px;
  width: 210px;

  > aside {
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 14px;
    margin-left: 30px;
    gap: 10px;

    p {
      font-size: 12px;
      line-height: 24px;
      color: #000000;
    }

    div {
      input {
        background: transparent;
        width: 20px;
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
  }
`;
export const Week = styled.div`
  /* display: flex; */
  color: #456573;
  font-weight: bold;
  font-size: 12px;
  > div {
    margin-left: -50px;
  }
`;
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  > button {
    background-color: transparent;
  }
  .Selectbottom {
    /* margin-left: 30px; */
  }
  p {
    /* margin-top: -5px; */
  }

  Select {
    width: 140px;
    margin-left: -30px;
    margin-top: 20px;
  }
`;
export const Text = styled.div`
  display: flex;
`;
export const CotainerQuestions = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 35px;
`;
export const Hour = styled.div`
  display: flex;
  margin-left: 10px;
  > button {
    background-color: transparent;
  }
  .hour {
    margin-left: -43px;
  }
  h3 {
    margin-top: 20px;
    margin-left: 20px;
  }
`;
export const ContainerSelectMaster = styled.div`
  display: flex;
  /* margin-top:30px; */
`;
export const ContainerBottom = styled.div`
  /* gap: 90px; */
`;
