import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
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
  .buttonSave {
    height: 27px;
    width: 100px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #44c0c2;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    padding-right: 0;
  }

  .buttonPrint {
    height: 27px;
    width: 150px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #456573;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    padding-right: 0;
  }

  p {
    margin-bottom: 20px;
    font-size:14px;
  }
`;
export const ContainerButton = styled.button`
  display: flex;
  width: 100%;
`;
export const Label = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 2px;
  font-size:14px;

  input {
    margin-left: 10px;
    margin-right: 10px;
    vertical-align: middle;
    position: relative;
    top: -5px;
  }
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
  border: 1px solid #456573;
`;
export const ContainerOption = styled.div`
  display: flex;
  width: 70%;
`;
