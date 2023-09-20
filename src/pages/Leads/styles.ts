import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 42px;
`;

export const HeadeTable = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 42px;
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

export const AfterHeadTable = styled.div`
  margin-top: 40px;
`;

export const Text = styled.div`
  margin: 25px 0px 20px;
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
  gap: 10px;

  > button {
    background-color: transparent;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  margin-top: 44px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ContainerTable = styled.div`
  margin-top: 44px;
`;

export const ContainerDateHour = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

export const ContainerSelectDate = styled.div`
  margin-left: -250px;
`;

export const ContainerSelectHour = styled.div``;

export const ButtonOpenModal = styled.button`
  display: flex;
  width: 225px;
  justify-content: end;
  margin-top: -24px;
  background: transparent;
`;

export const ContainerSelect = styled.div`
  display: flex;
`;

export const ContainerDate = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContainerDH = styled.div``;

export const ContainerPreferenceDate = styled.div``;

export const Checkbox = styled.input``;

export const ContainerCheckbox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ContainerIndicated = styled.div`
  margin-top: 15px;
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 10px;
  padding-right: 30px;
`;
export const InputLeads = styled.input`
  width: 200px;
  height: 32px;
  border-radius: 15.5px;
  border: 1px solid #456573;
  padding-left: 16px;
  appearance: none;
  color: black;
}
`;
