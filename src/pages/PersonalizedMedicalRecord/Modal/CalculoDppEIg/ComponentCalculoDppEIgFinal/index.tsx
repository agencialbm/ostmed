import {
  Container,
  ContainerButton,
  ContainerCalc,
  ContainerDetails,
  ContainerDetailsText,
  ContainerDiv,
  ContainerHistoric,
  ContainerImc,
  ContainerInput,
  ContainerInputBottom,
  ContainerText,
  Label,
  LabelPacient,
  Text
} from './styles';
import { Input } from '../styles';
import { Icon } from '@/components/Icon';
import { useContext } from 'react';
import { CalculoDppEIg } from '@/contexts/calculoDppEIg';
import { ContainerInputIn } from './../styles';

export default function ComponentCalculoDppEIgFinal() {
  const { closeCalculoDppEIg } = useContext(CalculoDppEIg);

  return (
    <>
      <Container>
        <button className="buttonClose" onClick={() => closeCalculoDppEIg()}>
          <Icon
            name="closeSelect"
            size={13}
            style={{
              marginTop: '2px'
            }}
          />
        </button>
        <ContainerImc>
          <ContainerText>IG E DPP</ContainerText>
          <LabelPacient>
            <input type="checkbox" />
            Paciente está gravida
          </LabelPacient>
          <Label>
            <ContainerCalc>
              <ContainerInput>
                <Text>Data da ultrassonografia</Text>
                <ContainerInputIn>
                  <Input />
                </ContainerInputIn>
                <Icon
                  name="calendar"
                  size={13}
                  style={{
                    marginTop: '-33px',
                    marginLeft: '105px'
                  }}
                />
              </ContainerInput>
              <ContainerInput>
                <Text>IG estimada na ultrassonografia:</Text>
                <ContainerDetails>
                  <Input />
                  <p>semanas</p>
                  <Input />
                  <p>dias</p>
                </ContainerDetails>
              </ContainerInput>
              <ContainerDetailsText>
                <Text>IG atual:</Text>
                <Text>DPP:</Text>
              </ContainerDetailsText>
              <ContainerButton>
                <button className="buttonCalc">Salvar</button>
              </ContainerButton>
            </ContainerCalc>
            <ContainerHistoric>
              <ContainerDiv></ContainerDiv>
              <ContainerCalc>
                <ContainerInputBottom>
                  <Text>DUM</Text>
                  <Input />
                  <Icon
                    name="calendar"
                    size={13}
                    style={{
                      marginTop: '-33px',
                      marginLeft: '105px'
                    }}
                  />
                </ContainerInputBottom>
                <ContainerDetailsText>
                  <Text>IG atual:</Text>
                  <Text>DPP:</Text>
                </ContainerDetailsText>
              </ContainerCalc>
              <ContainerButton>
                <button className="buttonPrint">Imprimir Prescrição</button>
              </ContainerButton>
            </ContainerHistoric>
          </Label>
        </ContainerImc>
      </Container>
      <hr
        style={{
          border: '1px dotted black',
          display: 'flex',
          width: '100%',
          marginTop: '15px'
        }}
      />
    </>
  );
}
