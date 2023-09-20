import styled, { css } from 'styled-components';

interface TrProps {
  check?: boolean
  disabled?: boolean
}

export const Container = styled.div`
  display: flex;
  flex: 1;
`;
export const TableComponent = styled.table`
  width: 100%;
  background: ${({ theme }) => theme.WHITE_LIGHT_100};
  border-radius: 0.8rem;
  overflow: hidden;
  text-align: left;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  /* background: ${({ theme }) => theme.BLUE_DARK_800}; */
  height: 56px;
  background: #e8e8e8;
  tr {
    th {
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.1px;
      color: #25282b;
      /* padding-left: 25px; */
    }
  }

  tr th:nth-child(1) {
    padding-left: 30px;
  }
  tr th:nth-child(6) {
    padding-left: 25px;
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
    display: flex;
    align-items: center;
    text-align: center;
  }

  > tr {
    td {
      /* padding-left: 25px;
      padding-right: 25px; */
      button {
        background: transparent;
      }
    }
  }
  tr:hover {
    background: #44C0C2;
  }
  td:nth-child(1) {
    padding-left: 30px;
  }
  /* td:nth-child(4) {
    padding-left: 45px;
  }
  td:nth-child(5) {
    padding-left: 25px;
  } */

  /* td:nth-child(2) {
    width: 200px;
  } */

  /* td:nth-child(1) {
    padding-left: 30px;
  }

  td:nth-child(2) {
    width: 380px;
  }

  td:nth-child(3) {
    width: 360px;
  } */
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
`;

export const RowUser = styled.div`
  display: flex;
`;

export const Image = styled.img`
  margin-right: 0.8rem;
`;

export const EyeContainer = styled.div`
  display: flex;
  gap: 14px;
  background: white;
  margin-right: -60px;
`;

export const ImageEye2 = styled.img`
  width: 2.2rem;
  height: 2rem;
  margin-right: 0.9rem;
`;

export const IconContainer = styled.div`
  width: 1.5rem;
  height: 2rem;
  margin-right: 1.5rem;
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
