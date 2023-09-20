import {
  Container,
  ContainerButton,
  ContainerModals,
  ContainerText,
  Label,
  Line,
  Overlay,
  SaveAndAdd,
  Text
} from './styles';
import { Icon } from '@/components/Icon';
import { useEffect, useContext } from 'react';
import { Input } from '../styles';
import { CloseProntuario } from '@/contexts/modalCloseProntuario';
import { CalculoImc } from '@/contexts/calculoImc';
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

  const { openCalculoImc } = useContext(CalculoImc);
  const { closeCloseProntuario } = useContext(CloseProntuario);

  const Test = () => {
    onClose();
    openCalculoImc();
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
        <ContainerText>Cálculo IMC</ContainerText>
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
