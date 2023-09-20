import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* margin-top: -90px; */
  gap: 5px;
  width: 100%;
  height: 50px;
  justify-content: end;
  margin-top: 120px;
  padding-right: 30px;
  button:hover,
  a:hover {
    filter: none;
  }
`;

export const Save = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right:30px;
  font-size: 14px;
  background: white;
  height: 32px;
  width: 140px;
  border: 1px solid #456573;
  border-radius: 20px;
  color: #456573;
  font-weight: bold;
`;
