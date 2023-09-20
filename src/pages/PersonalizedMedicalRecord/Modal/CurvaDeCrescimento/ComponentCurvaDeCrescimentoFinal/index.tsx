import { Container, Label, Text } from './styles';
import { Input } from '../styles';
import { useContext } from 'react';
import { Icon } from '@/components/Icon';
import { CurvaDeCrescimento } from '@/contexts/curvaDeCrescimento';

export default function ComponentCurvaDeCrescimentoFinal() {
  const { closeCurvaDeCrescimento } = useContext(CurvaDeCrescimento);

  return (
    <Container>
      <button className="buttonClose" onClick={() => closeCurvaDeCrescimento()}>
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
