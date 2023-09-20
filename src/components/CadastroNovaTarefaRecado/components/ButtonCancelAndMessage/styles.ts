import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  height: 50px;
  justify-content: end;
  padding-right: 40px;
`;
export const Cancel = styled.button`
  margin-top: 50px;
  background: transparent;
  font-size: 14px;
  height: 38px;
  width: 87px;
  cursor: pointer;
`;
export const SaveAndAdd = styled.div`
  margin-top: 50px;
  height: 38px;
  width: 160px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #44c0c2;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;
export const Save = styled.div`
  margin-top: 50px;
  background: red;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 87px;
  background: #456573;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;
