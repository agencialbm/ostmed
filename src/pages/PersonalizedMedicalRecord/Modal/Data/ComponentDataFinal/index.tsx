import { Container, Label, Text } from './styles';
import { Input } from '../styles';
import { useContext } from 'react';
import { Data } from '@/contexts/data';
import { Icon } from '@/components/Icon';

export default function ComponentDataFinal() {
  const { closeData } = useContext(Data);
  return (
    <Container>
      <button className="buttonClose" onClick={() => closeData()}>
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
        <hr
          style={{
            border: '1px dotted black',
            display: 'flex',
            width: '100%',
            marginTop: '15px'
          }}
        />
      </Label>
    </Container>
  );
}
