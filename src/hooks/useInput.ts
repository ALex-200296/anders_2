import { useState } from "react";
import useValidation, { IValidations } from "./useValidation";

const useInput = (initialValue: any, validations: IValidations) => {
  const [value, setValue] = useState<any>(initialValue);
  const [isDirty, setDirty] = useState<boolean>(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDirty(true);
  };

  return {
    value,
    setValue,
    onChange,
    onBlur,
    isDirty,
    setDirty,
    ...valid,
  };
};

export default useInput;
