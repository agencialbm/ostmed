import { Container, ContainerButton, ContainerOption, Label } from './styles';
import { useContext } from 'react';
import { MultiplaEscolha } from '@/contexts/multiplaEscolha';
import { Icon } from '@/components/Icon';

export default function ComponentMultiplaEscolhaFinal() {
  const { closeMultiplaEscolha } = useContext(MultiplaEscolha);

  return (
    <>
      <Container>
        <button className="buttonClose" onClick={() => closeMultiplaEscolha()}>
          <Icon
            name="closeSelect"
            size={13}
            style={{
              marginTop: '2px'
            }}
          />
        </button>
        <p>Selecione o opção desejada</p>
        <ContainerOption>
          <Label>
            <input type="checkbox" /> Opção 1
            <input type="checkbox" /> Opção 2
            <input type="checkbox" /> Opção 3
            <input type="checkbox" /> Opção 4
            <input type="checkbox" /> Opção 5
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
