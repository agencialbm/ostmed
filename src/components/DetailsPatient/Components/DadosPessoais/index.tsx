// import { useState } from 'react';
import { DadosInfo, ModalObs } from './styled';
import { Icon } from '@/components/Icon';

export function DadosPessoais(){
  // const [selectedValue, setSelectedValue] = useState('');

  // const indicacao = [
  //   { value: 'option1', label: 'indicacao' },
  //   { value: 'option2', label: 'indicacao 2' },
  //   { value: 'option3', label: 'indicacao 3' }
  // ]

  // const handleSelectChange = (value: string) => {
  //   setSelectedValue(value)
  // }

  return(
    <>
      <DadosInfo>
        <div className='nomecpf'>

          <div className="nome">
            <text>Nome completo</text>
            <input type="text" />
          </div>

          <div className="cpf">
            <text>CPF</text>
            <input type="text" />
          </div>
        </div>


        <div className="nascimentoRg">

          <div className="nacimento">
            <text>Data de nascimento</text>
            <input type="text" />
          </div>

          <div className="email">
            <text>E-mail</text>
            <input type="text" />
          </div>

          <div className="rg">
            <text>RG</text>
            <input type="text" />
          </div>

          <div className="orgao">
            <text>Orgão Emissor</text>
            <input type="text" />
          </div>

        </div>


        <div className='wppcell'>

          <div className="cellWpp">
            <text>Celular/WhatsApp</text>
            <input type="text" />
          </div>

          <div className="tellephone">
            <text>Telefone</text>
            <input type="text" />
          </div>

          <div className="comercial">
            <text>Comercial</text>
            <input type="text" />
          </div>

        </div>

        <div className="profIndicacao">

          <div className="prof">
            <text>Profissão</text>
            <input type="text" />
          </div>

          <div className="ind">
            <text>Indicação</text>
            <select /* options={indicacao} onChange={handleSelectChange} *//>
          </div>


          <div className="pes">
            <text>sd</text>
            <input placeholder='Oswaldo de Oliveira' type="text" />
            <Icon
              name="pequisar"
              size={20}
              style={{ position: 'relative', left: '175px', top: '-26px' }}
            />
          </div>

        </div>

        <ModalObs>
          <text>Observação</text>
          <input type="text" />

          <div className='check'>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Este paciente aceita receber sms?</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Este paciente aceita receber  WhatsApp?</label>
            </div>

            <div>
              <input type="checkbox" />
              <label htmlFor="">Este paciente aceita receber E-mail?</label>
            </div>
          </div>
        </ModalObs>

      </DadosInfo>
    </>
  );

}
