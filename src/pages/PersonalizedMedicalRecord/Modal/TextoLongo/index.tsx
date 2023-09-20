import {
  Container,
  ContainerButton,
  ContainerText,
  Input,
  Label,
  Line,
  Overlay,
  SaveAndAdd,
  Text
} from './styles';
import { Icon } from '@/components/Icon';
import { useEffect, useContext } from 'react';
import { TextoLongo } from '@/contexts/textoLongo';
import { CloseProntuario } from '@/contexts/modalCloseProntuario';
import ButonAlter from '../../Components/ButtonAlter';

interface IModal {
  visible: boolean
  onClose: () => void
}

export default function ComponentTextoLongo({ visible, onClose }: IModal) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible) {
    return null;
  }

  const { openTarefaTextoLongo } = useContext(TextoLongo);
  const { closeCloseProntuario } = useContext(CloseProntuario);

  const Test = () => {
    onClose();
    openTarefaTextoLongo();
    closeCloseProntuario();
  };

  return (
    <Overlay>
      <Container>
        <button className="buttonClose" onClick={onClose}>
          <Icon
            name="closeSelect"
            size={13}
            style={{
              marginTop: '2px'
            }}
          />
        </button>
        <ContainerText>Texto longo </ContainerText>
        <Line></Line>
        <ButonAlter onClose={onClose}/>
        <Label>
          <Text>Título</Text>
          <Input />
        </Label>

        <ContainerButton>
          <SaveAndAdd onClick={Test}>Incluir</SaveAndAdd>
        </ContainerButton>
      </Container>
    </Overlay>
  );
}
