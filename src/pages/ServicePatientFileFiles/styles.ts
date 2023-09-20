import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 42px;
  margin-top: -15px;
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
  margin-top: 15px;
`;

export const ContainerInput = styled.div`
  margin-top: 100px;
  padding-left: 40px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 700px;
  height: 30px;

  background: tranparent;
  border-radius: 10px;
  border: 1px solid #456573;

  &::placeholder {
    padding-left: 15px;
    background: tranparent;
  }
`;
export const ContainerCollunm = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerBottomLine = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -25px;
`;
export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  /* gap:50px; */
  margin-top: -710px;
`;
export const ContainerLine = styled.div`
  display: flex;
  /* width: 100%; */
  height: 69vh;
  border-left: 1px solid #456573;
  margin-left: 40px;
  .first {
    border: 1px solid #456573;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    background: #456573;
  }
  .second {
    border: 1px solid #44c0c2;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    background: #44c0c2;
  }
`;
export const ContainerLineTwo = styled.div`
  display: flex;
  height: 69vh;
  border-left: 1px solid #44c0c2;
  margin-left: 5px;
`;
export const ContainerButton = styled.div`
  display: flex;
  width: 120px;
  flex-direction: column;
  color: #44c0c2;
  border: 1px solid #44c0c2;
  justify-content: space-between;
  margin-top: 15px;
  /* margin-left: -30px; */
  border-radius: 5px;
  height: 25px;
`;
export const Revenue = styled.div`
  display: flex;
  width: 130px;
  height: 35px;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
  font-size: 12px;
  border: 1px solid #456573;
  border-radius: 5px;
  padding: 5px;
`;
export const File = styled.div`
  display: flex;
  width: 130px;
  height: 35px;
  align-items: center;
  gap: 10px;
  margin-left: 40px;
  font-size: 12px;
  border: 1px solid #456573;
  border-radius: 5px;
  padding: 5px;
`;
export const ContainerFileAndRevenue = styled.div`
  display: flex;
  /* gap: 25px; */
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  color: #456573;
  font-weight: bold;
`;
export const EyeContainer = styled.div`
  display: flex;
  /* gap: 15px; */
  padding: 40px;
  margin-top: -40px;
  button {
    border: 1px solid #456573;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
    margin-left: 25px;
  }
`;
export const First = styled.div`
  button {
    border: 1px solid #32cd32;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* flex-direction: column; */
  margin-bottom: 55px;
  border-bottom: 2px solid #456573;

  /* > div {
    border-bottom: 1px solid #456573;
    display: flex;
    width: 200%;
  } */
`;
export const ContainerTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 510px;
  border-radius: 10px;
  height: 80px;
  background: #e2e2e2;
  margin-top: 10px;
  margin-left: 114px;
  padding-right: 30px;
  p {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    margin-left: 30px;
  }
`;
export const ContainerImage = styled.div`
  display: flex;
  /* width: 100%; */

  > div {
    border: 1px solid #0085ff;
    border-radius: 50%;
    display: flex;
    width: 25px;
    height: 25px;
    background: #0085ff;
    color: white;
    font-weight: bold;
    font-size: 20px;
    justify-content: center;
    align-items: center;
  }
`;
export const ContainerMaster = styled.div`
  display: flex;
`;
export const ContainerSecondText = styled.div`
  display: flex;
  width: 100%;
  margin-top: -30px;
`;
export const ButtonCreateFile = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 3px;
  background: transparent;
`;
