import { FC } from 'react';
import { SelectContent, SelectRoot, SelectTrigger } from './components';
import { ISelectProps } from './select.d';

export const Select: FC<ISelectProps> = (props) => {
  return (
    <SelectRoot {...props}>
      <SelectTrigger />
      <SelectContent />
    </SelectRoot>
  );
};
