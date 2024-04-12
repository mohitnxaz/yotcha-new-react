import companyLogo from "../../../public/companyName.png";

interface MoreInfoProps {
  agentName: string;
  ceaNumber: string;
  estageAgencyLicense: string;
  companyName: string;
}

const MoreInfoComponent: React.FC<MoreInfoProps> = ({
  agentName,
  ceaNumber,
  estageAgencyLicense,
  companyName,
}) => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-2">
      <div>
        <div className="text-primary text-[22px] font-[600] leading-[22px] mb-3">
          {agentName}
        </div>
        <div className="text-black-subTitle text-[16px] font-[500]">
          {`${ceaNumber} | ${estageAgencyLicense}`}
        </div>
        <div className="text-black-subTitle text-[16px] font-[500] leading-[22px]">
          {companyName}
        </div>
      </div>
      <img src={companyLogo} className="w-[100px]" />
    </div>
  );
};

export default MoreInfoComponent;
