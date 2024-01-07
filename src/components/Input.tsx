import { forwardRef, ComponentPropsWithoutRef, ForwardedRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef(
  (
    { label, id, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type="text" ref={ref} {...props} />
      </p>
    );
  }
);

export default Input;
