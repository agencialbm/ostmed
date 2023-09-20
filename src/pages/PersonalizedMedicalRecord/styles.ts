import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 42px;
`;

export const HomeHeader = styled.div`
  display: flex;
  margin-left: 42px;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
  justify-content: space-between;
`;

export const HomeInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-right: 0px;
  > button {
    background-color: transparent;
  }
`;
export const ContainerLink = styled.a`
  display: flex;
  gap: 10px;
`;

export const Link = styled.a`
  display: flex;
  font-size: 15px;
  color: #456573;
`;
export const Title = styled.div`
  margin-bottom: -40px;
  color: #456573;
  font-weight: bold;
  font-size: 20px;
`;
export const ContainerLeft = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  height: 125px;
  justify-content: space-between;
  gap: 30px;
  margin-right: 40px;
`;
export const ContainerProfessional = styled.div`
  /* margin-top: -40px; */
  display: flex;
  width: 100%;
  justify-content: space-between;
  p {
    margin-bottom: 10px;
    color: #456573;
    font-weight: bold;
  }
  /* > div {
    border-bottom: 1px solid #456573;
    display: flex;
    width: 100%;
  } */
`;

export const Input = styled.input`
  width: 530px;
  height: 30px;
  background: tranparent;
  border-radius: 10px;
  border: 1px solid #456573;

  &::placeholder {
    padding-left: 40px;
    background: tranparent;
  }
`;
export const ContainerText = styled.div``;
export const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 15px;
`;
export const ContainerTable = styled.div`
  margin-top: 20px;
`;
export const ContainerCards = styled.div`
  display: flex;
  margin-top: 44px;
  gap: 20px;
  flex-wrap: wrap;
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 44px;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const ContainerTop = styled.div`
  display: flex;
  gap: 20px;

  /* justify-content: space-between; */
`;
export const ContainerLine = styled.div`
  display: flex;
  width: 98%;
  border-bottom: 1px solid #456573;
  margin-top: 20px;
`;
export const SaveAndAdd = styled.button`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 30px;
  height: 38px;
  width: 160px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #44c0c2;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 10px;
  margin-top:60px;
`;
