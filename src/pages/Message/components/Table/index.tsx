import { ColumnsTable } from '@/@types/components';
import { ChairMessageTable } from '@/@types/DTO';
import { Icon } from '@/components/Icon';
import { EditeTableModalContext } from '@/contexts/modalEditeTable';
import { useContext } from 'react';
import { EyeContainer, Image, TableComponent, TBody, Td, THead } from './styles';
import ButtonAddMessage from '../ButtonAddMessage';

interface TableProps {
  columns: ColumnsTable[]
  data: ChairMessageTable[]
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
              {/* <Td><TdFirstColumn>{row.ordem}</TdFirstColumn></Td> */}
              <Td className="hmm">
                <Image src={row.photoURL} alt="Foto do usuário" />
                {row.id}
              </Td>
              <Td>{row.datahorario}</Td>
              <Td>{row.visualizacao}</Td>
              <Td style={{ color: 'red' }}>{row.status}</Td>

              <td
                align="right"
                style={{
                  borderBottom: '1px solid #e2e8f0',
                  background: 'white'
                }}
              >
                <EyeContainer>
                  <ButtonAddMessage />
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
