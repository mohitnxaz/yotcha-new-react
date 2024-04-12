import { Checkbox } from "./ui/checkbox";

interface FormCheckBoxProps {
  className?: string;
  id: string;
  label: string;
}

const FormCheckBox: React.FC<FormCheckBoxProps> = ({
  id,
  label,
  className = "",
}) => {
  const combinedClassName = `text-[#666666] font-[400] leading-[24px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className} `;
  return (
    <div className="flex items-center space-x-[10px]">
      <Checkbox
        id={id}
        className="h-[19px] w-[19px] border-[#d0d0d0] border-[2px]"
      />
      <label className={combinedClassName}>{label}</label>
    </div>
  );
};

export default FormCheckBox;
