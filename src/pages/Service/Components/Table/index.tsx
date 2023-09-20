import { ColumnsTable } from '@/@types/components';
import { ChairServiceTable } from '@/@types/DTO';
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
  data: ChairServiceTable[]
}

export function Table({ columns, data }: TableProps) {
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
              <Td>{row.codigo}</Td>
              <Td>{row.procedimento}</Td>
              <Td>{row.preco}</Td>
              <Td>{row.unidade}</Td>
              <Td>{row.precototal}</Td>
              <td
                align="right"
                style={{
                  borderBottom: '1px solid #969696',
                  background: 'transparent'
                }}
              ></td>
            </tr>
          ))}
        </TBody>
      </TableComponent>
    </>
  );
}
