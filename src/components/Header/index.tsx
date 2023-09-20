import { Icon } from '@/components/Icon';
import { HomeHeader, HomeInput } from './styles';
import { Input } from '../Input';
import { useState } from 'react';

export default function Header() {

  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <HomeHeader>
      <HomeInput>
        <Input
          placeholder="Pesquisar"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button>
          <Icon name="notification" />
        </button>
        <button>
          <Icon name="avatar" size={60} />
        </button>
      </HomeInput>
    </HomeHeader>
  );
}
