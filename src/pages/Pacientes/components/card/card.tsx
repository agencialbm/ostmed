import { Icon } from '@/components/Icon';
import { ContainerCard } from './styled';
import { EditeTableModalContext } from '@/contexts/modalEditeTable';
import { ModalCadastroContextPaciente } from '@/contexts/modalCadastroPaciente';
import { ModalCadastroContext } from '@/contexts/modalCadastro';
import { useContext } from 'react';

export function Card() {
  const { EditeTableopenModal } = useContext(EditeTableModalContext);
  const { openModalCadastroPaciente } = useContext(ModalCadastroContextPaciente);
  const { openModalCadastro } = useContext(ModalCadastroContext);

  return (
    <>
      <ContainerCard>
        <div className="perfil">
          <Icon name="perfilAgendamento" size={55} />
          <p>Carlos da Silva</p>
        </div>

        <div className="info">
          <span>Data de nasc: 25/11/1998</span>
          <span>CPF: 000.000.000-00</span>
          <span>Celular: 11 90000-0000</span>
          <span>E-mail: carlossilva@gmail.com</span>
        </div>

        <div className="btns">
          {/* <button onClick={openModalCadastroPaciente}> */}
          <a href="/ostmed/home/ServicePatient">
            <button /* onClick={openModalCadastroPaciente} */>
              <Icon name="addd" size={36} />
            </button>
          </a>

          <button onClick={openModalCadastro}>
            <Icon name="visualizar" size={36} />
          </button>
          <button onClick={EditeTableopenModal}>
            <Icon name="edite" size={36} />
          </button>
          <button>
            <Icon name="delete" size={36} />
          </button>
        </div>
      </ContainerCard>
    </>
  );
}
