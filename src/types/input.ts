export interface InputType {
  id: string;
  type: string;
  value: number;
  min?: string;
  step?: string;
}

export type OnChangeEvent = React.ChangeEvent<HTMLInputElement>;
