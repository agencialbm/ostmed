import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 130px;
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
  border: 1px solid #456573;
`;
