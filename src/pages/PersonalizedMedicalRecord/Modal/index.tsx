import {
  Container,
  ContainerButton,
  ContainerModals,
  ContainerText,
  Label,
  Line,
  Overlay,
  SaveAndAdd,
  Text,
  Title
} from './styles';
import { Icon } from '@/components/Icon';
import { useEffect, useState } from 'react';
import TextoCurto from './TextoCurto';
import TextoLongo from './TextoLongo';
import Numerico from './Numerico';
import CalculoImc from './CalculoImc';
import PrescricaoDeOculos from './PrescricaoDeOculos';
import BuscarTabelas from './BuscarTabelas';
import CalculoDppEIg from './CalculoDppEIg';
import CurvaDeCrescimento from './CurvaDeCrescimento';
import Data from './Data';
import EscolherUmaLista from './EscolherUmaLista';
import MultiplaEscolha from './MultiplaEscolha';
import Odontograma from './Odontograma';
import Orcamento from './Orcamento';
import VerdadeiroOuFalso from './VerdadeiroOuFalso';

interface IModal {
  visible: boolean
  onClose: () => void
}

export default function ModalTask({ visible, onClose }: IModal) {
  const [openModalTextoCurto, setOpenModalTextoCurto] = useState(false);
  const [openModalTextoLongo, setOpenModalTextoLongo] = useState(false);
  const [openModalTextoNumerico, setOpenModalTextoNumerico] = useState(false);
  const [openModalBuscarTabelas, setOpenModalBuscarTabelas] = useState(false);
  const [openModalCalculoDppElg, setOpenModalCalculoDppElg] = useState(false);
  const [openModalCurvaDeCrescimento, setOpenModalCurvaDeCrescimento] =
    useState(false);
  const [openModalData, setOpenModalData] = useState(false);
  const [openModalEscolherUmaLista, setOpenModalEscolherUmaLista] =
    useState(false);
  const [openModalOdontograma, setOpenModalOdontograma] = useState(false);
  const [openModalOrcamento, setOpenModalOrcamento] = useState(false);
  const [openModalMultiplaEscolha, setOpenModalMultiplaEscolha] =
    useState(false);
  const [openModalVerdadeiroOuFalso, setOpenModalVerdadeiroOuFalso] =
    useState(false);
  const [openModalCalculoImc, setOpenModalCalculoImc] = useState(false);
  const [openModalprescricaoDeOculos, setOpenModalprescricaoDeOculos] =
    useState(false);

  const handleOpenModal = () => {
    setOpenModalTextoCurto(true);
  };

  const handleCloseModal = () => {
    setOpenModalTextoCurto(false);
  };
  const handleOpenModalTextoLongo = () => {
    setOpenModalTextoLongo(true);
  };

  const handleCloseModalTextoLongo = () => {
    setOpenModalTextoLongo(false);
  };
  const handleOpenModalTextoNumerico = () => {
    setOpenModalTextoNumerico(true);
  };

  const handleCloseModalTextoNumerico = () => {
    setOpenModalTextoNumerico(false);
  };
  const handleOpenModalCalculoImc = () => {
    setOpenModalCalculoImc(true);
  };

  const handleCloseModalCalculoImc = () => {
    setOpenModalCalculoImc(false);
  };
  const handleOpenModalPrescricaoDeOculos = () => {
    setOpenModalprescricaoDeOculos(true);
  };

  const handleCloseModalPrescricaoDeOculos = () => {
    setOpenModalprescricaoDeOculos(false);
  };
  const handleOpenModalBuscarTabelas = () => {
    setOpenModalBuscarTabelas(true);
  };

  const handleCloseModalBuscarTabelas = () => {
    setOpenModalBuscarTabelas(false);
  };
  const handleOpenModalCalculoDppElg = () => {
    setOpenModalCalculoDppElg(true);
  };

  const handleCloseModalCalculoDppElg = () => {
    setOpenModalCalculoDppElg(false);
  };
  const handleOpenModalCurvaDeCrescimento = () => {
    setOpenModalCurvaDeCrescimento(true);
  };

  const handleCloseModalCurvaDeCrescimento = () => {
    setOpenModalCurvaDeCrescimento(false);
  };
  const handleOpenModalData = () => {
    setOpenModalData(true);
  };

  const handleCloseModalData = () => {
    setOpenModalData(false);
  };
  const handleOpenModalEscolherUmaLista = () => {
    setOpenModalEscolherUmaLista(true);
  };

  const handleCloseModalEscolherUmaLista = () => {
    setOpenModalEscolherUmaLista(false);
  };
  const handleOpenModalOdontograma = () => {
    setOpenModalOdontograma(true);
  };

  const handleCloseModalOdontograma = () => {
    setOpenModalOdontograma(false);
  };
  const handleOpenModalOrcamento = () => {
    setOpenModalOrcamento(true);
  };

  const handleCloseModalOrcamento = () => {
    setOpenModalOrcamento(false);
  };
  const handleOpenModalVerdadeiroOuFalso = () => {
    setOpenModalVerdadeiroOuFalso(true);
  };

  const handleCloseModalVerdadeiroOuFalso = () => {
    setOpenModalVerdadeiroOuFalso(false);
  };
  const handleOpenModalMultiplaEscolha = () => {
    setOpenModalMultiplaEscolha(true);
  };

  const handleCloseModalMultiplaEscolha = () => {
    setOpenModalMultiplaEscolha(false);
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

  return (
    <Overlay>
      {openModalTextoCurto && (
        <TextoCurto visible={openModalTextoCurto} onClose={handleCloseModal} />
      )}
      {openModalTextoLongo && (
        <TextoLongo
          visible={openModalTextoLongo}
          onClose={handleCloseModalTextoLongo}
        />
      )}
      {openModalTextoNumerico && (
        <Numerico
          visible={openModalTextoNumerico}
          onClose={handleCloseModalTextoNumerico}
        />
      )}
      {openModalCalculoImc && (
        <CalculoImc
          visible={openModalCalculoImc}
          onClose={handleCloseModalCalculoImc}
        />
      )}
      {openModalprescricaoDeOculos && (
        <PrescricaoDeOculos
          visible={openModalprescricaoDeOculos}
          onClose={handleCloseModalPrescricaoDeOculos}
        />
      )}

      {openModalBuscarTabelas && (
        <BuscarTabelas
          visible={openModalBuscarTabelas}
          onClose={handleCloseModalBuscarTabelas}
        />
      )}
      {openModalCalculoDppElg && (
        <CalculoDppEIg
          visible={openModalCalculoDppElg}
          onClose={handleCloseModalCalculoDppElg}
        />
      )}
      {openModalCurvaDeCrescimento && (
        <CurvaDeCrescimento
          visible={openModalCurvaDeCrescimento}
          onClose={handleCloseModalCurvaDeCrescimento}
        />
      )}
      {openModalData && (
        <Data
          visible={openModalData}
          onClose={handleCloseModalData}
        />
      )}
      {openModalEscolherUmaLista && (
        <EscolherUmaLista
          visible={openModalEscolherUmaLista}
          onClose={handleCloseModalEscolherUmaLista}
        />
      )}
      {openModalOdontograma && (
        <Odontograma
          visible={openModalOdontograma}
          onClose={handleCloseModalOdontograma}
        />
      )}
      {openModalOrcamento && (
        <Orcamento
          visible={openModalOrcamento}
          onClose={handleCloseModalOrcamento}
        />
      )}
      {openModalVerdadeiroOuFalso && (
        <VerdadeiroOuFalso
          visible={openModalVerdadeiroOuFalso}
          onClose={handleCloseModalVerdadeiroOuFalso}
        />
      )}
      {openModalMultiplaEscolha && (
        <MultiplaEscolha
          visible={openModalMultiplaEscolha}
          onClose={handleCloseModalMultiplaEscolha}
        />
      )}
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
        <Title>Adicionar novo campo</Title>
        <Line></Line>
        <ContainerText>Qual tipo de campo que deseja adicionar?</ContainerText>
        <ContainerModals>
          <Label onClick={handleOpenModal}>
            <Text>Texto curto</Text>
          </Label>
          <Label onClick={handleOpenModalTextoLongo}>
            <Text>Texto longo</Text>
          </Label>
          <Label onClick={handleOpenModalTextoNumerico}>
            <Text>Numérico</Text>
          </Label>
          <Label onClick={handleOpenModalCalculoImc}>
            <Text>Cálculo IMC</Text>
          </Label>
          <Label onClick={handleOpenModalVerdadeiroOuFalso}>
            <Text>Verdadeiro ou Falso</Text>
          </Label>
          <Label onClick={handleOpenModalEscolherUmaLista}>
            <Text>Escolher de uma lista</Text>
          </Label>
          <Label onClick={handleOpenModalMultiplaEscolha}>
            <Text>Multipla escolha</Text>
          </Label>
          <Label onClick={handleOpenModalData}>
            <Text>Data</Text>
          </Label>
          <Label onClick={handleOpenModalBuscarTabelas}>
            <Text>Buscar em tabelas</Text>
          </Label>
          <Label onClick={handleOpenModalOrcamento}>
            <Text>Orçamento</Text>
          </Label>
          <Label onClick={handleOpenModalCalculoDppElg}>
            <Text>Cálculo DPP e IG</Text>
          </Label>
          <Label onClick={handleOpenModalCurvaDeCrescimento}>
            <Text>Curva de crescimento</Text>
          </Label>
          <Label onClick={handleOpenModalPrescricaoDeOculos}>
            <Text>Prescrição de óculos</Text>
          </Label>
          <Label onClick={handleOpenModalOdontograma}>
            <Text>Odontograma</Text>
          </Label>
        </ContainerModals>

        <ContainerButton>
          {/* <Cancel onClick={() =>  closeTarefa()}>Cancelar</Cancel> */}
          <SaveAndAdd>Incluir</SaveAndAdd>
        </ContainerButton>
      </Container>
    </Overlay>
  );
}
