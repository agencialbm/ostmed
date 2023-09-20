import { ColumnsTable } from '@/@types/components';
import { ChairPackageTable } from '@/@types/DTO';
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
  data: ChairPackageTable[]
}

export function TableListPackage({ columns, data }: TableProps) {
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
              <Td>{row.titulo}</Td>
              <Td>{row.duracao}</Td>
              <Td>{row.numerodesessoes}</Td>
              <Td>{row.validadedocontrato}</Td>
              <Td>{row.valortotal}</Td>
              <Td>{row.valorunitario}</Td>
              <td
                align="right"
                style={{
                  borderBottom: '1px solid #969696',
                  background: 'transparent'
                }}
              >
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
