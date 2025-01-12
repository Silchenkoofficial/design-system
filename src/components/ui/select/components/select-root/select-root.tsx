import {
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ISelectContext, ISelectProps } from '../../select.d';
import { Wrapper } from './select-root.styled';

const SelectContext = createContext<ISelectContext | undefined>(undefined);

export const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('useSelectContext must be used within SelectRoot');
  }

  return context;
};

export const SelectRoot: FC<ISelectProps> = (props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

  return (
    <SelectContext.Provider
      value={{
        ...props,
        isOpen,
        setIsOpen,
      }}
    >
      <Wrapper ref={rootRef}>{props.children}</Wrapper>
    </SelectContext.Provider>
  );
};
