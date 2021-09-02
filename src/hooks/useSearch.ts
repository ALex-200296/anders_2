import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { filmActionError } from "../store/film/action";
import { fetchOperationFilms } from "../store/film/operations";
import useInput from "./useInput";
import { IValidations } from "./useValidation";

const useSearch = (initialValue: any, validations: IValidations) => {
  const [search, setSearch] = useState<string>("");
  const input = useInput(initialValue, validations);
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (search) {
      clearTimeout(ref.current!);
      dispatch(fetchOperationFilms(search, history));
      input.setValue("");
      input.setDirty(false);
      ref.current = setTimeout(() => {
        dispatch(filmActionError(""));
      }, 3000);
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
