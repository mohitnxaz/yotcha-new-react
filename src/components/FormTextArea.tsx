import { Button } from "../components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface FormTextAreaProps {
  className?: string;
  placeholder?: string;
  title: string;
  rows?: number;
  value?: string;
  onChange?: any;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  placeholder,
  title,
  className = "",
  rows,
  value,
  onChange
}) => {
  const combinedClassName = `custom-input border-[rgba(0,0,0,0.10)] rounded-[4px] bg-transparent px-[16px] py-[12px] ${className} text-[14px] font-[400] leading-[18px] tracking-[0.5px]`;
  return (
    <div className="md:w-[80%]">
      <p className="text-[#2A3C51] leading-[16px] text-[14px] font-[400] pb-[8px]">
        {title}
      </p>
      <Textarea
        className={combinedClassName}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormTextArea;
