import styled from 'styled-components';
import { Icon } from '@/components/Icon';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  /* margin-left: 40px; */
  h3 {
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
    align-items: flex-start;
    text-align: start;
    color: #000000;
  }
`;

export const ContainerWeek = styled.div`
  display: flex;
`;

export const ContainerHour = styled.div`
  border-right: 1px solid #456573;
  height: 280px;
  width: 210px;

  > aside {
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 14px;
    /* margin-left: 30px; */
    gap: 10px;

    p {
      font-size: 12px;
      line-height: 24px;
      color: #000000;
    }

    div {
      input {
        background: transparent;
        width: 20px;
        border-bottom: 1px solid #e8e8e8;

        text-align: center;

        font-weight: 300;
        font-size: 12px;
        line-height: 24px;
        color: #000000;
      }
    }
  }

  h3 {
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
    align-items: flex-start;
    text-align: start;
    color: #000000;
  }

  > div {
    display: flex;
    justify-content: space-around;
    margin-top: 6px;
    margin-bottom: 11px;
    align-items: center;
    text-align: center;
    p {
      font-weight: bold;
      font-size: 12px;
      line-height: 24px;
      color: #44c0c2;
    }
  }
`;
export const Week = styled.div`
  /* display: flex; */
  color: #456573;
  font-weight: bold;
  font-size: 12px;
  > div {
    /* margin-left: -50px; */
  }
`;
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    background-color: transparent;
  }
  .Selectbottom {
    margin-left: 30px;
  }
  p {
    margin-top: -5px;
  }

  Select {
    margin-top: 20px;
  }
`;
export const Text = styled.div`
  display: flex;
  margin-bottom: 25px;
  margin-left: 35px;
  h3 {
    font-weight: bold;
    font-size: 16px;
  }
`;
export const CotainerQuestions = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 35px;
`;
export const Hour = styled.div`
  display: flex;
  /* margin-left: 40px; */
  > button {
    background-color: transparent;
  }
  .hour {
    margin-left: -43px;
  }
  h3 {
    margin-top: 20px;
  }
`;
export const ContainerSelectMaster = styled.div`
  display: flex;
`;
export const Day = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  input {
    margin-right: 10px;
    vertical-align: middle;
    position: relative;
    top: -1px;
  }
  input[type='checkbox'] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 50%;
    background-color: #fff;
    color: #333;
    margin-left: 5px;
  }
  input[type='checkbox'] + label {
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  input[type='checkbox']:checked {
    background-color: #44c0c2;
    border-color: #44c0c2;
    color: #fff;
  }
  input[type='checkbox'] {
    transition: background-color 0.2s ease-out, border-color 0.2s ease-out,
      color 0.2s ease-out;
  }

  input[type='checkbox']:checked ~ [type='checkbox']:after {
    display: block;
  }

  /* input + label {
    background-image: #44c0c2 url('../../../../components/Icon/svg/check.svg')
      95.5% 50% no-repeat;
    background-repeat: no-repeat;
    background-position: center, center;
    padding: 15px;
    background-color: #ddd;
    display: inline-block;
  } */
`;
export const ContainerTable = styled.div`
  border-right: 1px solid #456573;

  text-align: left;
  font-weight: 300;
  font-size: 12px;
  line-height: 24px;

  span {
    margin-left: 30px;
  }
`;
export const ContainerTableMaster = styled.div`
  display: flex;
`;
