import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";

interface FormSelectProps {
  className?: string;
  placeholder?: string;
  title: string;
  children: React.ReactNode;
}

const FormSelect: React.FC<FormSelectProps> = ({
  placeholder,
  title,
  className = "",
  children,
}) => {
  const combinedClassName = `custom-select border-[rgba(4,77,88,0.2)] rounded-[4px] bg-transparent px-[16px] py-[12px] ${className} text-[14px] font-[400] leading-[18px] tracking-[0.5px] `;
  return (
    <div>
      <p className="text-[#2A3C51] leading-[16px] text-[14px] font-[400]">
        {title}
      </p>
      <Select>
        <SelectTrigger className={combinedClassName}>
          <SelectValue className="custom-select" placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white px-[0px]">{children}</SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
