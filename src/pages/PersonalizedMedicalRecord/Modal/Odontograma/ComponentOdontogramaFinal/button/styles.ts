import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 10px;
  flex-direction: column;
`

export const ContainerDente = styled.div`
  display: flex;
  width: 450px;
  height: 380px;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  flex-direction: column;
`
export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(0.2813rem);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  z-index: 200;
`
export const ContainerLine = styled.div`
  display: flex;
  width: 100%;
  /* width: 25px; */
  margin-top: 10px;
  /* button {
    display: flex;
    width: 40px;
  } */
`
export const ContainerLineOne = styled.div`
  display: flex;
  width: 100%;
  /* width: 100px; */
  margin-top: 10px;

  /* button {
    display: flex;
    width: 40px;
  } */
`
export const ContainerLineText = styled.div`
  display: flex;
  width: 95%;
  margin-left: 25px;
  justify-content: space-between;
`
export const ContainerOdonto = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
`
export const ContainerMasterOdonto = styled.div`
  display: flex;
  /* width: 70%; */
`
export const Line = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  border: 1px solid #456573;
`
export const Text = styled.div`
  margin-top: 30px;
  color: #456573;
  font-size: 14px;
  font-weight: bold;
`
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  margin-top:20px;
`
export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 35px;
  border: 1px solid #456573;
  border-radius: 5px;
  appearance: none;
`
export const Select = styled.select`
  display: flex;
  width: 100%;
  height: 35px;
  border: 1px solid #456573;
  border-radius: 5px;
  appearance: none;
`
export const ContainerIcon = styled.div`
  display: flex;
  margin-left: 20px;
`
export const ContainerAdd = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  margin: 10px 0px 10px;
  border: 1px solid #456573;
  border-radius: 10px;
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #456573;
    font-size: 14px;
    line-height: 16px;
  }
`
export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-left: 20px;
  margin-top:15px;
  .buttonSave {
    height: 27px;
    width: 50px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    cursor: pointer;
  }

  .buttonPrint {
    height: 27px;
    width: 80px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #456573;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`
