import { DadosInfo, ModalObs } from './styled';

export function Filiacao(){
  return(
    <>
      <DadosInfo>
        <div className='dadosmae'>

          <div className="nome">
            <text>Nome da mãe</text>
            <input type="text" />
          </div>

          <div className="cpf">
            <text>CPF</text>
            <input type="text" />
          </div>


          <div className="telefonemae">
            <text>Telefone</text>
            <input type="text" />
          </div>


          <div className="nascimentomae">
            <text>Data de nascimento</text>
            <input type="text" />
          </div>



          <div className="profissaomae">
            <text>Profissão</text>
            <input type="text" />
          </div>

        </div>

        <div className='dadosmae'>

          <div className="nome">
            <text>Nome do pai</text>
            <input type="text" />
          </div>

          <div className="cpf">
            <text>CPF</text>
            <input type="text" />
          </div>


          <div className="telefonemae">
            <text>Telefone</text>
            <input type="text" />
          </div>


          <div className="nascimentomae">
            <text>Data de nascimento</text>
            <input type="text" />
          </div>



          <div className="profissaomae">
            <text>Profissão</text>
            <input type="text" />
          </div>

        </div>


        <ModalObs>
          <text>Observação</text>
          <input type="text" />


        </ModalObs>





      </DadosInfo>
    </>
  );

}
