import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 15px;
  gap: 5px;
  height: 50px;
  justify-content: flex-start;
`;
export const ContainerSelect = styled.div`
  display: flex;
  gap: 200px;
`;
export const Label = styled.label`
  display: flex;
  gap: 20px;
`;
export const Text = styled.div`
  font-size: 13px;
  color: #000000;
  font-weight: bold;
  margin-top: 10px;
`;

export const Select = styled.select`
  height: 35px;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
`;

export const Input = styled.input`
  height: 35px;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
`;

export const ContainerCheckBox = styled.div`
  width: 90%;
`;
export const ContainerSelectCheckBox = styled.div`
  /* display: flex; */
  border: 1px solid #e8e8e8;
  border-radius: 15px;
  width: 100%;

  p {
    margin: 15px 30px;
  }
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  gap: 10px;
  input {
    margin-right: 10px;
    vertical-align: middle;
    position: relative;
    top: -2px;
  }
`;
export const Ball = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 150px;
  width: 50px;
  height: 50px;
`;
export const ContainerBall = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ContainerCheckBoxMaster = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const ContainerCheck = styled.div`
  display: flex;
  gap: 50px;
`;
