import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 42px;
  p {
    margin-top: 50px;
  }
`;

export const HomeHeader = styled.div`
  display: flex;
  margin-left: 0px;
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
  margin-right: 90px;
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
  margin-top: 25px;
  margin-bottom: -40px;
  color: #456573;
  font-weight: bold;
  font-size: 20px;
`;
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  height: 125px;
  justify-content: space-between;
  margin-right: 40px;
`;
export const ContainerProfessional = styled.div`
  margin-top: 0px;
  p {
    margin-bottom: 10px;
    color: #456573;
    font-weight: bold;
  }
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
export const ContainerText = styled.div`
  width: 45%;
  left: 0;
  margin-top: -180px;
  p {
    color: black;
    font-size: 15px;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  padding-left: 10px;
  font-size: 15px;
  margin-top: 5px;
`;
export const ContainerTable = styled.div`
  margin-top: 150px;
`;
export const ContainerCards = styled.div`
  display: flex;
  margin-top: 44px;
  gap: 20px;
  flex-wrap: wrap;
`;
export const ContainerInput = styled.div`
  display: flex;
  gap: 15px;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const ContainerFirst = styled.div`
  border-radius: 5px;
  border: 1px solid #456573;
  height: 35px;
  width: 300px;
  background: #e8e8e8;
`;
export const ContainerTop = styled.div`
  display: flex;
`;
export const ContainerRight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right:200px;
  margin-top: 250px;
  /* margin-right:200px; */
  /* align-items:center; */
`;
export const TextNum = styled.div`
  font-size: 20px;
`;
export const ContainerTextTop = styled.div`
  display: flex;
  margin-top: -30px;
`;
export const Line = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid black;
`;
