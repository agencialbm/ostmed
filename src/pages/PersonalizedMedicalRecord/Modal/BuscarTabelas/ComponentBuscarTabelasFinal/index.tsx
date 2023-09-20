import {
  Container,
  ContainerButton,
  ContainerCalc,
  ContainerDetails,
  ContainerHistoric,
  ContainerImc,
  ContainerInput,
  Input,
  Label,
  Text
} from './styles';
import { Icon } from '@/components/Icon';
import { useContext } from 'react';
import { BuscarTabelas } from '@/contexts/buscarTabelas';

export default function ComponentBuscarTabelasFinal() {
  const { closeBuscarTabelas } = useContext(BuscarTabelas);

  return (
    <Container>
      <button className="buttonClose" onClick={() => closeBuscarTabelas()}>
        <Icon
          name="closeSelect"
          size={13}
          style={{
            marginTop: '2px'
          }}
        />
      </button>
      <ContainerImc>
        <Label>
          <ContainerCalc>
            <ContainerInput>
              <Text>Diagnósticos</Text>
              <ContainerDetails>
                <Input />
                <Icon
                  name="pequisar"
                  size={13}
                  style={{
                    marginTop: '0px',
                    marginLeft: '-30px'
                  }}
                />
              </ContainerDetails>
            </ContainerInput>

            <ContainerButton></ContainerButton>
          </ContainerCalc>
          <ContainerHistoric>
            <p>C024 - Neoplasia maligna da amígdala lingual</p>
            <ContainerButton>
              <button className="buttonPrint">Imprimir Prescrição</button>
              <button className="buttonCalc">Adicionar</button>
            </ContainerButton>
          </ContainerHistoric>
        </Label>
      </ContainerImc>
    </Container>
  );
}
