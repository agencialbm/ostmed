import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  width: 13%;
  margin-left: -40px;
  margin-top: -90px;
  flex-direction: column;
  /* margin-top:10px; */
  background: #456573;
`;
export const Image = styled.div`
  width: 152px;
  height: 152px;
  border-radius: 50%;
  background: #d9d9d9;
  margin-top: 80px;
`;
export const ContainerName = styled.div`
  color: white;
  p {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
    font-size: 13px;
  }
`;
export const Text = styled.div`
  color: white;
  margin-top: 20px;
  font-size: 15px;
  font-weight: bold;
`;
export const ButtonStart = styled.button`
  margin-top: 30px;
  height: 38px;
  width: 160px;
  font-size: 14px;
  background: #44c0c2;
  border-radius: 20px;
  color: white;
`;
export const ContainerList = styled.div`
  width: 100%;
  justify-content: flex-start;
  padding-left: 20px;
  margin-top: 40px;
`;
export const TextList = styled.div`
  color: white;
  font-size: 13px;
  margin-top: 30px;
`;
export const ContainerListPatient = styled.div`
  width: 100%;
  justify-content: flex-start;
  padding-left: 20px;
  margin-top: 40px;
`;
export const TextListPatient = styled.div`
  color: white;
  font-size: 13px;
  margin-top: 30px;
`;
export const ContainerNumber = styled.div`
  display: flex;
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
  margin-left:10px;
`;
