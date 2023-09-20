import { useContext } from 'react';
import { ButtonList, ButtonMaster } from './styles';
import { TarefaContext } from '@/contexts/tarefa';
export default function ButtonAddTask() {

  const { openTarefa } = useContext(
    TarefaContext
  );


  return (
    <>
      <ButtonMaster>
        <ButtonList onClick={() => openTarefa()}>
          + Tarefa
        </ButtonList>
      </ButtonMaster>
    </>
  );
}
