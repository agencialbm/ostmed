import { ColumnsTable } from '@/@types/components';
import { ChairTurn } from '@/@types/DTO';
import { Icon } from '@/components/Icon';
import { EditeTableModalContext } from '@/contexts/modalEditeTable';
import { useContext } from 'react';
import { EyeContainer, Image, TableComponent, TBody, Td, THead } from './styles';

interface TableProps {
  columns: ColumnsTable[]
  data: ChairTurn[]
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
              <Td className="hmm">
                <Image src={row.photoURL} alt="Foto do usuário" />
                {row.id}
              </Td>
              <Td>{row.especialidade}</Td>
              <Td className="date">
                {row.diasdeatendimento}
                <br />
                {row.diasdeatendimento}
                <br />
                {row.diasdeatendimento}
                <br />
                {row.diasdeatendimento}
              </Td>
              <Td>
                {row.unidadesDeAtendimento}
                <br />
                {row.unidadesDeAtendimento}
                <br />
                {row.unidadesDeAtendimento}
                <br />
                {row.unidadesDeAtendimento}
                <br />
              </Td>
              <td
                align="right"
                style={{
                  borderBottom: '1px solid #969696',
                  background: 'transparent'
                }}
              >
                <EyeContainer>
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
