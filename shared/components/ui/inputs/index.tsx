"use client";

import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  Ref,
  useCallback,
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
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
): JSX.Element => {
  const {
    id,
    label,
    feedback,
    className,
    placeholder,
    value,
    type = 'text',
    isError = false,
    isHideFeeback = false,
    isDisabled = false,
    rows = 5,
    ...rest
  } = props;

  const [isFocus, setIsFocus] = useState(false);
  const [isDirty, setIsDirty] = useState(!!value);

  const innerRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const innerId = useMemo(
    () => id ?? `input-element#${Math.random().toString()}`,
    [id]
  );

  const handleOnFocus = useCallback((): void => {
    if (innerRef.current !== null && !isFocus) innerRef.current.focus();
  }, [isFocus]);

  const handlers = useMemo(() => ({
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
  }), [rest, setIsFocus, setIsDirty]);

  const InputComponent = useMemo(() => {
    if (type === 'textarea') return (
        <textarea
          {...rest}
          {...handlers}
          ref={mergeRefs(ref, innerRef) as Ref<HTMLTextAreaElement>}
          id={innerId}
          className={"input-element"}
          disabled={isDisabled}
          placeholder={isFocus ? placeholder : undefined}
          rows={rows}
        >
          {value}
        </textarea>
    )

    return (
      <input
        {...rest}
        {...handlers}
        type={type}
        ref={mergeRefs(ref, innerRef)  as Ref<HTMLInputElement>}
        id={innerId}
        value={value}
        className={"input-element"}
        disabled={isDisabled}
        placeholder={isFocus ? placeholder : undefined}
      />
    )
  }, [type, rest, handlers, value, isFocus, placeholder, innerId, ref, innerRef, isDisabled, rows])

  return (
    <div
      className={makeClassname(
        "input",
        isError && "input--error",
        isFocus && "input--focus",
        isDisabled && "input--disabled",
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

        {InputComponent}
      </div>

      {isHideFeeback === false && (
        <span className="input-feedback">{feedback}</span>
      )}
    </div>
  );
};

const Input = forwardRef(InputRenderFunction);

export { Input };
