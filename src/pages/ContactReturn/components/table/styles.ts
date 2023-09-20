import styled, { css } from 'styled-components';

interface TrProps {
  check?: boolean
  disabled?: boolean
}

export const Container = styled.div`
  display: flex;
  width: 95%;
  overflow-x: auto;
`;
export const TableComponent = styled.table`
  background: ${({ theme }) => theme.WHITE_LIGHT_100};
  border-radius: 0.8rem;
  text-align: left;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  /* background: ${({ theme }) => theme.BLUE_DARK_800}; */
  height: 56px;
  background: #e8e8e8;
  tr {
    th {
      width: 100%;
      font-weight: 700;
      font-size: 10px;

      letter-spacing: 0.1px;
      color: #25282b;
      /* padding-left: 25px; */
      padding-right: 100px;
      white-space: nowrap;
    }
  }

  tr th:nth-child(1) {
    padding-left: 25px;
  }
  th:nth-child(2) {
    padding-left: 25px;
  }
  tr th:nth-child(3) {
    padding-left: 0px;
  }
  tr th:nth-child(4) {
    padding-left: 0px;
  }
  tr th:nth-child(5) {
  }
  tr th:nth-child(6) {
    /* padding-right: 25px; */
  }
  tr th:nth-child(7) {
    padding-left: 0px;
  }
  tr th:nth-child(8) {
    padding-left: 0px;
  }
  tr th:nth-child(9) {
    /* margin-left: -15px; */
  }
  tr th:nth-child(10) {
    /* margin-left: -15px; */
  }
  tr th:nth-child(11) {
    /* margin-right: -15px; */
  }
  tr th:nth-child(12) {
    padding-left: 0px;
  }
`;

export const ThHead = styled.th`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.WHITE_LIGHT_100};
  padding: 0 2.4rem;
  margin-bottom: 1.2rem;
`;

export const TBody = styled.tbody`
  border-top: 0.2rem solid #dbdde0;
  .hmm {
    align-items: center;
    text-align: center;
    padding-left: 25px;
    padding-right: 100px;
    white-space: nowrap;
  }

  > tr {
    td {
      button {
        background: transparent;
      }
    }
  }
  tr:hover {
    background: #44c0c2;
  }
  td:nth-child(1) {
    padding-left: 30px;
  }
`;

export const Tr = styled.tr<TrProps>`
  ${({ theme, check }) =>
    check &&
    css`
      background: ${theme.ORANGE_DARK_100};
      Td {
        font-weight: 700;
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      background: #f6f6f6;
      cursor: not-allowed;
      color: #dadada;
      Td {
        font-weight: 700;
      }
    `}
`;

export const Td = styled.td`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.6rem;
  padding: 0.7rem 0rem;
  border-bottom: 1px solid #e8e8e8;
  background: white;
  padding-right: 25px;
`;

export const RowUser = styled.div`
  display: flex;
`;

export const Image = styled.img`
  margin-right: 0.8rem;
`;
export const Input = styled.input`
  margin: 1rem;
  width: 300px;
  height: 35px;
  /* background:red; */
  border: 1px solid #e8e8e8;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Row2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const TdFirstColumn = styled.div`
  font-weight: bold;
  margin-left: 10px;
`;
export const ContainerImage = styled.div`
  display: flex;
`;
