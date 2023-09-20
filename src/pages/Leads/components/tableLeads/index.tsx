import { ColumnsTable } from '@/@types/components';
import { ChairLeads } from '@/@types/DTO';
import { Icon } from '@/components/Icon';
import { EditeTableModalContext } from '@/contexts/modalEditeTable';
import { useContext } from 'react';
import {
  EyeContainer,
  Image,
  TdFirstColumn,
  TableComponent,
  TBody,
  Td,
  THead
} from './styles';

interface TableProps {
  columns: ColumnsTable[]
  data: ChairLeads[]
}

export function TableLeads({ columns, data }: TableProps) {
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
              <Td>
                <TdFirstColumn>{row.ordem}</TdFirstColumn>
              </Td>
              <Td className="hmm">
                <Image src={row.photoURL} alt="Foto do usuário" />
                {row.id}
              </Td>
              <Td>{row.queixasintoma}</Td>
              <Td>{row.especialidade}</Td>
              <Td>{row.email}</Td>
              <Td>{row.telefone}</Td>
              <Td>{row.indicacao}</Td>
              <Td>{row.atendente}</Td>
              <Td>{row.retornodocontato}</Td>
              <td
                align="right"
                style={{
                  borderBottom: '1px solid #e2e8f0',
                  background: 'white'
                }}
              >
                <EyeContainer>
                  <button>
                    <Icon name="visuTable" size={16} />
                  </button>
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