
import { UserContext } from '@/contexts/user.context';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBtn, ContainerCard, ContextCard, DadosCard, HomeHeader, HomeInput, Overlay,  } from './styled';
import { Icon } from '@/components/Icon';
import { DadosPessoais } from './Components/DadosPessoais';
import { Filiacao } from './Components/Filiação';
import { Endereco } from './Components/Endereco';
import { Convenio } from './Components/Convenio';
import { CadastroContext } from '@/contexts/cadastro';
import { EditeTableModalContext } from '@/contexts/modalEditeTable';



export function PacientesModal() {
  const [page, setPage] = useState(1);
  const { EditeTablecloseModal} = useContext(EditeTableModalContext);
  const { closeCadastro } = useContext(CadastroContext);

  function handleDadosPessoais(){
    setPage(1);
  }

  const handleClose = () => {
    closeCadastro();
    EditeTablecloseModal();
  };


  function handleFilicacao(){
    setPage(2);
  }

  function handleEndereco(){
    setPage(3);
  }

  function handleConvenio(){
    setPage(4);
  }



  return (
    <>
      <HomeHeader>
        <HomeInput>
          <button> <Icon name='notification' /> </button>
          <button> <Icon name='avatar' size={60} /> </button>
        </HomeInput>
      </HomeHeader>

      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
        <ContainerCard>
          <p>CADASTRO DE NOVO PACIENTE</p>

          <ContextCard>

            {page === 1 ?   <div className='perfilCard'>
              <Icon name='perfilAgendamento' size={130}/>
              <button> <Icon name='foto' size={12}/> Tirar foto</button>
              <select>
                <option value="">Status do paciente</option>
              </select>
            </div> : ''}

            <DadosCard style={{paddingLeft: page !== 1 ? '96px' : ''}}>
              <div className='buttonNav'>
                <button onClick={handleDadosPessoais}>Dados pessoais</button>
                <button onClick={handleFilicacao}>Filiação</button>
                <button onClick={handleEndereco}>Endereço</button>
                <button onClick={handleConvenio}>Convênio</button>
                <button>Prontuário</button>
                <button>Relacionamento</button>
                <button>Arquivos</button>
                <button>Financeiro</button>
              </div>
              {page === 1 &&   <DadosPessoais />}
              {page === 2 &&    <Filiacao />}
              {page === 3 &&    <Endereco />}
              {page === 4 && <Convenio />}

              <ContainerBtn style={{position: 'fixed', right: '85px', bottom: '263px'}}>
                <button onClick={handleClose} className='voltar'>Voltar</button>
                <button className='salva'>Salvar e continuar</button>
                <button className='salva2'>Salvar</button>
              </ContainerBtn>

            </DadosCard>
          </ContextCard>
        </ContainerCard>
      </div>
    </>
  );
}
