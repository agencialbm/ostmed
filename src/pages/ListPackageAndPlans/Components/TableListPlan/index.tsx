import { ColumnsTable } from '@/@types/components';
import { ChairPlanTable } from '@/@types/DTO';
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
  data: ChairPlanTable[]
}

export function TableListPlan({ columns, data }: TableProps) {
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
              <Td>{row.numerodeaulas}</Td>
              <Td>{row.tipodeplano}</Td>
              <Td>{row.valortotal}</Td>
              <Td>{row.valormensal}</Td>
              <Td>{row.valorporaula}</Td>
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
