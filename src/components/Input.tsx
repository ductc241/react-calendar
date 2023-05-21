import React, { ComponentPropsWithoutRef, Ref, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  name: string;
  error?: FieldError;
}

const Input = forwardRef((props: IInputProps, ref: Ref<HTMLInputElement>) => (
  <div className="input">
    <div className="input-container">
      {props.label && (
        <div className="input-label">
          <label htmlFor={props.name}>{props.label}</label>
        </div>
      )}
      <div className="input-tag">
        <input type="text" ref={ref} id={props.name} {...props} />
      </div>
      {props.error && <span className="input-error">{props.error.message}</span>}
    </div>
  </div>
));

export default Input;
