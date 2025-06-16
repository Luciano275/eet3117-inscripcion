import { InputHTMLAttributes } from "react";

export const ContainerInput = (
  { children, className }: { children: React.ReactNode, className?: string; }
) => {
  return (
    <div className={`flex flex-col gap-2 ${className && className}`}>
      {children}
    </div>
  )
}

export const Label = (
  {label, name}
  : {
    label: string;
    name?: string;
  }
) => {
  return (
    <label htmlFor={name} className="text-neutral-600 whitespace-nowrap overflow-hidden text-ellipsis">{label}</label>
  )
}

export const Input = (
  props
  : {
    disabled?: false;
    type: InputHTMLAttributes<HTMLInputElement>['type']
    name: string
    label: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    children?: React.ReactNode;
    list?: string;
    value?: string;
  } | {
    disabled: true;
    value: string;
    label: string;
    className?: string;
    children?: React.ReactNode;
  }
) => {
  if (!props.disabled) {
    const { label, name, type, onChange, placeholder, className } = props;

    return (
      <ContainerInput className={className}>
        <Label label={label} name={name} />
        <input
          type={type}
          name={name}
          id={name}
          className={`w-full p-2 outline-none border border-neutral-300 rounded-md focus:border-blue-500 transition-colors ${className && className}`}
          placeholder={placeholder || ''}
          onChange={onChange}
          list={props.list}
          value={props.value}
        />

        {props.children}
      </ContainerInput>
    )
  }

  return (
    <ContainerInput className={props.className}>
      <Label label={props.label} />
      <input type="number" disabled value={props.value} className={`w-full p-2 outline-none border border-neutral-300 rounded-md bg-neutral-100`} />
      {props.children}
    </ContainerInput>
  )
}

export const Title = (
  {text, children}
  : {
    text: string;
    children?: React.ReactNode;
  }
) => {
  return (
    <h3 className="py-4 flex gap-4 items-center text-blue-900 font-semibold">
      {children}
      <span className="text-xl">
        {text}
      </span>
    </h3>
  )
}

export const Section = (
  {children}: {children: React.ReactNode;}
) => {
  return (
    <div className="flex flex-col gap-5">
      {children}
    </div>
  )
}

export const Select = (
  {children, name, label, className}
  : {
    children: React.ReactNode;
    name: string;
    label: string;
    className?: string;
  }
) => {
  return (
    <ContainerInput className={className}>
      <Label label={label} name={name} />
      <select
        name={name}
        id={name}
        className={`w-full p-2 outline-none border border-neutral-300 rounded-md focus:border-blue-500 transition-colors`}
      >
        {children}
      </select>
    </ContainerInput>
  )
}