import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  height: 50px;
  justify-content: end;
  padding-right: 10px;
`;

export const SaveAndAdd = styled.button`
  margin-top: 0px;
  height: 25px;
  width: 150px;
  font-size: 14px;
  background: #456573;
  border-radius: 20px;
  color: white;
`;

export const ButtonList = styled.div`
  display: flex;
  /* margin-right: 40px; */
  margin-top:-20px;
  justify-content: center;
  padding: 8px 12px;
  gap: 8px;
  height: 35px;
  background: #456573;
  align-items: center;
  border-radius: 20px;
  width: 120px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;
export const ButtonMaster = styled.button`
  display: flex;
  width: 100%;
  background: transparent;
  justify-content: end;
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
export const Container = styled.div`
  width: 700px;
  align-items: flex-start;
  background: #456573;
  border-radius: 10px;
  padding: 18px;
  display: flex;
  flex-direction: column;

  Select {
    width: 450px;
    &:first-child {
      /* width: 200px; */
      background: red;
    }
  }
  Icon {
    margin-top: -20px;
  }
  button{
    background:transparent;
  }
`;

export const Select = styled.select`
  height: 35px;
  /* border: 1px solid #456573; */
  border-radius: 30px;
  /* appearance: none; */
`;
export const Input = styled.input`
  display: flex;
  width: 550px;
  height: 35px;
  border: 1px solid white;
  border-radius: 5px;
  appearance: none;
  background: #456573;

  &::placeholder {
    color: white;
    padding-left: 35px;
  }
`;
export const Label = styled.label`
  margin-left: 42px;
  margin-top: 25px;
  margin-bottom: 2px;
`;
export const Text = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 15px;
  font-weight: bold;
  padding-left: 3px;
  color: #456573;
`;
export const ContainerTetx = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 0px;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding-left: 3px;
  color: white;
`;
export const Plus = styled.div`
  display: flex;
  color: #456573;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #456573;
`;
export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  margin-bottom:10px;
  flex-wrap: wrap;
`;
