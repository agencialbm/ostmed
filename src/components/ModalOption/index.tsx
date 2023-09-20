import { ModalCadastroContext } from '@/contexts/modalCadastro';
import { ModalCadastroContextPaciente } from '@/contexts/modalCadastroPaciente';
import { DespesaContext } from '@/contexts/novaDespesa';
import { ReceitaModalContext } from '@/contexts/novaReceita';
import { useContext } from 'react';
import { ModalCadastro } from '../ModalCadastro';
import { ModalCadastroPaciente } from '../ModalCadastroPaciente';
import { ContainerModalOption } from './styled';
import { TarefaRecadoModalContext } from '@/contexts/tarefaRecado';
import { CadastroNovaTarefaRecado } from '../CadastroNovaTarefaRecado';
import ModalTask from '../CadastroNovaTarefaRecado/components/ModalTask';
import { TarefaContext } from '@/contexts/tarefa';
import { ModalBloquearHorario } from '../ModalBloquearHorario';
import { BloquearHorarioContext } from '@/contexts/bloquearHorario';

export function ModalOption() {
  const { modalVisibleCadastro, openModalCadastro } =
    useContext(ModalCadastroContext);
  const { modalVisibleCadastroPaciente } = useContext(
    ModalCadastroContextPaciente
  );
  const { openModalDespesa } = useContext(DespesaContext);
  const { openModalReceita } = useContext(ReceitaModalContext);
  const { openModalTarefaRecado, modalVisibleTarefaRecado } = useContext(
    TarefaRecadoModalContext
  );
  const { openModalBloquearHorario,modalBloquearVisibleCard } = useContext(
    BloquearHorarioContext
  );

  const { tarefaVisible } = useContext(
    TarefaContext
  );

  function handleOpenModal() {
    openModalCadastro();
  }
  function handleOpenTarefaRecado() {
    openModalTarefaRecado();
  }

  function handleOpenModalDespesa() {
    openModalDespesa();
  }

  function handleOpenModalReceita() {
    openModalReceita();
  }
  function handleOpenModalBloquearHorario() {
    openModalBloquearHorario();
  }


  return (
    <ContainerModalOption>
      <ModalCadastro onClose={() => false} visible={modalVisibleCadastro} />
      <ModalCadastroPaciente
        onClose={() => false}
        visible={modalVisibleCadastroPaciente}
      />
      <CadastroNovaTarefaRecado
        onClose={() => false}
        visible={modalVisibleTarefaRecado}
      />
      <ModalTask onClose={() => false} visible={tarefaVisible} />
      <button onClick={handleOpenModal}>Novo Agendamento</button>
      <ModalBloquearHorario
        onClose={() => false}
        visible={modalBloquearVisibleCard}
      />
      <button onClick={()=> openModalBloquearHorario()}>Bloquear horário</button>
      <button onClick={handleOpenModalReceita}>Nova receita</button>
      <button onClick={handleOpenModalDespesa}>Nova despesa</button>
      <button onClick={() => openModalTarefaRecado()}>Tarefa/Recado</button>
      <button >Sangria</button>
    </ContainerModalOption>
  );
}
