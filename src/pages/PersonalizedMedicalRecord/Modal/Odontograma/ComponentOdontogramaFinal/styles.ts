import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 350px;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 10px;
  padding: 18px;
  padding-right: 40px;
  /* display: flex; */
  flex-direction: column;
  margin-top: 20px;
  button {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-right: 20px;
    background: transparent;
  }
`;
export const Label = styled.button`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 2px;
`;
export const Text = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
  /* padding-left: 3px; */
  color: #456573;
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  margin-top:20px;
  border: 1px solid #456573;
`;
export const ContainerAdd = styled.div`
  display: flex;
  width: 100%;
  padding:20px;
  margin:10px 0px 10px;
  border: 1px solid #456573;
  border-radius:10px;
`
export const ContainerPrecription = styled.div`
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #456573;
    font-size: 14px;
    line-height: 16px;
  }
`
export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-left: 20px;
  .buttonSave {
    height: 27px;
    width: 50px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    cursor: pointer;
  }

  .buttonPrint {
    height: 27px;
    width: 80px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #456573;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`
