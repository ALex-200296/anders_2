import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchOperationFilms } from "../store/film/operations";
import useInput from "./useInput";
import { IValidations } from "./useValidation";

const useSearch = (initialValue: any, validations: IValidations) => {
  const [search, setSearch] = useState<string>("");
  const input = useInput(initialValue, validations);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (search) {
      dispatch(fetchOperationFilms(search, history));
      input.setValue("");
      input.setDirty(false);
    }
  }, [search]);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      (input.isDirty && input.isEmpty) ||
      (input.isDirty && input.minLengthError)
    ) {
      return;
    }
    setSearch(input.value);
  };
  return {
    ...input,
    handlerSubmit,
  };
};

export default useSearch;
