import styled from 'styled-components';

export const ButtonList = styled.div`
  display: flex;
  margin-right: 40px;

  justify-content: center;
  padding: 8px 12px;
  gap: 8px;
  height: 25px;
  background: #456573;
  align-items: center;
  border-radius: 10px;
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
  width: 600px;
  height: 600px;
  align-items: flex-start;
  background: #ffffff;
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
`;

export const Select = styled.select`
  height: 35px;
  border: 1px solid #456573;
  border-radius: 30px;
  appearance: none;
`;
export const Input = styled.input`
  height: 35px;
  border: 1px solid #456573;
  border-radius: 30px;
  appearance: none;
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
  margin-top: 40px;
  margin-left: 200px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  padding-left: 3px;
  color: #456573;
`;
export const User = styled.div`
  display: flex;
`;
export const Image = styled.div`
  display: flex;
  margin-left:40px;
  margin-top:30px;
  align-items: center;
   >div {
    margin-left: -80px;
  }
`;
