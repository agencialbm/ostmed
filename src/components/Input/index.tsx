import { Icon } from '../Icon';
import { InputContainer } from './styled';

interface InputProps  {
  value: string
  placeholder: string
  onChange: (value: string) => void
  onClick?: () => void
}

export function Input({ onChange, value, placeholder, onClick }: InputProps) {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <InputContainer>


      <section>
        <button onClick={onClick}>
          <Icon name="pequisar" size={20} />
        </button>
      </section>

      <input
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={handleInputChange}
      />

    </InputContainer>
  );
}
