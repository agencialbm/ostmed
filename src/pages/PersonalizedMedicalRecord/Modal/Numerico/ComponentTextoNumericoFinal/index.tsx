import { Container, Label, Text } from './styles';
import { Input } from '../styles';
import { useContext } from 'react';
import { TextoNumerico } from '@/contexts/textoNumerico';
import { Icon } from '@/components/Icon';

export default function ComponentTextoNumericoFinal() {
  const { closeTextoNumerico } = useContext(TextoNumerico);

  return (
    <>
      <Container>
        <button className="buttonClose" onClick={() => closeTextoNumerico()}>
          <Icon
            name="closeSelect"
            size={13}
            style={{
              marginTop: '2px'
            }}
          />
        </button>
        <Label>
          <Text>Qual sua idade?</Text>
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
