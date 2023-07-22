import { useState } from "react";
import { OnChangeEvent } from "../types/input";

type ValidateFunction = (value: string) => boolean;

const useInput = (
  defaultValue: string,
  ...validateFunctions: Array<ValidateFunction>
) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue);

  const isInputValid = validateFunctions.every((func) => func(inputValue));

  const onChangeHandler = (event: OnChangeEvent): void => {
    setInputValue(event.target.value);
  };

  return { inputValue, isInputValid, onChangeHandler };
};

export default useInput;
