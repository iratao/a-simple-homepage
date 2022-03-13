export interface Props {
  children: React.ReactNode
}

export interface Rule {
  required?: boolean;
  pattern?: string | RegExp;
  validator?: (value: any, form: FormInstance) => boolean;
  min?: number;
  message?: string;
}

export type Rules = Rule[]

export interface Field {
  value: string | undefined;
  error: string | undefined;
  rules: Rules | undefined;
}

export interface Fields {
  [name: string]: Field
}

export interface FormValues {
  [name: string]: string | undefined;
}

export interface FormError {
  errors: string[];
  name: string;
}

export type FormErrors = FormError[]

export type OnChangeEvent = React.ChangeEvent<HTMLInputElement>

export interface FieldOpertions {
  value?: string;
  onChange?: (event: OnChangeEvent) => void;
  onClick?: () => any;
}

export type FormItemType = undefined | 'submit'
export type RegisterFieldConfig = {
  name: string; 
  rules?: Rules;
  type?: FormItemType;
}

export interface ValidateResult {
  values: FormValues,
  errors?: FormErrors,
}

export interface FormInstance {
  registerField: (config: RegisterFieldConfig) => FieldOpertions;
  validate: () => ValidateResult;
  getFieldValue: (name: string) => any;
}