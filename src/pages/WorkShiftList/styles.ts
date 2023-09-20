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
  margin-right: 10px;
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
  font-size:15px;
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
  margin-top: -40px;
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
export const ContainerText = styled.div``;
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
  margin-top: -45px;
  flex-wrap: wrap;
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
