import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  /* margin-left: 40px; */
  margin-bottom:30px;
`;

export const ContainerWeek = styled.div`
  display: flex;
`;
export const ContainerHour = styled.div`
  /* border-right: 1px solid #456573; */
  /* width: 210px; */
  /* margin-top: 15px; */
  /* > div {
    display: flex;
    justify-content: space-around;
    margin-top: 6px;
    margin-bottom: 11px;
    align-items: center;
    text-align: center;
    p {
      font-size: 12px;
      line-height: 24px;
    }
  } */
`;

export const Text = styled.div`
  display: flex;
  color: #456573;
  gap: 10px;
  > button {
    background-color: transparent;
  }
`;
export const CotainerQuestions = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 35px;
`;
export const Hour = styled.div`
  display: flex;
  margin-left: 40px;
  > button {
    background-color: transparent;
  }
  .hour {
    margin-left: -43px;
  }
  h3 {
    margin-top: 20px;
  }
`;
export const ContainerSelectMaster = styled.div`
  display: flex;
  /* margin-top:30px; */
`;
export const ContainerText = styled.div`
  display: flex;
  background-color: white;
  border-radius: 5px;
  width: 665px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  padding-left:10px;
  padding-right:10px;
  /* margin-bottom: 11px; */
  align-items: center;
  text-align: center;

  .sub-item {
    margin-top: -10px;
  }
`;

export const Plus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #456573;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #456573;
`;
