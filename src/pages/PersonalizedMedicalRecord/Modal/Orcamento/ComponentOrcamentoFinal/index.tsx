import {
  Container,
  ContainerButton,
  ContainerCalc,
  ContainerDetails,
  ContainerDetailsEnd,
  ContainerHistoric,
  ContainerImc,
  ContainerInput,
  ContainerText,
  Input,
  Label,
  Text
} from './styles';
import { Icon } from '@/components/Icon';
import { useState, useContext } from 'react';
import { Orcamento } from '@/contexts/orcamento';
import { InputValue } from '../styles';

export default function ComponentOrcamentoFinal() {
  const { closeOrcamento } = useContext(Orcamento);
  const [selectedModal, setSelectedModal] = useState(false);

  const selectOpenModal = () => {
    setSelectedModal(true);
  };
  const selectCloseModal = () => {
    setSelectedModal(false);
  };

  return (
    <>
      <Container>
        <button className="buttonClose" onClick={() => closeOrcamento()}>
          <Icon
            name="closeSelect"
            size={13}
            style={{
              marginTop: '2px'
            }}
          />
        </button>
        <ContainerImc>
          <ContainerText>Orçamento:</ContainerText>
          <Label>
            <ContainerCalc>
              <ContainerInput>
                <Text>Procedimento</Text>
                <ContainerDetails>
                  <Input />
                </ContainerDetails>
              </ContainerInput>
              <ContainerInput>
                <Text>Valor (R$)</Text>
                <ContainerDetails>
                  <InputValue />
                </ContainerDetails>
              </ContainerInput>
              <ContainerButton>
                <button className="buttonCalc" onClick={selectOpenModal}>
                  Adicionar
                </button>
              </ContainerButton>
            </ContainerCalc>
            <ContainerHistoric>
              <hr
                style={{
                  border: '1px solid grey',
                  display: 'flex',
                  width: '100%',
                  marginTop: '15px'
                }}
              />
              {selectedModal ? (
                <ContainerInput>
                  <Text>500005451 - Consulta domiciliar por nutricionista</Text>
                  <ContainerDetailsEnd>
                    <Text>R$ 150,00</Text>
                    <button className="buttonClose">
                      <Icon
                        name="deleteTable"
                        size={13}
                        style={{
                          marginTop: '2px'
                        }}
                      />
                    </button>
                  </ContainerDetailsEnd>
                </ContainerInput>
              ) : (
                ''
              )}
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
