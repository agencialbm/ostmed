import { useContext } from 'react';
import {
  Container,
  ContainerProfessional,
  HomeHeader,
  Input,
  Title,
  ContainerLeft,
  ContainerTop,
  ContainerInput,
  ContainerLine,
  Text,
  SaveAndAdd,
  ContainerButton
} from './styles';
import { TextoCurto } from '@/contexts/textoCurto';
import { TextoLongo } from '@/contexts/textoLongo';
import { TextoNumerico } from '@/contexts/textoNumerico';
import { CalculoImc } from '@/contexts/calculoImc';
import { PrescricaoDeOculos } from '@/contexts/prescricaoDeOculos';
import { BuscarTabelas } from '@/contexts/buscarTabelas';
import { CalculoDppEIg } from '@/contexts/calculoDppEIg';
import { CurvaDeCrescimento } from '@/contexts/curvaDeCrescimento';
import { Data } from '@/contexts/data';
import { EscolherUmaLista } from '@/contexts/escolherUmaLista';
import { Odontograma } from '@/contexts/odontograma';
import { Orcamento } from '@/contexts/orcamento';
import { MultiplaEscolha } from '@/contexts/multiplaEscolha';
import { VerdadeiroOuFalso } from '@/contexts/verdadeiroOuFalso';
import { CloseProntuario } from '@/contexts/modalCloseProntuario';
import ModalTask from './Modal';
import Header from '@/components/Header';
import ComponentTextoCurtoFinal from './Modal/TextoCurto/ComponentTextoCurtoFinal';
import ComponentTextoLongoFinal from './Modal/TextoLongo/ComponentTextoLongoFinal';
import ComponentTextoNumericoFinal from './Modal/Numerico/ComponentTextoNumericoFinal';
import ComponentCalculoImcFinal from './Modal/CalculoImc/ComponentCalculoImcFinal';
import ComponentPrescricaoDeOculosFinal from './Modal/PrescricaoDeOculos/ComponentPrescricaoDeOculosFinal';
import ComponentBuscarTabelasFinal from './Modal/BuscarTabelas/ComponentBuscarTabelasFinal';
import ComponentCalculoDppEIgFinal from './Modal/CalculoDppEIg/ComponentCalculoDppEIgFinal';
import ComponentCurvaDeCrescimentoFinal from './Modal/CurvaDeCrescimento/ComponentCurvaDeCrescimentoFinal';
import ComponentDataFinal from './Modal/Data/ComponentDataFinal';
import ComponentEscolherUmaListaFinal from './Modal/EscolherUmaLista/ComponentEscolherUmaListaFinal';
import ComponentOdontogramaFinal from './Modal/Odontograma/ComponentOdontogramaFinal';
import ComponentOrcamentoFinal from './Modal/Orcamento/ComponentOrcamentoFinal';
import ComponentMultiplaEscolhaFinal from './Modal/MultiplaEscolha/ComponentMultiplaEscolhaFinal';
import ComponentVerdadeiroOuFalsoFinal from './Modal/VerdadeiroOuFalso/ComponentVerdadeiroOuFalsoFinal';

export default function PersonalizedMedicalRecord() {
  const { textoCurtoVisible } = useContext(TextoCurto);
  const { textoLongoVisible } = useContext(TextoLongo);
  const { textoNumericoVisible } = useContext(TextoNumerico);
  const { calculoImcVisible } = useContext(CalculoImc);
  const { prescricaoDeOculosVisible } = useContext(PrescricaoDeOculos);
  const { buscarTabelasVisible } = useContext(BuscarTabelas);
  const { calculoDppEIgVisible } = useContext(CalculoDppEIg);
  const { curvaDeCrescimentoVisible } = useContext(CurvaDeCrescimento);
  const { dataVisible } = useContext(Data);
  const { escolherUmaListaVisible } = useContext(EscolherUmaLista);
  const { odontogramaVisible } = useContext(Odontograma);
  const { orcamentoVisible } = useContext(Orcamento);
  const { multiplaEscolhaVisible } = useContext(MultiplaEscolha);
  const { verdadeiroOuFalsoVisible } = useContext(VerdadeiroOuFalso);
  const { closeProntuarioVisible, closeCloseProntuario, openCloseProntuario } =
    useContext(CloseProntuario);
  return (
    <Container>
      {closeProntuarioVisible && (
        <ModalTask
          visible={closeProntuarioVisible}
          onClose={closeCloseProntuario}
        />
      )}

      <HomeHeader>
        <p></p>
        <Header />
      </HomeHeader>
      <Title>Prontuário personalizado</Title>

      <ContainerTop>
        <ContainerLeft>
          <ContainerProfessional>
            <ContainerInput>
              <p>Nome do documento</p>
              <Text>Nome</Text>
              <Input />
            </ContainerInput>
            <ContainerButton>
              <SaveAndAdd onClick={openCloseProntuario}>
                + Adicionar novo campo
              </SaveAndAdd>
            </ContainerButton>
          </ContainerProfessional>
        </ContainerLeft>
      </ContainerTop>
      <ContainerLine></ContainerLine>
      {textoCurtoVisible && <ComponentTextoCurtoFinal />}
      {textoLongoVisible && <ComponentTextoLongoFinal />}
      {textoNumericoVisible && <ComponentTextoNumericoFinal />}
      {calculoImcVisible && <ComponentCalculoImcFinal />}
      {prescricaoDeOculosVisible && <ComponentPrescricaoDeOculosFinal />}
      {buscarTabelasVisible && <ComponentBuscarTabelasFinal />}
      {calculoDppEIgVisible && <ComponentCalculoDppEIgFinal />}
      {curvaDeCrescimentoVisible && <ComponentCurvaDeCrescimentoFinal />}
      {dataVisible && <ComponentDataFinal />}
      {escolherUmaListaVisible && <ComponentEscolherUmaListaFinal />}
      {odontogramaVisible && <ComponentOdontogramaFinal />}
      {orcamentoVisible && <ComponentOrcamentoFinal />}
      {multiplaEscolhaVisible && <ComponentMultiplaEscolhaFinal />}
      {verdadeiroOuFalsoVisible && <ComponentVerdadeiroOuFalsoFinal />}
    </Container>
  );
}
