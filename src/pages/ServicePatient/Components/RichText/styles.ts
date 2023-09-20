import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 300px;
  /* align-items: center; */
  width: 85%;
  margin-left: 210px;
  margin-top: -750px;
  flex-direction: column;
  /* margin-top:10px; */
  background: white;
`;

export const ContainerList = styled.div`
  display: flex;
`;

export const ContainerListPatient = styled.div`
  width: 100%;
  justify-content: flex-start;
  padding-left: 20px;
  margin-top: -20px;
`;
export const TextListPatient = styled.input`
  width: 100%;
  justify-content: flex-start;
  /* padding-left: 20px; */
  margin-top: -20px;
`;

export const ContainerNumber = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 20px;
  margin-top: -20px;
  button {
    background: transparent;
  }
`;
export const Number = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 20px;
  color: #456573;
  border: 1px solid #e8e8e8;
  background: #e8e8e8;
  border-radius: 10px;
  font-size: 13px;
  margin-top: 29px;
  margin-left: 10px;
`;
