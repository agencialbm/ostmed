import styled from 'styled-components';
import Colors from '../../styles/theme';

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  @media (max-width: 600px) {
    margin-top: 0px;
    margin-bottom: -60px;
      }

  @media (max-width: 380px) {
    margin-top: 100px;
    margin-bottom: 0px;
    }
`;

export const LoginHeadline = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  margin-bottom: 36px;

  color: #456573;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 45rem;
`;

export const LoginSubtitle = styled.p`
  color: ${Colors.text.dark};
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid #6c757d;
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    width: 80%;
  }

  > p {
    color: #828282;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
  }

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;

export const LoginImg = styled.img`
  width: 292px;
  height: 60px;
  margin-bottom: 90px;
`;

export const Help = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 90px;
  margin-bottom: 120px;


  > p {
    font-size: 18px;
    line-height: 25px;
    color: #456573;
  }

  > button {
    font-size: 18px;
    line-height: 25px;
    color: #44c0c2;
    background-color: transparent;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 0px;

    > button {
      font-size: 16px;
    }

    > p {
      font-size: 16px;
    }
  }
`;

export const LoginRecoverPassword = styled.aside`
    position: relative;
    top: -30px;

  > div {
    display: flex;
    gap: 8px;

    p {
      font-size: 12px;
      line-height: 16px;
      color: #a1a1a1;
    }
  }

  > button {
    background-color: transparent;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #44c0c2;
  }

  display: flex;
  gap: 230px;

  @media (max-width: 600px) {
    gap: 110px;
  }

  @media (max-width: 400px) {
    gap: 80px;
  }
`;

export const LoginCustomInput = styled.div`
  > button {
    background-color: transparent;
    position: relative;
    top: -32px;
    left: 398px;
  }

  @media (max-width: 600px) {
    > button {
      left: 290px;
  }
  }

  @media (max-width: 400px) {
    > button {
      left: 258px;
  }
}
`;
