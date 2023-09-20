import styled from 'styled-components';

export const HomeHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
  justify-content: space-between;
`;

export const HomeSelect = styled.div`
  display: flex;
  gap: 10px;

  > button {
    background-color: transparent;
  }
`;

export const HomeInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  > button {
    background-color: transparent;
  }
`;

export const ContainerPatient = styled.div`
  display: flex;

  buttonOpen {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 20px;
    margin-left: 20px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: -30px;

  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 200;
`;

export const ContainerSide = styled.div`
  width: 300px;
  height: 94%;
  background: #f5f5f5;
  padding: 25px;
  color: #456573;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .buttonClose {
    background: transparent;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 50px;

  > p {
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
    margin-bottom: -30px;
    text-align: left;
    color: #456573;
  }
`;
// export const ContainerButton = styled.div`
//   display: flex;
//   margin-top: 20px;
// `
export const Text = styled.div`
  display: flex;
  margin-top: 15px;
  margin-left: 10px;
`;
export const ContainerName = styled.div`
  display: flex;

  input {
    margin-top: 12px;
    margin-left: 20px;
  }
`;
export const Status = styled.div`
  display: flex;
  Select {
    width: 100px;
    margin-top: 8px;
    border: none;
    color: red;
    background: transparent;
  }
`;
export const Ball = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 10px;
  margin-top: 20px;
  border-radius: 50%;
  background: #d9d9d9;
  /* border: 1px solid red; */
`;

export const ContainerDateAndHour = styled.div`
  display: flex;
  width: 100%;
  margin-right: 10px;
  justify-content: flex-end;
`;

export const ContainerDate = styled.div`
  display: flex;
  p {
    margin-left: 5px;
    margin-top: 18px;
    font-size: 9px;
  }
`;

export const EyeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-right: 30px;
  gap: 14px;
  margin-top: 20px;

  button {
    background: transparent;
  }
`;
export const EyeContainerTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-right: 40px;
  gap: 14px;
  margin-top: 20px;

  button {
    background: transparent;
  }
`;
export const ContainerStatus = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;

  Select {
    display: flex;
    /* width: 100%; */
    justify-content: center;
    width: 150px;
    margin-left: 10px;
    margin-top: 10px;
  }
`;
export const ContainerWhats = styled.button`
  display: flex;
  width: 200px;
  height: 30px;
  margin-left: -30px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: none;
  flex-direction: column;
  color: white;
  background: #32cd32;
`;
export const ContainerFinancial = styled.button`
  display: flex;
  width: 200px;
  height: 30px;
  margin-left: -30px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: none;
  flex-direction: column;
  color: white;
  background: #456573;
`;
export const ContainerService = styled.button`
  display: flex;
  width: 200px;
  height: 30px;
  margin-left: -30px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: none;
  flex-direction: column;
  color: white;
  background: #44c0c2;
`;
export const ContainerDetailsPatient = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const ContainerDatePatient = styled.strong`
  display: flex;
  width: 100%;
  margin-left: 10px;
  justify-content: flex-start;
`;
export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
`;
export const ContainerAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin-top: 10px;

  p {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-left: 10px;
  }
`;
export const ContainerBall = styled.div`
  display: flex;
  width: 100%;
`;
export const ContainerLine = styled.div`
  display: flex;
  gap: 10px;
  margin-top: -20px;
  margin-bottom: 30px;
  .first {
    border: 1px solid #456573;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
  }
  .second {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background: #456573;
  }
`;
