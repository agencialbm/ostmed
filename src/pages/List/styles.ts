import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 42px;
`;

export const HomeHeader = styled.div`
  display: flex;
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
  margin-bottom: -65px;
  color: #456573;
  font-weight: bold;
  font-size: 20px;
`;
export const ContainerLeft = styled.div`
  width: 50%;
  /* left: 0; */
  /* margin-top: 20px; */
  /* height: 125px; */
  /* gap: 30px; */
`;
export const ContainerProfessional = styled.div`
  margin-top: -40px;
  p {
    color: #456573;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  min-width: 670px;
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
  padding-right: 120px;
`;
export const Text = styled.div`
  display: flex;
  background: white;
  align-items: center;
  /* width: 530px; */
  height: 80px;
  padding-left: 20px;
  font-size: 12px;
  margin-top: 10px;
`;
export const ContainerRight = styled.div`
  width: 50%;
  margin-right:50px;
`;
export const ContainerTable = styled.div`
  margin-top: 20px;
  margin-right: 120px;
`;
export const ContainerCards = styled.div`
  display: flex;
  margin-top: 44px;
  gap: 20px;
  flex-wrap: wrap;
`;
export const ContainerInput = styled.div`
  margin-top: 44px;
  flex-wrap: wrap;
`;
export const InputContainer = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const ContainerTop = styled.div`
  display: flex;
  margin-top:20px;
  gap: 20px;
`;
