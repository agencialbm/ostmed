import { useState } from 'react';
import {
  Container,
  ContainerCall,
  ContainerInput,
  ContainerText,
  Input,
  Label,
  Text,
  Toggler
} from './styles';
import { ToggleOn } from '@/components/TogglerOn';

export default function CallCenter() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = (newIsOn: boolean) => {
    setIsOn(newIsOn);
  };

  return (
    <Container>
      <ContainerCall>
        <p>Tele Atendimento</p>
        <Toggler>
          <ContainerText>
            <Text>Deseja ativar o tele atendimento na sua conta?</Text>
            <ToggleOn isOn={isOn} onToggle={handleToggle}/>
          </ContainerText>
        </Toggler>
      </ContainerCall>
      <ContainerInput>
        <Label>
          <Text>Observação tele atendimento</Text>
          <Input style={{ width: '300px' }} />
        </Label>
      </ContainerInput>
    </Container>
  );
}
