import { FC } from 'react';
import { useSelectContext } from '../select-root/select-root';

export const SelectContent: FC = () => {
  const { options } = useSelectContext();

  return (
    <div>
      {options.map((el) => (
        <div>{el.label}</div>
      ))}
    </div>
  );
};
