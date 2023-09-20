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
  padding-right: 0px;
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
export const Label = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 2px;
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
  color: #456573;
`;
export const ContainerText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;
export const ContainerModals = styled.div``;
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
