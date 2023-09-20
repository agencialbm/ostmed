import styled from 'styled-components';


export const ContainerModalOption =  styled.div`
width: 153px;
height: 170px;
z-index: 10;

background: #FFFFFF;
box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.25);
border-radius: 10px;

position: absolute;
right: 40px;

display: flex;
justify-content: center;
flex-direction: column;
padding: 0 20px 0 20px;


> button {
  background: transparent;
  font-size: 12px;
line-height: 24px;
text-align: start;

&:hover{
  color: #44C0C2;
}
}
`;
