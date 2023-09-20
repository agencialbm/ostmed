import {
  Container,
  ContainerButton,
  ContainerCalc,
  ContainerDetails,
  ContainerDetailsImc,
  ContainerHistoric,
  ContainerImc,
  ContainerInput,
  ContainerText,
  Label,
  Text,
  TextImc
} from './styles';
import { Icon } from '@/components/Icon';
import { useContext, useState } from 'react';
import { Input } from '../styles';
import { Result } from '../../styles';
import { CalculoImc } from '@/contexts/calculoImc';

export default function ComponentCalculoImcFinal() {
  const [weight, setWeight] = useState(12);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  const calculateImc = () => {
    const imc = weight / (height * height);
    const formattedImc = imc.toFixed(2);
    setResult(+formattedImc);
  };

  const { closeCalculoImc } = useContext(CalculoImc);

  return (
    <>
      <Container>
        <button className="buttonClose" onClick={() => closeCalculoImc()}>
          <Icon
            name="closeSelect"
            size={13}
            style={{
              marginTop: '2px'
            }}
          />
        </button>
        <ContainerImc>
          <ContainerText>Cálculo IMC:</ContainerText>
          <Label>
            <ContainerCalc>
              <ContainerInput>
                <Text>Peso</Text>
                <ContainerDetails>
                  <Input
                    onChange={e => setWeight(+e.target.value)}
                    placeholder="Ex: 100"
                  />
                  Kg
                </ContainerDetails>
              </ContainerInput>
              <ContainerInput>
                <Text>Altura</Text>
                <ContainerDetails>
                  <Input
                    onChange={e => setHeight(+e.target.value)}
                    placeholder="Ex: 1.80"
                  />
                  m
                </ContainerDetails>
              </ContainerInput>
              <ContainerDetailsImc>
                <TextImc>IMC:</TextImc>
                <Result>{result}</Result>
                <button>
                  <Icon
                    name="groupList"
                    size={13}
                    style={{
                      marginTop: '10px'
                    }}
                  />
                </button>
              </ContainerDetailsImc>
              <button className="buttonCalc" onClick={calculateImc}>
                calcular
              </button>
              <button className="buttonGraphic">Ver gráfico</button>
              <button className="buttonPrint">Imprimir Prescrição</button>
            </ContainerCalc>
            <ContainerHistoric></ContainerHistoric>
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
