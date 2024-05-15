import clsx from "clsx";
import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export default function InputForm<TFormValue extends FieldValues>({
  name,
  type,
  rule,
  error,
  register,
  placeholder,
}: InputFormProps<TFormValue>) {
  return (
    <div className="mb-4 w-full">
      <div className="flex items-center gap-2">
        <label htmlFor={name} className="primary text-sm md:text-base">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>

        {error[name]?.type === "required" && (
          <p role="alert" className="text-xs text-red-500">
            *{name} is required
          </p>
        )}
      </div>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, rule)}
        className={clsx(
          "border__color",
          "secondary text-sm",
          "mt-2 w-full px-2 py-3",
          "rounded-md bg-transparent",
          "placeholder:text-sm placeholder:text-neutral-500",
          "focus:outline-double focus:outline-neutral-500",
          "md:text-base md:placeholder:text-base",
        )}
        autoComplete={name}
      />
    </div>
  );
}

type InputFormProps<TFormValue extends FieldValues> = {
  name: Path<TFormValue>;
  type: string;
  rule?: RegisterOptions;
  error: FieldErrors;
  register: UseFormRegister<TFormValue>;
  placeholder: string;
};
