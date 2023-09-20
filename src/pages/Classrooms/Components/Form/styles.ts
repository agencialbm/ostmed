import styled from 'styled-components';

export const Container = styled.form`
  margin-top: 10px;
  margin-left: -42px;
`;
export const ContainerRegister = styled.div`
  margin-bottom: 10px;
`;
export const Text = styled.div`
  font-size: 13px;
  padding-left: 3px;
  margin-top: 20px;
  color: #456573;
`;
export const Input = styled.input`
  height: 35px;
  border: 1px solid #456573;
  border-radius: 20px;
`;
export const Label = styled.label`
  margin-left: 42px;
  margin-top: 2px;
  margin-bottom: 2px;

  Select {
    width: 300px;
  }
`;
export const FirstLine = styled.div`
  display: flex;
  width: 100%;
`;

export const ContainerProfessional = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const FirstProfessional = styled.div`
  display: flex;
`;

export const Select = styled.select`
  height: 25px;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  > Select {
  }
`;
export const ContainerText = styled.div`
  display: flex;
  gap: 20px;
  .textWish {
    margin-top: 0px;
  }
`;
export const Toggler = styled.div`
  margin-top: 45px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;

  /* .toggler{
  display: flex;
  gap: 44px;
  margin-top:-50px;
} */
`;
export const ContainerHour = styled.div`
  border-right: 1px solid #456573;
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
    /* margin-top: 6px; */
    margin-bottom: 11px;
    align-items: center;
    text-align: center;
    p {
      font-size: 12px;
      line-height: 24px;
    }
  }
`;
export const Week = styled.div`
  /* display: flex; */
  color: #456573;
  font-weight: bold;
  font-size: 12px;
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
    margin-top: 0px;
    height: 35px;
  }
`;
export const CotainerQuestions = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 35px;
`;
export const Hour = styled.div`
  display: flex;
  margin-left: 40px;
  > button {
    background-color: transparent;
  }
  .hour {
    margin-left: -43px;
  }
  h3 {
    margin-top: 20px;
  }
`;
export const ContainerSelectMaster = styled.div`
  display: flex;
  /* margin-top:30px; */
`;
export const ContainerBottom = styled.div`
  /* gap: 90px; */
`;
export const SelectS = styled.select`
  height: 35px;
  border: 1px solid #456573;
  border-radius: 30px;
  appearance: none;
`;
