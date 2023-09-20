import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 42px;
`;

export const HeadeTable = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 42px;
  margin-top: 15px;
  align-items: center;
  text-align: center;

  > p {
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    color: #1c1c1c;
  }

  .Text {
    font-size: 21px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #456573;
  }
`;
export const Funil = styled.div`
  display: flex;
  flex-direction: column;
  /* width:50%; */
  /* justify-content: space-between; */
  margin-left: 955px;
  margin-top: -495px;
  z-index: 100;
  position: absolute;
  /* align-items: center; */
  /* text-align: center; */

  > p {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 10px;
    line-height: 32px;
    text-align: center;
    color: white;
  }
`;

export const AfterHeadTable = styled.div``;

export const Text = styled.div`
  margin: 50px 0px 20px;
  font-weight: bold;
  font-size: 18px;
`;
export const InputTable = styled.input`
  background: #f4f4f4;
  border-radius: 40px;
  width: 200px;
  height: 32px;
  padding-left: 13px;
  padding-right: 10px;
  text-decoration: none;
  border: 1px solid #456573;
  background: transparent;
`;

export const TableSelectec = styled.div`
  display: flex;
  margin-left: -30px;
  margin-top: 10px;
  gap: 15px;
`;

export const ContainerCards = styled.div`
  display: flex;
  margin-top: 44px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ContainerTable = styled.div`
  margin-top: 10px;
`;

export const ContainerDateHour = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

export const ContainerSelectDate = styled.div`
  margin-left: -210px;
`;

export const ContainerSelectHour = styled.div``;

export const ButtonOpenModal = styled.button`
  display: flex;
  width: 200px;
  justify-content: end;
  margin-top: -24px;
  background: transparent;
`;

export const ContainerSelect = styled.div`
  display: flex;
`;

export const ContainerDate = styled.div`
  padding-left: 10px;
`;

export const ContainerDH = styled.div``;

export const ContainerPreferenceDate = styled.div``;
export const ConaitnerFunil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -610px;
  margin-left: 450px;
  p {
    color: #456573;
    font-weight: bold;
    font-size: 40px;
  }
`;
export const ContainerGrafico = styled.div`
  display: flex;
  margin-top: -200px;
`;
export const ContainerDot = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-right: 285px;
  margin-top: -280px;
`;
export const ContainerNumber = styled.div`
  border-radius: 5px;
  background: #456573;
  display: flex;
  width: 30px;
  height: 20px;
  color: white;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;
export const ContainerGraphic = styled.div`
  display: flex;
`;
