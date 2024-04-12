import verifiedIcon from "../../../public/verified.svg";
import unverfiedIcon from "../../../public/unverified.svg";

const VerificationComponent = () => {
  const socailMeidaData = [
    {
      title: "Facebook",
      verified: true,
    },
    {
      title: "Google",
      verified: true,
    },
    {
      title: "Apple",
      verified: false,
    },
    {
      title: "LinkedIn",
      verified: true,
    },
    {
      title: "Phone",
      verified: false,
    },
    {
      title: "Email",
      verified: false,
    },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {socailMeidaData?.map((item) => {
        return (
          <div className="flex items-center gap-2 min-w-[200px]">
            <div>
              <img
                src={item.verified ? verifiedIcon : unverfiedIcon}
                className="w-[26px]"
              />
            </div>{" "}
            <div className="text-black-subTitle text-[18px] font-[500] leading-[22px]">
              {item.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VerificationComponent;
