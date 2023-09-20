import { ColumnsTable } from '@/@types/components';
import { ChairReturnListTable } from '@/@types/DTO';
import { Icon } from '@/components/Icon';
import { EditeTableModalContext } from '@/contexts/modalEditeTable';
import { useContext } from 'react';
import {
  Image,
  TdFirstColumn,
  TableComponent,
  TBody,
  Td,
  THead,
  Container,
  Input,
  ContainerImage
} from './styles';

interface TableProps {
  columns: ColumnsTable[]
  data: ChairReturnListTable[]
}

export function Table({ columns, data }: TableProps) {
  const { EditeTableopenModal } = useContext(EditeTableModalContext);

  return (
    <Container>
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
                <ContainerImage>
                  <Image src={row.photoURL} alt="Foto do usuário" />
                  {row.id}
                </ContainerImage>
              </Td>
              {/* <Td>{row.paciente}</Td> */}
              <Td>{row.queixasintoma}</Td>
              <Td>{row.especialidade}</Td>
              <Td>{row.email}</Td>
              <Td>{row.telefone}</Td>
              <Td>{row.status}</Td>
              <Td>{row.proximocontato}</Td>
              <Td>{row.datadaprospeccao}</Td>
              <Td>{row.datadaabordagem}</Td>
              <Td>{row.dataapresentacao}</Td>
              <Td>{row.dataFollowup}</Td>
              <Td>{row.datanegociacao}</Td>
              <Td>{row.datafechamento}</Td>
              <Td>{row.dataposvendas}</Td>
              <Td>
                {row.comentarios}
                <Input />
              </Td>
              <td
                align="right"
                style={{
                  borderBottom: '1px solid #e2e8f0',
                  background: 'white'
                }}
              >
                {/* <EyeContainer>
                  <button onClick={EditeTableopenModal}>
                    <Icon name="editeTable" size={16} />
                  </button>
                  <button>
                    <Icon name="deleteTable" size={16} />
                  </button>
                </EyeContainer> */}
              </td>
            </tr>
          ))}
        </TBody>
      </TableComponent>
    </Container>
  );
}
