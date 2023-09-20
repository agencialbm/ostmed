import { Container, Label, Text } from './styles';
import { Input } from '../styles';
import { useContext } from 'react';
import { TextoLongo } from '@/contexts/textoLongo';
import { Icon } from '@/components/Icon';

export default function ComponentTextoLongoFinal() {
  const { closeTarefaTextoLongo } = useContext(TextoLongo);

  return (
    <>
      <Container>
        <button className="buttonClose" onClick={() => closeTarefaTextoLongo()}>
          <Icon
            name="closeSelect"
            size={13}
            style={{
              marginTop: '2px'
            }}
          />
        </button>
        <Label>
          <Text>Qual sua reclamação?</Text>
          <Input />
        </Label>
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
