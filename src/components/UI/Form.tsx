import {
  forwardRef,
  FormEvent,
  ComponentPropsWithoutRef,
  useImperativeHandle,
  useRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};
type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("clearing");
          form.current?.reset();
        },
      };
    });
    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
    };

    return (
      <form ref={form} onSubmit={handleSubmitForm} {...otherProps}>
        {children}
      </form>
    );
  }
);

export default Form;
