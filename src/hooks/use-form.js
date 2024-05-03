import { useState } from "react";

const useForm = (regEx) => {
  const isRequired = Boolean(regEx);
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let isValid = true;
  if (regEx) {
    isValid = regEx.test(enteredValue);
  }

  const isInvalidUI = !isValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    isRequired,
    enteredValue,
    isValid,
    isInvalidUI,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useForm;
