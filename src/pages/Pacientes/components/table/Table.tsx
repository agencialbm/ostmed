import { ColumnsTable } from '@/@types/components';
import { ChairDTO } from '@/@types/DTO';
import { Icon } from '@/components/Icon';
import { EditeTableModalContext } from '@/contexts/modalEditeTable';
import {  useContext } from 'react';
import { EyeContainer, Image, RowUser, TableComponent, TBody, Td, THead } from './styled';
import { ModalCadastroContextPaciente } from '@/contexts/modalCadastroPaciente';
import { ModalCadastroContext } from '@/contexts/modalCadastro';

interface TableProps {
  columns: ColumnsTable[]
  data: ChairDTO[]
}

export function Table({ columns, data} :TableProps){
  const { EditeTableopenModal} = useContext(EditeTableModalContext);
  const { openModalCadastroPaciente } = useContext(ModalCadastroContextPaciente);
  const { openModalCadastro } = useContext(ModalCadastroContext);

  return(
    <>
      <TableComponent cellSpacing="0">
        <THead>
          <tr>
            {columns.map((column, i) => (
              <th
                align={column.title === 'Visualizar' ? 'right' : 'left'}
                key={String(i)}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </THead>
        <TBody>
          {data.map((row, i) => (
            <tr key={String(i)}>

              <Td className='hmm'>
                <Image
                  src={row.photoURL}
                  alt="Foto do usuário"
                />{row.id}
              </Td>

              <Td >
                <RowUser >
                  <span className='name'>{row.nome}</span>
                </RowUser>
              </Td>
              <Td>{row.cpf}</Td>
              <Td>{row.email}</Td>
              <Td>{row.telefone}</Td>
              <Td>{row.datanascimento}</Td>
              <Td>{row.ultimavisita}</Td>
              <td align="right" style={{ borderBottom: '1px solid #e2e8f0', background: 'white'  }} >
                <EyeContainer>
                  <button onClick={openModalCadastroPaciente}> <Icon name="addTable" size={16}/></button>
                  <button onClick={ openModalCadastro}> <Icon name="visuTable"  size={16}/></button>
                  <button onClick={EditeTableopenModal}>  <Icon name="editeTable"  size={16}/></button>
                  <button>  <Icon name="deleteTable"  size={16}/></button>
                </EyeContainer>
              </td>
            </tr>
          ))}
        </TBody>
      </TableComponent>
    </>
  );
}
