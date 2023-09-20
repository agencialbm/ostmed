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
export const ContainerType = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background: transparent;
  font-size: 14px;
  height: 38px;
  cursor: pointer;

  .AlterType {
    display: flex;
    width: 120px;
    height: 30px;
    justify-content: center;
    padding-left: 20px;
    align-items: center;
    background: transparent;
    border: 1px solid #456573;
    border-radius: 5px;
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
  width: 100%;
  justify-content: end;
  margin-top: 30px;
`;
export const Select = styled.select`
  display: flex;
  width: 100%;
  height: 35px;
  border: 1px solid #456573;
  border-radius: 5px;
  appearance: none;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 35px;
  border: 1px solid #456573;
  border-radius: 5px;
  appearance: none;
  margin-bottom: 20px;
`;
export const InputValue = styled.input`
  display: flex;
  width: 100%;
  height: 35px;
  border: 1px solid #456573;
  border-radius: 5px;
  appearance: none;
`;
export const Label = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;

  p {
    display: flex;
    margin-right: 12px;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    color: #456573;
    margin-top: -15px;
    margin-right:50px;
  }
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #456573;
`;
export const ContainerText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;
export const ContainerModals = styled.div`
  width: 60%;
  margin-top: 30px;
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
export const ContainerChoose = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
