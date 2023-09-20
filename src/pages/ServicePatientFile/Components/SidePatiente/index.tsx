import React from 'react';
import {
  ButtonStart,
  Container,
  ContainerList,
  ContainerListPatient,
  ContainerName,
  ContainerNumber,
  Image,
  Number,
  Text,
  TextList,
  TextListPatient
} from './styles';

export default function SidePatiente() {
  return (
    <Container>
      <Image></Image>
      <ContainerName>
        <Text>Carlos da Silva</Text>
        <p>40 anos</p>
      </ContainerName>
      <ButtonStart>Iniciar atendimento</ButtonStart>
      <Text>Retorno esperado para:</Text>

      <ContainerList>
        <ContainerNumber>
          <TextList>Consultas realizadas:</TextList>
          <Number>4</Number>
        </ContainerNumber>
        <TextList>Número de faltas:</TextList>
        <TextList>Número de remarcações:</TextList>
      </ContainerList>
      <ContainerListPatient>
        <TextListPatient>Dados do paciente:</TextListPatient>
        <TextListPatient>Telefone: +55 11 90000-0000</TextListPatient>
        <TextListPatient>E-mail: carlossilva@gmail.com</TextListPatient>
        <TextListPatient>CPF: 000.000.000-00</TextListPatient>
      </ContainerListPatient>
    </Container>
  );
}
