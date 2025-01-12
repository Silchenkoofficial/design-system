import { FC } from 'react';
import { ISelectOption } from '../../../../select.d';
import { Wrapper } from './pill.styled';
import { useSelectContext } from '../../../select-root/select-root';

interface IProps {
  option: ISelectOption;
  multi?: boolean;
}

export const Pill: FC<IProps> = ({ option, multi = false }) => {
  const { value, onChange } = useSelectContext();

  const handleRemove = (option: ISelectOption) => {
    onChange(value.filter((el) => el.value !== option.value));
  };

  return (
    <Wrapper multi={multi}>
      <p className={multi ? 'caption-13' : 'body-14'}>{option.label}</p>
      {multi && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleRemove(option);
          }}
        >
          X
        </div>
      )}
    </Wrapper>
  );
};
