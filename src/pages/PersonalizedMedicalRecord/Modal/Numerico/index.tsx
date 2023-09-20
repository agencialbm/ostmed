import {
  Container,
  ContainerButton,
  ContainerModals,
  ContainerText,
  ContainerType,
  Input,
  Label,
  Line,
  Overlay,
  SaveAndAdd,
  Text
} from './styles';
import { Icon } from '@/components/Icon';
import { useEffect, useState, useContext } from 'react';
import { TextoNumerico } from '@/contexts/textoNumerico';
import { CloseProntuario } from '@/contexts/modalCloseProntuario';
import ButonAlter from '../../Components/ButtonAlter';

interface IModal {
  visible: boolean
  onClose: () => void
}

export default function ComponentTextoNumerico({ visible, onClose }: IModal) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

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

  const { openTextoNumerico } = useContext(TextoNumerico);
  const { closeCloseProntuario } = useContext(CloseProntuario);

  const Test = () => {
    onClose();
    openTextoNumerico();
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
        <ContainerText>Numérico</ContainerText>
        <Line></Line>
        <ButonAlter onClose={onClose}/>
        <ContainerModals>
          <Label>
            <Text>Título</Text>
            <Input />
          </Label>
        </ContainerModals>

        <ContainerButton>
          <SaveAndAdd onClick={Test}>Incluir</SaveAndAdd>
        </ContainerButton>
      </Container>
    </Overlay>
  );
}
