import React, { useState } from 'react';
import { MdCheck } from 'react-icons/md';

interface DayOfWeek {
  label: string;
  value: string;
}

interface RadioProps {
  days: DayOfWeek[];
}

export const DayOfWeekRadio: React.FC<RadioProps> = ({ days }) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([days[0].value]);

  const handleRadioChange = (value: string) => {
    const isSelected = selectedDays.includes(value);
    if (isSelected) {
      setSelectedDays(selectedDays.filter((selectedValue) => selectedValue !== value));
    } else {
      setSelectedDays([...selectedDays, value]);
    }
  };

  return (
    <div>
      {days.map((day) => (
        <label key={day.value} style={{ color: '#456573', fontSize: 12, marginRight: '11px', display: 'flex', alignItems: 'center' }}>
          <input
            type="radio"
            value={day.value}
            checked={selectedDays.includes(day.value)}
            onChange={() => handleRadioChange(day.value)}
            style={{ display: 'none' }}
          />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: '50%', marginRight: '6px', backgroundColor: selectedDays.includes(day.value) ? '#44C0C2' : '#fff', border: selectedDays.includes(day.value) ? '2px solid #44C0C2' : '2px solid #C4C4C4' }}>
            {selectedDays.includes(day.value) && <MdCheck size={14} color="#fff" />}
          </div>
          <text style={{ color: '#456573', position: 'relative', top: '2px' }}>{day.label}</text>
        </label>
      ))}
    </div>
  );
};
