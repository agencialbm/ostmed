import { ColumnsTable } from '@/@types/components';
import { ChairWaitingList } from '@/@types/DTO';
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
import ButtonSchedule from './../buttonSchedule/index';

interface TableProps {
  columns: ColumnsTable[]
  data: ChairWaitingList[]
}

export function TableWaitingList({ columns, data }: TableProps) {
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
              <Td><TdFirstColumn>{row.ordem}</TdFirstColumn></Td>
              <Td className="hmm">
                <Image src={row.photoURL} alt="Foto do usuário" />
                {row.id}
              </Td>
              <Td>{row.tipodeatendimento}</Td>
              <Td>{row.datahorariodepreferencia}</Td>
              <Td>{row.datadasolicitacao}</Td>
              <Td>{row.atendente}</Td>
              <td align="right" style={{ borderBottom: '1px solid #e2e8f0', background: 'white'  }}>
                <EyeContainer>
                  <ButtonSchedule />
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
