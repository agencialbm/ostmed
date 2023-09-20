import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 291.05px;
  height: 277px;
  background: #ffffff;
  box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
  border-radius: 10px;
  padding: 20px;

  .perfil {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 24px;

    p {
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.1px;
      color: #000000;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 17px;

    span {
      font-size: 12px;
      line-height: 24px;
      color: #585757;
    }
  }

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 19px;
    gap: 9px;
    > button {
        background-color: transparent;
      }
    a {
      > button {
        background-color: transparent;
      }
    }
  }
`;
