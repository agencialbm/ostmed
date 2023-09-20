import {
  Container,
  ContainerButton,
  ContainerCheckBox,
  ContainerModals,
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
import { CloseProntuario } from '@/contexts/modalCloseProntuario';
import { VerdadeiroOuFalso } from '@/contexts/verdadeiroOuFalso';
import ButonAlter from '../../Components/ButtonAlter';

interface IModal {
  visible: boolean
  onClose: () => void
}

export default function ComponentVerdadeiroOuFalso({
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

  const { openVerdadeiroOuFalso } = useContext(VerdadeiroOuFalso);
  const { closeCloseProntuario } = useContext(CloseProntuario);

  const Test = () => {
    onClose();
    openVerdadeiroOuFalso();
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
        <ContainerText>Verdadeiro ou falso</ContainerText>
        <Line></Line>
        <ButonAlter onClose={onClose}/>
        <ContainerModals>
          <Label>
            <p>Título</p>
            <Input />
          </Label>
          <Text>Edite as opções</Text>
          <ContainerCheckBox>
            <input type="checkbox" />
            <Input />
          </ContainerCheckBox>
          <ContainerCheckBox>
            <input type="checkbox" />
            <Input />
          </ContainerCheckBox>
        </ContainerModals>

        <ContainerButton>
          <SaveAndAdd onClick={Test}>Incluir</SaveAndAdd>
        </ContainerButton>
      </Container>
    </Overlay>
  );
}
