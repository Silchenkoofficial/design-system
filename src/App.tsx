import { ThemeProvider } from 'styled-components/macro';
import { THEME } from './theme';
import { Select } from './components';
import { useEffect, useState } from 'react';
import { ISelectOption } from './components/ui/select/select.d';

const data = [
  {
    label: 'First',
    value: '1',
  },
  {
    label: 'Second',
    value: '2',
  },
  {
    label: 'Third',
    value: '3',
  },
];

export const App = () => {
  const [isMulti, setIsMulti] = useState(false);
  const [options, setOptions] = useState<ISelectOption[]>(data);
  const [selectedValues, setSelectedValues] = useState<ISelectOption[]>([
    {
      label: 'Third',
      value: '3',
    },
  ]);

  const handleChange = (values: ISelectOption[]) => {
    setSelectedValues(values);
  };

  return (
    <ThemeProvider theme={THEME}>
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '700px',
          gap: 12,
        }}
      >
        <Select
          multi={isMulti}
          options={options}
          value={selectedValues}
          onChange={handleChange}
        />
        <button onClick={() => setIsMulti((prev) => !prev)}>
          Change multi
        </button>
      </div>
    </ThemeProvider>
  );
};
