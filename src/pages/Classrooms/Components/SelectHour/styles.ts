import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  /* margin-left: 40px; */
`;

export const ContainerWeek = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid #456573; */
  border-radius: 10px;
  /* background: #456573; */
`;
export const ContainerHour = styled.div`
  /* border: 1px solid #456573; */
  width: 400px;

  > aside {
    display: flex;
    justify-content: center;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 14px;
    margin-left: 30px;
    gap: 10px;

    p {
      font-size: 15px;
      line-height: 24px;
      color: white;
    }

    div {
      input {
        background: transparent;
        width: 100px;
        border-bottom: 1px solid white;

        text-align: center;

        font-weight: 300;
        font-size: 15px;
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
    /* margin-top: 6px; */
    margin-bottom: 11px;
    align-items: center;
    text-align: center;
    p {
      font-size: 15px;
      line-height: 24px;
    }
    > button{
      background:transparent;
      margin-right:20px;
      margin-left:20px;
    }
  }
`;
export const Week = styled.div`
  /* display: flex; */
  color: #456573;
  font-weight: bold;
  font-size: 15px;
  .radio {
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
    margin-left: 30px;
  }
  p {
    margin-top: -5px;
  }

  Select {
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
  flex-direction: column;
  margin-left: -30px;
  color: #456573;
  > button {
    background-color: transparent;
  }
  .hour {
    margin-left: -217px;
    color: #456573;
  }
  h3 {
    margin-top: 15px;
  }
`;
export const ContainerSelectMaster = styled.div`
  display: flex;
  /* margin-top:30px; */
`;
export const ContainerBottom = styled.div`
  /* gap: 90px; */
`;
export const Input = styled.input`
  height: 35px;
  width: 370px;
  border: 1px solid #456573;
  border-radius: 20px;
`;
export const Label = styled.label`
  margin-left: 42px;
  margin-top: 2px;
  margin-bottom: 2px;
`;
export const SelectS = styled.select`
  height: 35px;
  border: 1px solid #456573;
  border-radius: 30px;
  appearance: none;
`;
export const ContainerRegister = styled.div`
  margin-bottom: 10px;
`;
export const SecondLine = styled.div`
  /* display: flex; */
  margin-left: 15px;
  margin-top: 2px;
`;
export const ContainerAside = styled.div`
  border: 1px solid #456573;
  width:400px;
  height:80px;
  color: white;
  border-radius: 10px;
  background: #456573;
  display: flex;
  > aside {
    display: flex;
    justify-content: center;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 14px;
    margin-left: 30px;
    gap: 10px;

    p {
      font-size: 15px;
      line-height: 24px;
      color: white;
    }

    div {
      input {
        background: transparent;
        width: 50px;
        border-bottom: 1px solid white;

        text-align: center;

        font-weight: 300;
        font-size: 15px;
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
    /* margin-top: 6px; */
    margin-bottom: 11px;
    align-items: center;
    text-align: center;
    p {
      font-size: 15px;
      line-height: 24px;
    }
`;
export const ContainerInput = styled.div`
  display: flex;
`;
