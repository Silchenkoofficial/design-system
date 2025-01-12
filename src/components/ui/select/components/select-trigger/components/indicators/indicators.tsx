import { FC, MouseEvent } from 'react';
import { Wrapper } from './indicators.styled';
import { useSelectContext } from '../../../select-root/select-root';

export const Indicators: FC = () => {
  const { isOpen, setIsOpen, onChange, value, loading } = useSelectContext();

  const handleRemoveAll = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onChange([]);
  };

  const handleToggleDropdown = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      {loading ? (
        <div>Loading...</div>
      ) : value.length ? (
        <div onClick={handleRemoveAll}>X</div>
      ) : (
        <div
          onClick={handleToggleDropdown}
          style={{
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
          }}
        >
          ▼
        </div>
      )}
    </Wrapper>
  );
};
