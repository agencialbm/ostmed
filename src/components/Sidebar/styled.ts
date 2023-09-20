import styled from 'styled-components';
import { ISidebar } from './interface';

// export const Container = styled.div`
//   overflow-y: scroll;
//   width: 80%;
//   &::-webkit-scrollbar {
//     width: 5px;
//   }

//   &::-webkit-scrollbar-thumb {
//     border-radius: 50px;
//     background: #ededed;
//     height: 5px;
//   }

//   &::-webkit-scrollbar-track {
//     box-shadow: inset 0 0 5px grey;
//     border-radius: 10px;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background: #a9a9a9;
//   }
// `

export const SidebarContainer = styled.div`
  width: 100%;
  max-width: 296px;
  background-color: #ffffff;
  /* height: 100vh; */

  /* .side {
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background: #ededed;
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #a9a9a9;
    }
  } */

  .logo {
    position: relative;
    top: -25px;
  }

  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  > aside {
    margin-top: -60px;
    display: flex;
    gap: 60px;
    margin-bottom: 12px;
    align-items: center;

    p {
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #969696;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      select {
        width: 110px;
        background-color: transparent;
        border: none;
        font-size: 12px;
        text-transform: uppercase;
        color: #969696;

        &:focus {
          outline: none;
        }

        option {
          font-size: 12px;
        }
      }
    }
  }
`;

export const SidebarButton = styled.button<ISidebar>`
  width: 100%;
  height: 44px;
  max-width: 230px;
  display: flex;
  align-items: center;
  text-align: center;

  padding-left: 15px;

  &:hover {
    color: #44c0c2;
  }

  background: ${props =>
    props.isActive
      ? 'linear-gradient(0deg, rgba(90, 195, 197, 0.1), rgba(90, 195, 197, 0.1)), #FFFFFF'
      : 'transparent'};
  border-radius: 8px;

  font-size: 16px;
  line-height: 24px;
  color: #585757;
  align-items: center;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};

  display: flex;
  gap: 15px;
`;

export const SidebarContext = styled.span`
  width: 100%;
  max-width: 230px;
  display: flex;

  padding-left: 15px;
  margin-top: 45px;
  margin-bottom: 22px;

  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #969696;
`;
