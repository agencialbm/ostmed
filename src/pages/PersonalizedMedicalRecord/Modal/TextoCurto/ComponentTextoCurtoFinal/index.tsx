import { Container, Label, Text } from './styles';
import { Input } from '../styles';
import { Icon } from '@/components/Icon';
import { useContext } from 'react';
import { TextoCurto } from '@/contexts/textoCurto';

export default function ComponentTextoCurtoFinal() {
  const { closeTextoCurto } = useContext(TextoCurto);

  return (
    <>
      <Container>
        <button className="buttonClose" onClick={() => closeTextoCurto()}>
          <Icon
            name="closeSelect"
            size={13}
            style={{
              marginTop: '2px'
            }}
          />
        </button>
        <Label>
          <Text>Qual seu nome?</Text>
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
