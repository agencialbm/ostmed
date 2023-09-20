// import { Icon } from '@/components/Icon';
import { ContainerCard } from './styled';

export function CardWaitingList(){
  return(
    <>
      <ContainerCard>
        {/* <div className="perfil">
          <Icon name='perfilAgendamento' size={55}/>
          <p>Carlos da Silva</p>
        </div> */}

        <div className="info">
          {/* <span>ordem: 25/11/1998</span>
          <span>paciente: 000.000.000-00</span>
          <span>Celular: 11 90000-0000</span>
          <span>E-mail: carlossilva@gmail.com</span> */}

          {/* ordem: '#1',
    paciente : User1,
    tipodeatendimento: 'Consulta Particular',
    datahorariodepreferencia: '13/01 10h47',
    datadasolicitacao: '01/01 17h47',
    atendente: 'Wesley - Recepção', */}
        </div>

        {/* <div className="btns">
          <button>
            <Icon name='addd' size={36}/>
          </button>
          <button>
            <Icon name='visualizar' size={36}/>
          </button>
          <button>
            <Icon name='edite' size={36}/>
          </button>
          <button>
            <Icon name='delete' size={36}/>
          </button>
        </div> */}
      </ContainerCard>
    </>
  );
}
