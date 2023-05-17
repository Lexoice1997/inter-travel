"use client";
import ReactSelect, { components, ControlProps, StylesConfig } from "react-select";

type Props = {
  options: any;
  height?: string;
  onChange?: any;
  placeHolder?: string;
  value?: any;
  defaultValues?: any;
  disabled?: boolean;
  className?: any;
};

export default function SelectField({
  className = "",
  options,
  height,
  defaultValues,
  disabled = false,
  placeHolder = "Select",
  value,
  onChange,
  ...props
}: Props) {
  const colorStyles: StylesConfig = {
    control: (styles: any) => ({
      ...styles,
      boxShadow: "#d1d5db",
      fontWeight: 500,
      "&:hover": {
        borderColor: "#3663FD",
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }: any) => {
      return {
        ...styles,
        width: "100%",
        padding: "16px 16px",
        backgroundColor: isSelected && "linear-gradient(to right, #396AFC, #2948FF)",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: "16px",
        color: "# ",
        "&:hover": {
          textDecoration: "underline",
        },
      };
    },
    input: (styles) => ({
      ...styles,
      height: height || "46px",
      cursor: "pointer",
      borderRadius: "8px",
      outline: "none",
      padding: "0px 8px",
    }),
    menuList: (styles) => ({
      ...styles,
      background: "linear-gradient(to right, #396AFC, #2948FF)",
      color: "white",
    }),
    placeholder: (styles) => ({
      ...styles,
      padding: "0px 8px",
      fontSize: "16px",
      color: "black",
      fontWeight: "400",
    }),
    singleValue: (styles, { data }) => ({
      ...styles,
      padding: "0px 8px",
      fontSize: "16px",
      fontWeight: "normal",
      color: "black",
    }),
  };

  return (
    <ReactSelect
      {...props}
      isDisabled={disabled}
      defaultValue={defaultValues}
      styles={colorStyles}
      options={options}
      placeholder={placeHolder}
      className="outline-none w-full"
      value={value}
      onChange={onChange}
      components={{
        Control: ({ children, ...rest }: ControlProps) => (
          <components.Control {...rest} className={`${className}`}>
            {children}
          </components.Control>
        ),
      }}
    />
  );
}
