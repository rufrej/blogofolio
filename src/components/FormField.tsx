import React, { forwardRef } from "react";
import { IFormFieldProps, FormFieldElement } from "../types/types";

export const FormField = forwardRef<FormFieldElement, IFormFieldProps>(
  (props, ref) => {
    function renderLabel() {
      if (!props.label) return null;
      return (
        <label htmlFor={props.name} className="form-label">
          {props.label}
        </label>
      );
    }

    function renderFormField() {
      return (
        <input
          className="form__input"
          type={props.type}
          value={props.value}
          ref={ref as React.ForwardedRef<HTMLInputElement>}
          onChange={props.onChange}
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          list={props.list}
        />
      );
    }

    return (
      <>
        {renderLabel()}
        {renderFormField()}
      </>
    );
  }
);
