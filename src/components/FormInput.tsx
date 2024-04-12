import { Button } from "../components/ui/button";
import { Input } from "./ui/input";

interface FormInputProps {
  className?: string;
  placeholder?: string;
  title?: string;
  value?: string;
  onChange?: any;
  type?: string;
  name?: string;
  disabled?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  value,
  title,
  type,
  name,
  onChange,
  className = "",
  disabled,
}) => {
  const combinedClassName = `custom-input border-[rgba(4,77,88,0.2)] rounded-[4px] bg-transparent px-[16px] py-[12px] ${className} text-[14px] font-[400] leading-[18px] tracking-[0.5px]`;
  return (
    <div>
      <p className="text-[#2A3C51] leading-[16px] text-[14px] font-[400] pb-[8px]">
        {title}
      </p>
      <Input
        className={combinedClassName}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        name={name}
        disabled={disabled}
      />
    </div>
  );
};

export default FormInput;
