import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@styles/global'
import Colors from '@styles/theme'
import { Router } from '@routes/Router'
import { UserContextProvider } from './contexts/user.context'
import ModalContextProvider from './contexts/modal'
import ModalCadastroContextProvider from './contexts/modalCadastro'
import ModalCadastroPacienteContextProvider from './contexts/modalCadastroPaciente'
import CadastroContextProvider from './contexts/cadastro'
import ReceitaModalContextProvider from './contexts/novaReceita'
import DespesaContextProvider from './contexts/novaDespesa'
import EditeTableModalContextProvider from './contexts/modalEditeTable'
import TarefaRecadoModalContextProvider from './contexts/tarefaRecado'
import TarefaContextProvider from './contexts/tarefa'
import TarefaCardContextProvider from './contexts/tarefaCard'
import BloquearHorarioContext from './contexts/bloquearHorario'
import TextoCurtoProvider from './contexts/textoCurto'
import TextoLongoProvider from './contexts/textoLongo'
import TextoNumericoProvider from './contexts/textoNumerico'
import CloseProntuarioProvider from './contexts/modalCloseProntuario'
import CalculoImcProvider from './contexts/calculoImc'
import PrescricaoDeOculosProvider from './contexts/prescricaoDeOculos'
import BuscarTabelasProvider from './contexts/buscarTabelas'
import CalculoDppEIgProvider from './contexts/calculoDppEIg'
import CurvaDeCrescimentoProvider from './contexts/curvaDeCrescimento'
import DataProvider from './contexts/data'
import EscolherUmaListaProvider from './contexts/escolherUmaLista'
import MultiplaEscolhaProvider from './contexts/multiplaEscolha'
import OdontogramaProvider from './contexts/odontograma'
import OrcamentoProvider from './contexts/orcamento'
import VerdadeiroOuFalsoProvider from './contexts/verdadeiroOuFalso'
import OdontogramaPrescription from './contexts/odontogramaPrescription';

export function App() {
  return (
    <OdontogramaPrescription>
      <VerdadeiroOuFalsoProvider>
        <OrcamentoProvider>
          <OdontogramaProvider>
            <MultiplaEscolhaProvider>
              <EscolherUmaListaProvider>
                <DataProvider>
                  <CurvaDeCrescimentoProvider>
                    <CalculoDppEIgProvider>
                      <BuscarTabelasProvider>
                        <PrescricaoDeOculosProvider>
                          <CalculoImcProvider>
                            <CloseProntuarioProvider>
                              <TextoNumericoProvider>
                                <TextoLongoProvider>
                                  <TextoCurtoProvider>
                                    <BloquearHorarioContext>
                                      <TarefaCardContextProvider>
                                        <TarefaContextProvider>
                                          <TarefaRecadoModalContextProvider>
                                            <EditeTableModalContextProvider>
                                              <DespesaContextProvider>
                                                <ReceitaModalContextProvider>
                                                  <CadastroContextProvider>
                                                    <ModalCadastroPacienteContextProvider>
                                                      <ModalCadastroContextProvider>
                                                        <ModalContextProvider>
                                                          <UserContextProvider>
                                                            <ThemeProvider
                                                              theme={Colors}
                                                            >
                                                              <Router />
                                                              <GlobalStyle />
                                                            </ThemeProvider>
                                                          </UserContextProvider>
                                                        </ModalContextProvider>
                                                      </ModalCadastroContextProvider>
                                                    </ModalCadastroPacienteContextProvider>
                                                  </CadastroContextProvider>
                                                </ReceitaModalContextProvider>
                                              </DespesaContextProvider>
                                            </EditeTableModalContextProvider>
                                          </TarefaRecadoModalContextProvider>
                                        </TarefaContextProvider>
                                      </TarefaCardContextProvider>
                                    </BloquearHorarioContext>
                                  </TextoCurtoProvider>
                                </TextoLongoProvider>
                              </TextoNumericoProvider>
                            </CloseProntuarioProvider>
                          </CalculoImcProvider>
                        </PrescricaoDeOculosProvider>
                      </BuscarTabelasProvider>
                    </CalculoDppEIgProvider>
                  </CurvaDeCrescimentoProvider>
                </DataProvider>
              </EscolherUmaListaProvider>
            </MultiplaEscolhaProvider>
          </OdontogramaProvider>
        </OrcamentoProvider>
      </VerdadeiroOuFalsoProvider>
    </OdontogramaPrescription>
  )
}
