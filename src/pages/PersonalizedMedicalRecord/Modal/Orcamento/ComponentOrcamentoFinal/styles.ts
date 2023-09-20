import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 300px;
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
export const Cancel = styled.button`
  margin-top: 50px;
  background: transparent;
  font-size: 14px;
  height: 38px;
  width: 87px;
  cursor: pointer;
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
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  /* background: rgba(0, 0, 0, 0.8); */
  /* backdrop-filter: blur(0.2813rem); */

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content:flex-end;
  width: 100%;
  justify-content: end;
  margin-top: -10px;

  .buttonPrint {
    display: flex;
    margin-top:70px;
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
  height: 35px;
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
  margin-top: 30px;
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
export const Label = styled.button`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 2px;
  margin-left: 15px;
`;
export const Text = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  font-size: 14px;
  font-weight: bold;
  /* margin-left: 5px; */
  /* padding-left: 3px; */
  color: #456573;
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #456573;
`;
export const Title = styled.div`
  display: flex;
  width: 100%;
`;
export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap:10px;
  /* flex-direction: column; */
`;
export const ContainerCalc = styled.div`
  display: flex;
  gap: 20px;

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
  width:100%;
  justify-content: center;
  align-items: center;
  gap: 10px;

`;
export const ContainerDetailsEnd = styled.div`
  display: flex;
  width:15%;
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
