import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 350px;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 10px;
  padding: 18px;
  padding-right: 40px;
  /* display: flex; */
  flex-direction: column;
  margin-top: 20px;
  button {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-right: 20px;
    background: transparent;
  }
`;

export const SaveAndAdd = styled.div`
  margin-top: 50px;
  height: 38px;
  width: 100px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #44c0c2;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

export const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  align-items: center;
  justify-content: center;
  z-index: 200;
`;
export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;

  .buttonPrint {
    display: flex;
    margin-top: -0px;
    height: 35px;
    width: 150px;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    background: #456573;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;
export const Select = styled.select`
  height: 35px;
  border: 1px solid #456573;
  border-radius: 30px;
  appearance: none;
`;
export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 30px;
  border: 1px solid #456573;
  border-radius: 5px;
  appearance: none;
`;

export const ContainerText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  font-size: 15px;
  font-weight: bold;
  margin-left: 15px;
  color: #456573;
`;
export const ContainerModals = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
`;

export const ContainerImc = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  align-items: flex-start;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding-right: 35px;

  button {
    display: flex;
    width: 100%;
    background: transparent;
  }
`;
export const Label = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 2px;
  margin-left: 15px;
`;

export const LabelPacient = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 2px;
  margin-left: 5px;
  input {
    margin-left: 10px;
    margin-right: 10px;
    vertical-align: middle;
    position: relative;
  }
`;
export const Text = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  font-size: 14px;
  font-weight: bold;
  color: #456573;
`;

export const ContainerDiv = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 70%;
  border: 1px solid #456573;
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;


`;
export const ContainerInputBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 10px;
`;
export const ContainerCalc = styled.div`
  display: flex;
  .buttonCalc {
    height: 35px;
    width: 150px;
    margin-top: 10px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #44c0c2;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    padding-right: 0;
  }
`;
export const ContainerDetails = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
  gap: 7px;
  p {
    display: flex;
    font-size: 14px;
  }
`;
export const ContainerDetailsText = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left:15px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-left:170px;

`;
export const ContainerDetailsEnd = styled.div`
  display: flex;
  width: 15%;
  justify-content: flex-end;
  align-items: center;
  /* gap: 10px; */
`;
export const ContainerDetailsImc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  Input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 150px;
  }
  Text {
    margin-top: 10px;
  }
`;
export const TextImc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
`;
export const ContainerHistoric = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 100px;

  p {
    margin-left: 20px;
  }
`;
export const TitleHistoric = styled.div`
  display: flex;
  width: 100%;
  margin-left: 20px;
`;
