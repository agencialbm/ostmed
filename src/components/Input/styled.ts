import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  > input {
    background: #f4f4f4;
    border-radius: 10px;
    width: 388px;
    height: 40px;
    padding-left: 41px;
  }
  > section {
    position: relative;
    width: 10px;
    left: 20px;
    top: 10px;

    button {
      background: transparent;
    }
  }
`;
