import {
  Container,
  ContainerButton,
  ContainerModals,
  ContainerText,
  ContainerType,
  Label,
  Line,
  Overlay,
  SaveAndAdd,
  Text
} from './styles';
import { Icon } from '@/components/Icon';
import { useEffect, useState, useContext } from 'react';
import { Input } from '../styles';
import { CloseProntuario } from '@/contexts/modalCloseProntuario';
import { PrescricaoDeOculos } from '@/contexts/prescricaoDeOculos';
import ButonAlter from '../../Components/ButtonAlter';

interface IModal {
  visible: boolean
  onClose: () => void
}

export default function ComponentPrescricaoDeOculos({
  visible,
  onClose
}: IModal) {
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

  const { openPrescricaoDeOculos } = useContext(PrescricaoDeOculos);
  const { closeCloseProntuario } = useContext(CloseProntuario);

  const Test = () => {
    onClose();
    openPrescricaoDeOculos();
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
        <ContainerText>Prescrição de óculos </ContainerText>
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
