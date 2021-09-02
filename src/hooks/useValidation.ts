import { useEffect, useState } from "react";

export interface IValidations {
  minLength?: number;
  isEmpty?: boolean;
}

const useValidation = (value: any, validations: IValidations) => {
  const [isEmpty, setEmpty] = useState<boolean>(true);
  const [minLengthError, setMinLengthError] = useState<boolean>(false);

  useEffect(() => {
    for (const validation in validations) {
      if (validation) {
        switch (validation) {
          case "minLength":
            const minNumber: number = validations[validation]!;
            value.length < minNumber
              ? setMinLengthError(true)
              : setMinLengthError(false);
            break;
          case "isEmpty":
            value ? setEmpty(false) : setEmpty(true);
            break;
        }
      }
    }
  }, [value]);

  return {
    isEmpty,
    minLengthError,
  };
};

export default useValidation;
