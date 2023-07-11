import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldError } from 'react-hook-form';

export type TFieldName =
  | 'name'
  | 'mobile'
  | 'postCode'
  | 'basicAddress'
  | 'detailAddress'
  | 'checked';

export type TValidate = (
  value: any,
) => boolean | string | Promise<boolean | string>;

export interface IInputFieldProps {
  label?: string;
  field: string;
  placeholder?: string;
  required?: boolean;
  inputProps?: UseFormRegisterReturn;
  //수정
  error?: any;
  // error?: string | null;
}

export interface ICheckBoxInputProps {
  label: string;
  smallBox?: boolean;
}

export interface IButtonProps {
  text: string;
  bgColor?: string;
  color?: string;
  onClick?: () => void;
}

export interface InputGroupProps {
  title: string;
  before?: string;
  children: React.ReactNode;
}

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface IOrderedProduct {
  id: string;
  title: string;
  count: number;
  price: number;
}

export interface PayMethod {
  id: string;
  title: string;
}

export interface DaumPostcodeData {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  zonecode: string;
}
