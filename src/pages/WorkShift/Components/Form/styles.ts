import styled from 'styled-components';

export const Container = styled.form`
  margin-top: 50px;
  /* margin-left: -42px; */
`;
export const ContainerRegister = styled.div`
  margin-bottom:10px;
`;
export const Text = styled.div`
  font-size: 13px;
  /* padding-left: 3px; */
  color: #456573;
`;
export const Input = styled.input`
  height: 35px;
  border: 1px solid #456573;
  border-radius: 30px;
`;
export const SelectS = styled.select`
  height: 35px;
  border: 1px solid #456573;
  border-radius: 30px;
  appearance: none;
`;
export const Label = styled.label`
  margin-left: 15px;
  margin-top: 2px;
  margin-bottom: 2px;
`;
export const FirstLine = styled.div`
  display: flex;
  width: 100%;
`;
export const SecondLine = styled.div`
  /* display: flex; */
  margin-left: 15px;
  margin-top: 2px;
`;

export const FirstProfessional = styled.div`
  display: flex;
`;

export const SelectContainer = styled.div`
  display: flex;
  gap:25px;
  > button {
    background-color: transparent;
  }
`;
