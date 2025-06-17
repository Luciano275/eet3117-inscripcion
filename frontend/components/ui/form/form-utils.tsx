import { InputHTMLAttributes } from "react";

export const ContainerInput = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className && className}`}>
      {children}
    </div>
  );
};

export const Label = ({
  label,
  name,
  type = "label",
  className,
}: {
  label: string;
  name?: string;
  type?: "label" | "legend";
  className?: string;
}) => {
  return type === "label" ? (
    <label
      htmlFor={name}
      className={`text-neutral-600 whitespace-nowrap overflow-hidden text-ellipsis ${
        className && className
      }`}
    >
      {label}
    </label>
  ) : (
    <legend
      className={`text-neutral-600 whitespace-nowrap overflow-hidden text-ellipsis ${
        className && className
      }`}
    >
      {label}
    </legend>
  );
};

export const Input = (
  props:
    | {
        disabled?: false;
        type: InputHTMLAttributes<HTMLInputElement>["type"];
        name: string;
        label: string;
        placeholder?: string;
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
        className?: string;
        children?: React.ReactNode;
        list?: string;
        value?: string;
        size?: "sm" | "md" | "lg";
      }
    | {
        disabled: true;
        value: string;
        label: string;
        className?: string;
        children?: React.ReactNode;
        size?: "sm" | "md" | "lg";
      }
) => {

  const { size = 'md' } = props;

  if (!props.disabled) {
    const { label, name, type, onChange, placeholder, className } = props;

    return (
      <ContainerInput className={className}>
        <Label label={label} name={name} />
        <input
          type={type}
          name={name}
          id={name}
          className={`w-full ${
            size === "sm" ? "p-1" : size === "md" ? "p-2" : "p-4"
          } outline-none border border-neutral-300 rounded-md focus:border-blue-500 transition-colors ${
            className && className
          }`}
          placeholder={placeholder || ""}
          onChange={onChange}
          list={props.list}
          value={props.value}
        />

        {props.children}
      </ContainerInput>
    );
  }

  return (
    <ContainerInput className={props.className}>
      <Label label={props.label} />
      <input
        type="number"
        disabled
        value={props.value}
        className={`w-full ${
          size === "sm" ? "p-1" : size === "md" ? "p-2" : "p-4"
        } outline-none border border-neutral-300 rounded-md bg-neutral-100`}
      />
      {props.children}
    </ContainerInput>
  );
};

export const Title = ({
  text,
  children,
}: {
  text: string;
  children?: React.ReactNode;
}) => {
  return (
    <h3 className="py-4 flex gap-4 justify-center sm:justify-start items-center text-blue-900 font-semibold">
      {children}
      <span className="text-xl">{text}</span>
    </h3>
  );
};

export const Section = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-5">{children}</div>;
};

export const Select = ({
  children,
  name,
  label,
  className,
}: {
  children: React.ReactNode;
  name: string;
  label: string;
  className?: string;
}) => {
  return (
    <ContainerInput className={className}>
      <Label label={label} name={name} />
      <select
        name={name}
        id={name}
        className={`w-full p-[10px] outline-none border border-neutral-300 rounded-md focus:border-blue-500 transition-colors`}
      >
        {children}
      </select>
    </ContainerInput>
  );
};

export const Radio = ({
  name,
  label,
  items,
}: {
  label: string;
  name: string;
  items: {
    label: string;
    onClick?: () => void;
    defaultChecked?: boolean;
  }[];
}) => {
  return (
    <ContainerInput>
      <fieldset>
        <Label label={label} type="legend" className="pb-2" />

        <div className="flex items-center gap-4">
          {items.map((item, ind) => (
            <label
              key={`${ind}:${item.label}`}
              htmlFor={name}
              className="flex items-center gap-2"
            >
              <input
                type="radio"
                name={name}
                className="radio"
                onClick={item.onClick}
                defaultChecked={item.defaultChecked}
              />{" "}
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>
    </ContainerInput>
  );
};
