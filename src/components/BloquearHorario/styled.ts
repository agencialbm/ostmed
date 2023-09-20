import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: -30px;

  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 200;
`;

export const Container = styled.div`
  width: 300px;
  height: 94%;
  background: #f5f5f5;
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .buttonClose {
    background: transparent;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  > p {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    color: #456573;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const ContainerCard = styled.div`
  /* display: flex; */
  width: 260px;
  height: 120px;
  margin-top: 30px;
  background: white;
  border-radius: 10px;
`;
export const Text = styled.div`
  display: flex;
  margin-top: 15px;
  margin-left: 10px;
`;
export const ContainerName = styled.div`
  display: flex;

  input {
    margin-top: 12px;
    margin-left: 20px;
  }
`;
export const Status = styled.div`
  display: flex;
  Select {
    width: 100px;
    margin-top: 8px;
    border: none;
    color: red;
    background: transparent;
  }
`;
export const Ball = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 10px;
  margin-top: 20px;
  border-radius: 50%;
  background: red;
  border: 1px solid red;
`;

export const ContainerDateAndHour = styled.div`
  display: flex;
  width: 100%;
  margin-right: 10px;
  justify-content: flex-end;
`;

export const ContainerDate = styled.div`
  display: flex;
  p {
    margin-left: 5px;
    margin-top: 18px;
    font-size: 9px;
  }
`;

export const ContainerTop = styled.div`
  /* display: flex; */
`;
export const ContainerBottom = styled.div`
  display: flex;
  margin-top: 50px;
  /* justify-content:baseline; */
`;
