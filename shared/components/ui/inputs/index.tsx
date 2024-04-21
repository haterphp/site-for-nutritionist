"use client";

import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import mergeRefs from "merge-refs";

import { makeClassname } from "../common/functions";

import { IInputProps } from "./interfaces";

import "./index.css";

const InputRenderFunction = (
  props: IInputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
  const {
    id,
    label,
    feedback,
    className,
    placeholder,
    isError = false,
    isHideFeeback = false,
    ...rest
  } = props;

  const [isFocus, setIsFocus] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const innerRef = useRef<HTMLInputElement>(null);

  const innerId = useMemo(
    () => id ?? `input-element#${Math.random().toString()}`,
    [id]
  );

  const handleOnFocus = useCallback((): void => {
    if (innerRef.current !== null && !isFocus) innerRef.current.focus();
  }, [isFocus]);

  const handlers = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setIsDirty(e.currentTarget.value !== "");
      rest.onChange?.(e);
    },
    onFocus: (e: FocusEvent) => {
      setIsFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: (e: FocusEvent) => {
      setIsFocus(false);
      rest.onBlur?.(e);
    },
  };

  return (
    <div
      className={makeClassname(
        "input",
        isError && "input--error",
        isFocus && "input--focus",
        className
      )}
    >
      <div className="input-container" onClick={handleOnFocus}>
        <label
          className={makeClassname(
            "input-label",
            isDirty && "input-label--focus"
          )}
        >
          {label}
        </label>

        <input
          {...handlers}
          {...rest}
          ref={mergeRefs(ref, innerRef)}
          id={innerId}
          className={"input-element"}
          placeholder={isFocus ? placeholder : undefined}
        />
      </div>

      {isHideFeeback === false && (
        <span className="input-feedback">{feedback}</span>
      )}
    </div>
  );
};

const Input = forwardRef(InputRenderFunction);

export { Input };
