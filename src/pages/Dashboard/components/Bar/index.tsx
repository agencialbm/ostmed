import { BarContainer } from './styled';


interface BarProps {
  value: number;
  label?: string;
}

export function Bar ({ value, label = '' }: BarProps ) {
  const barWidth = `${value}%`;

  return (
    <BarContainer style={{ width: barWidth }}>
      {label}
    </BarContainer>
  );
}
