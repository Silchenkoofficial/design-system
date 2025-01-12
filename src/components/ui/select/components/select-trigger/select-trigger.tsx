import { FC } from 'react';
import { PillsWrapper, Wrapper } from './select-trigger.styled';
import { useSelectContext } from '../select-root/select-root';
import { Indicators, Pill } from './components';

export const SelectTrigger: FC = () => {
  const { value, setIsOpen, multi } = useSelectContext();

  return (
    <Wrapper onClick={() => setIsOpen(true)}>
      <PillsWrapper>
        {value.map((item) => (
          <Pill multi={multi} option={item} />
        ))}
      </PillsWrapper>
      <Indicators />
    </Wrapper>
  );
};
