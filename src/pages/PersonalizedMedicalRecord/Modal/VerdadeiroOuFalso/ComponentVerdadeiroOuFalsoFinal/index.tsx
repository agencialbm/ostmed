import { Container, ContainerButton, ContainerOption, Label, Text } from './styles';
import { Icon } from '@/components/Icon';
import { useContext } from 'react';
import { VerdadeiroOuFalso } from '@/contexts/verdadeiroOuFalso';

export default function ComponentVerdadeiroOuFalsoFinal() {
  const { closeVerdadeiroOuFalso } = useContext(VerdadeiroOuFalso);
  return (
    <>
      <Container>
        <button className="buttonClose" onClick={() => closeVerdadeiroOuFalso()}>
          <Icon
            name="closeSelect"
            size={13}
            style={{
              marginTop: '2px'
            }}
          />
        </button>
        <p>Título</p>
        <ContainerOption>
          <Label>
            <input type="checkbox" /> Verdadeiro
            <input type="checkbox" /> Falso
          </Label>
          <ContainerButton>
            <button className="buttonSave">Salvar</button>
            <button className="buttonPrint">Imprimir prescrição</button>
          </ContainerButton>
        </ContainerOption>
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
