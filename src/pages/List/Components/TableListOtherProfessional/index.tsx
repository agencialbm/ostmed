import { ColumnsTable } from '@/@types/components';
import { ChairListOther } from '@/@types/DTO';
import { Icon } from '@/components/Icon';
import { EditeTableModalContext } from '@/contexts/modalEditeTable';
import { useContext } from 'react';
import {
  EyeContainer,
  Image,
  // TdFirstColumn,
  TableComponent,
  TBody,
  Td,
  THead
} from './styles';

interface TableProps {
  columns: ColumnsTable[]
  data: ChairListOther[]
}

export function TableListOtherProfessional({ columns, data }: TableProps) {
  const { EditeTableopenModal } = useContext(EditeTableModalContext);

  return (
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
              {/*               <Td >
                <TdFirstColumn >{row.ordem}</TdFirstColumn>
              </Td> */}
              <Td className="hmm" >
                <Image src={row.photoURL} alt="Foto do usuário" />
                {row.id}
              </Td>
              <Td>{row.cargo}</Td>
              <Td>{row.telefone}</Td>
              <Td>{row.unidadedeatendimento}</Td>
              <Td>{row.niveldeacessos}</Td>
              <td align="right" style={{ borderBottom: '1px solid #969696', background: 'transparent'  }}>
                <EyeContainer>
                  {/* <button>
                    <Icon name="visuTable" size={16} />
                  </button> */}
                  <button onClick={EditeTableopenModal}>
                    <Icon name="editeTable" size={16} />
                  </button>
                  <button>
                    <Icon name="deleteTable" size={16} />
                  </button>
                </EyeContainer>
              </td>
            </tr>
          ))}
        </TBody>
      </TableComponent>
    </>
  );
}
