import { Dispatch, SetStateAction } from 'react';

export type ISelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
  additionalText?: string;
};

export interface ISelectContext extends ISelectProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ISelectProps {
  multi?: boolean;
  options: ISelectOption[];
  value: ISelectOption[];
  onChange: (values: ISelectOption[]) => void;
  loading?: boolean;
}
