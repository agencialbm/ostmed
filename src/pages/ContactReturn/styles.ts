import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 42px;
`;

export const HeadeTable = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-right: 42px; */
  margin-top: 55px;
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
  gap:15px;
`;

export const ContainerCards = styled.div`
  display: flex;
  margin-top: 44px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ContainerTable = styled.div`
  margin-top: 44px;
  max-width:160rem;
  width:100%;
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
// export const ButtonSelect = styled.select`
//   display: flex;
//   flex-direction: column;

//   text {
//     font-size: 13px;
//     line-height: 24px;
//     color: #000000;
//     align-items: flex-start;
//     text-align: start;
//     margin-bottom: 4px;
//   }

//   > select {
//     border: 1px solid #ded2d9;
//     width: 238px;
//     height: 32px;
//     border-radius: 15.5px;
//     padding-left: 10px;
//   }
// `
