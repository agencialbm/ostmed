import { DadosInfo } from './styled';

export function Endereco(){
  return(
    <>
      <DadosInfo>
        <div className='endereco'>

          <div className="cep">
            <text>CEP</text>
            <input type="text" />
          </div>

          <div className="end">
            <text>Endereço</text>
            <input type="text" />
          </div>


          <div className="nume">
            <text>Número</text>
            <input type="text" />
          </div>


          <div className="comp">
            <text>Complemento</text>
            <input type="text" />
          </div>



          <div className="bairro">
            <text>Bairro</text>
            <input type="text" />
          </div>

        </div>


        <div className='endereco'>

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


          <div className="zona">
            <text>Zona</text>
            <input type="text" />
          </div>

        </div>




      </DadosInfo>
    </>
  );

}
