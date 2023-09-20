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
  margin-top: 90px;
`;

export const THead = styled.thead`
  height: 56px;
  background: tranparent;
  border-top: 0.2rem solid #969696;
  tr {
    th {
      font-weight: 700;
      font-size: 14px;
      line-height: 7rem;
      letter-spacing: 0.1px;
      color: #25282b;
    }
  }
  tr th:nth-child(1) {
    padding-left: 30px;
  }

  tr th:nth-child(4) {
    padding-right: 30px;
    display: flex;
    justify-content: end;
  }
`;

export const ThHead = styled.th`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 7rem;
  color: ${({ theme }) => theme.WHITE_LIGHT_100};
  padding: 0 2.4rem;
  margin-bottom: 1.2rem;
`;

export const TBody = styled.tbody`
  /* border-top: 0.5rem solid #fff; */


  .hmm {
    display: flex;
    align-items: center;
    text-align: center;
  }

  > tr {
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
  line-height: 4rem;
  border-bottom: 1px solid #969696;
  background: tranparent;
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
  background: transparent;
  margin-right: 20px;
  justify-content: flex-end;
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