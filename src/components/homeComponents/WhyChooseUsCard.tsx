import { WhyChooseCardProps } from "../../types";

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  logo,
  title,
  detail,
}) => {
  return (
    <div className="w-[262px] h-[304px] flex flex-col py-[30px] gap-y-[30px] justify-center border-[1px] border-[rgba(78,92,121,0.30)] rounded-[5px] bg-white group">
      <div className="flex justify-center group-hover:scale-[1.1] transition duration-300 ease-in-out ">
        <img src={logo} alt={""} />
      </div>
      <div className="flex flex-col gap-y-[10px] text-center">
        <p className="select-none text-[16px] font-[600]">{title}</p>
        <p className="select-none text-[16px] font-[300]">{detail}</p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
