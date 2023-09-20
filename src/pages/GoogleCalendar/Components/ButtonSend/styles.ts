import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 0px;
  /* margin-right:50px; */
  gap: 5px;
  width: 500px;
  height: 100px;
  background: white;
  border-radius: 8px;
  border-bottom: 4px solid #969696;
  border-right: 2px solid #969696;
  border-left: 0.5px solid #585757;
  border-top: 0.5px solid #585757;
  border-color: #dee0e0;
  border-bottom-left-radius: 5px;

  a {
    display: flex;
    justify-content: center;
  }
`;
export const Text = styled.button`
  display: flex;
  justify-content: center;
  font-size: 14px;
  background: transparent;
  /* margin-top: 10px; */
  /* margin-left:100px; */
`;
export const SaveAndAdd = styled.button`
  display: flex;
  justify-content: center;
  /* margin-top: 30px; */
  /* margin-left: 100px; */
  height: 38px;
  width: 220px;
  font-size: 14px;
  background: white;
  border-radius: 5px;
  color: white;
  border-bottom: 2px solid #969696;
  border-right: 2px solid #969696;
  border-left: 0.5px solid #585757;
  border-top: 0.5px solid #585757;
  border-color: #dee0e0;
  border-bottom-left-radius: 5px;
`;
export const TextIcon = styled.div`
  color: black;
  font-weight: bold;
  margin-left: 25px;
  margin-top: 10px;
`;
