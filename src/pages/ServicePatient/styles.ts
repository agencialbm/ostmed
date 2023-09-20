import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 42px;
  /* width:80%; */
`;

export const HomeHeader = styled.div`
  display: flex;
  margin-left: 42px;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
  justify-content: space-between;
`;

export const ContainerLink = styled.a`
  display: flex;
  gap: 10px;
  margin-left: -40px;
`;

export const Link = styled.a`
  display: flex;
  color: #456573;
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

export const ContainerTop = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

export const ContainerInput = styled.div`
  margin-top: 60px;
  padding-left: 40px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 450px;
  height: 30px;

  background: tranparent;
  border-radius: 10px;
  border: 1px solid #456573;

  &::placeholder {
    padding-left: 40px;
    background: tranparent;
  }
`;
export const ContainerCollunm = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 200px;
  justify-content: center;
  background: #f3f3f3;
  border-radius: 10px;
  padding: 20px;
  margin-top: 50px;
  margin-left: 210px;
  /* justify-content:center */
`;
export const ContainerFile = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const ContainerMidle = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background: white;
`;
export const ContainerLeft = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
`;
export const ContainerLeftText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  font-size: 15px;
`;
export const Text = styled.div`
  display: flex;
  width: 100%;
`;
export const EyeContainer = styled.div`
  display: flex;
  gap: 14px;
  background: white;
  margin-right: -40px;
  button {
    background: transparent;
  }
`;
