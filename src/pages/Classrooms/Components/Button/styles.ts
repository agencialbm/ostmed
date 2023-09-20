import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 500px;

  gap: 5px;
  width: 100%;
  height: 50px;
  justify-content: end;
  padding-right: 50px;
`;
export const Cancel = styled.button`
  margin-top: 50px;
  background: transparent;
  font-size: 14px;
  height: 38px;
  width: 87px;
`;
export const SaveAndAdd = styled.button`
  margin-top: 50px;
  height: 38px;
  width: 160px;
  font-size: 14px;
  background: #44c0c2;
  border-radius: 20px;
  color: white;
`;
export const Save = styled.button`
  margin-top: 50px;
  background: red;
  font-size: 14px;
  height: 38px;
  width: 87px;
  background: #456573;
  border-radius: 20px;
  color: white;
`;
