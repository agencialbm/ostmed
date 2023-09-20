import { Icon } from '../Icon';
import { useContext, useEffect, useState } from 'react';
import { Cep, ContainerBtn, ContainerModal,  ContainerModal2,  ContainerModalFoto,  Context,  DadosCity,  DadosEndereco,  DadosMae,  DadosMaeCell,  DadosPai,  ModalObs,  Overlay, Rg, Telephone } from './styled';
import { ModalCadastroContextPaciente } from '@/contexts/modalCadastroPaciente';
import { ModalCadastroContext } from '@/contexts/modalCadastro';


interface IOrderModal {
  visible?: boolean;
  onClose: () => void
}



export function ModalCadastroPaciente({visible, onClose}: IOrderModal){
  const [menor, setMenor] = useState(false);
  const [nomeMae, setNomeMae] = useState('');



  function handleChange(event : any) {
    setNomeMae(event.target.value);
  }



  function handleDataChange(event: any) {
    const data = event.target.value;
    const ano = data.split('/')[2];
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - parseInt(ano);


    if( idade < 18){
      setMenor(true);
    } else {
      setMenor(false);
    }

  }


  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent){
      if(event.key === 'Escape'){
        onClose();
        closeModalCadastroPaciente();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  },[onClose]);

  if(!visible){
    return null;
  }

  const { closeModalCadastroPaciente } = useContext(ModalCadastroContextPaciente);
  const {openModalCadastro} = useContext(ModalCadastroContext);


  function voltar(){
    closeModalCadastroPaciente();
    openModalCadastro();
  }



  return(
    <Overlay>
      <ContainerModal>
        <p>CADASTRO DE NOVO PACIENTE</p>

        <Context>

          <ContainerModalFoto>
            <div className='perfil'>
              <Icon name='perfilAgendamento' size={120}/>
              <button><Icon name='foto' size={12}/> Tirar foto</button>
            </div>

            <div>
              <div className="name">
                <text>Nome completo</text>
                <input type="text" />
              </div>

              <div className="context">

                <div className='data'>
                  <text >Data de nascimento</text>
                  <input type="text" onBlur={handleDataChange} />
                </div>

                <div className="cpf">
                  <text>CPF</text>
                  <input type="text" />
                </div>

              </div>

              <div className="email">
                <text>E-mail</text>
                <input type="text" />
              </div>
            </div>

          </ContainerModalFoto>

          <Telephone>
            <div className="celular">
              <text>Celular</text>
              <input type="text" />
            </div>

            <div className="celular">
              <text>Telefone</text>
              <input type="text" />
            </div>
          </Telephone>

          <Rg>
            <div className="rg">
              <text>RG</text>
              <input type="text" />
            </div>

            <div className="orgao">
              <text>Orgão Emissor</text>
              <input type="text" />
            </div>

            <div className="mae">
              <text>Nome da mãe</text>
              <input type="text" value={nomeMae} onChange={handleChange} />
            </div>
          </Rg>

          <Cep>
            <div className="cep">
              <text>CEP</text>
              <input type="text" />
            </div>

            <div className="cep">
              <text>Endereço</text>
              <input type="text" />
            </div>
          </Cep>

          <DadosEndereco>
            <div className="numero">
              <text>Número</text>
              <input type="text" />
            </div>

            <div className="complemento">
              <text>Complemento</text>
              <input type="text" />
            </div>

            <div className="bairro">
              <text>Bairro</text>
              <input type="text" />
            </div>

            <div className="zona">
              <text>Zona</text>
              <select></select>
            </div>
          </DadosEndereco>

          <DadosCity>
            <div className="cidade">
              <text>Cidade</text>
              <input type="text" />
            </div>

            <div className="estado">
              <text>Estado</text>
              <input type="text" />
            </div>

            <div className="pais">
              <text>País</text>
              <input type="text" />
            </div>
          </DadosCity>

          <ModalObs>
            <text>Observação</text>
            <input type="text" />

            <div className='check'>
              <div>
                <input type="checkbox" />
                <label htmlFor="">Este paciente aceita receber SMS?</label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="">Este paciente aceita receber WhatsApp?</label>
              </div>
            </div>
          </ModalObs>

          <ContainerBtn>
            <button onClick={voltar} className='voltar'>Voltar</button>
            <button className='salva'>Salvar e continuar agendamento</button>
          </ContainerBtn>


        </Context>
      </ContainerModal>


      {menor ?

        <ContainerModal2>
          <p>CADASTRO DOS RESPONSAVEIS</p>
          <DadosMae>
            <div className="nomemae">
              <text>Nome da mãe</text>
              <input type="text" value={nomeMae} onChange={handleChange} />
            </div>

            <div className="cpfmae">
              <text>CPF</text>
              <input type="text" />
            </div>

          </DadosMae>

          <DadosMaeCell>
            <div className="telefonemae">
              <text>Telefone</text>
              <input type="text" />
            </div>

            <div className="nascimentoemae">
              <text>Data de nascimento</text>
              <input type="text" />
            </div>

          </DadosMaeCell>

          <DadosPai>
            <div className="nomepai">
              <text>Nome do pai</text>
              <input type="text" />
            </div>

            <div className="cpfpai">
              <text>CPF</text>
              <input type="text" />
            </div>
          </DadosPai>

          <DadosMaeCell>
            <div className="telefonemae">
              <text>Telefone</text>
              <input type="text" />
            </div>

            <div className="nascimentoemae">
              <text>Data de nascimento</text>
              <input type="text" />
            </div>

          </DadosMaeCell>

          <ContainerBtn>
            <button onClick={voltar} className='voltar'>Voltar</button>
            <button className='salva'>Salvar e continuar agendamento</button>
          </ContainerBtn>

        </ContainerModal2>
        :
        ''
      }



    </Overlay>
  );
}
