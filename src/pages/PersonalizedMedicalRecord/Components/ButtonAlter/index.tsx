import { Icon } from '@/components/Icon';
import { ContainerIcon, ContainerType } from './styles';

type ButonAlterProps = {
  onClose: () => void;
}

export default function ButonAlter({ onClose }: ButonAlterProps) {
  return (
    <>
      <ContainerType>
        <ContainerIcon>
          <Icon
            name="groupSelect"
            size={13}
            style={{
              marginRight: '-80px',
              marginTop: '8px'
            }}
          />
          <button className="AlterType" onClick={onClose} >
            ALTERAR TIPO
          </button>
        </ContainerIcon>
      </ContainerType>
    </>
  );
}
