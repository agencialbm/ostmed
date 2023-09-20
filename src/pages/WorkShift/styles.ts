import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 42px;
`;
export const ContainerBottom = styled.div`
  /* gap: 90px; */
`;

export const CotainerQuestions = styled.div`
display: flex;
gap: 50px;
margin-top: 35px;
`;

export const Text = styled.div`
  display: flex;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  > button {
    background-color: transparent;
  }
  .Selectbottom {
    /* margin-left: 30px; */
  }
  p {
    margin-top: -30px;
    > button {
    background-color: transparent;
  }
  }


  Select {
    width: 140px;
    margin-left: -5px;
    margin-top: 20px;
  }
`;
export const ContainerSelectMaster = styled.div`
  display: flex;
  /* margin-top:30px; */
`;
export const ContainerLink = styled.a`
  display: flex;
  gap: 10px;
`;

export const Link = styled.a`
  display: flex;
  font-size:15px;
  color: #456573;
`;
export const HomeHeader = styled.div`
  display: flex;
  margin-left: 42px;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
  justify-content: space-between;
`;

export const HomeInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-right: 10px;
  > button {
    background-color: transparent;
  }
`;
