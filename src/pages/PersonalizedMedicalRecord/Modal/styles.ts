import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  height: 600px;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 10px;
  padding: 18px;
  /* display: flex; */
  flex-direction: column;

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
  height: 38px;
  width: 150px;
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

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(0.2813rem);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;
export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  padding-right: 45px;
`;
export const Input = styled.input`
  display: flex;
  width: 60%;
  height: 35px;
  border: 1px solid #456573;
  border-radius: 5px;
  appearance: none;
`;
export const Select = styled.select`
  display: flex;
  width: 220px;
  height: 30px;
  border: 1px solid #456573;
  border-radius: 5px;
  appearance: none;
`;
export const Result = styled.div`
  display: flex;
  width: 100%;
  justify-content:center;
  align-items:center;
  margin-top:10px;
  height: 30px;
  font-size:20px;
`;

export const Label = styled.button`
  margin-top: 25px;
  margin-bottom: 2px;
`;
export const Text = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  font-size: 10px;
  font-weight: bold;
  margin-left: 20px;
  /* padding-left: 3px; */
  color: #456573;
`;
export const ContainerText = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  justify-content: flex-start;
  font-size: 15px;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 15px;
  color: #456573;
`;
export const ContainerModals = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
export const Title = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;
export const Line = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #456573;
`;
