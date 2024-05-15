import clsx from "clsx";
import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export default function Textarea<TFormValue extends FieldValues>({
  name,
  rule,
  error,
  register,
  placeholder,
}: TextAreaProps<TFormValue>) {
  return (
    <div className="mt-4">
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
      <textarea
        id={name}
        placeholder={placeholder}
        {...register(name, rule)}
        rows={4}
        cols={4}
        className={clsx(
          "border__color",
          "secondary text-sm",
          "mt-2 w-full px-2 py-3",
          "rounded-md bg-transparent",
          "placeholder:text-sm placeholder:text-neutral-500",
          "focus:outline-double focus:outline-neutral-500",
          "md:text-base md:placeholder:text-base",
        )}
      />
    </div>
  );
}

type TextAreaProps<TFormValue extends FieldValues> = {
  name: Path<TFormValue>;
  rule?: RegisterOptions;
  error: FieldErrors;
  register: UseFormRegister<TFormValue>;
  placeholder: string;
};
