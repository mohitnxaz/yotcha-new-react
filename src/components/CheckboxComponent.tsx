import { Checkbox } from "./ui/checkbox";


interface CheckboxProps {
  title: string[];
}

const CheckboxComponent: React.FC<CheckboxProps> = ({ title }) => {
  const lengthofArray = title.length;
  return (
    <div>
      {title.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between border-b p-[4px] sm:pb-[17px] sm:mt-[25px] ${
            index === lengthofArray - 1 ? "border-none" : ""
          }`}
        >
          <label
            htmlFor={item}
            className="text-black-subTitle font-[600] leading-[24px] text-[16px]"
          >
            {item}
          </label>
          <Checkbox
            id={item}
            className="rounded-[2px] border-2 border-[#DAE3EC]"
          />
        </div>
      ))}
    </div>
  );
};

export default CheckboxComponent;
