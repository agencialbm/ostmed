import styled from 'styled-components';

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #44c0c2;
  padding-right: 250px;
  height: 62px;

  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #fbfbfb;

  position: fixed;
  width: 100%;
  bottom: 0;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
