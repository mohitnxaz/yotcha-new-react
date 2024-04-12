import { useLocation } from "react-router-dom";
import ButtonWithIcon from "../ButtonWithIcon";
import { useToast } from "../ui/use-toast";

const ButtonCluster = () => {
  const location = useLocation();
  const { toast } = useToast();
  const baseURL = "http://localhost:3000";

  const handleShareFunction = () => {
    const copiedLink = baseURL + location.pathname;
    navigator.clipboard.writeText(copiedLink);
    toast({
      title: "Copied",
      description: "The shareable link has been copied to your clipboard",
    });
  };
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="grid grid-cols-2 gap-[20px] ">
        <ButtonWithIcon
          buttonText={"Share"}
          onButtonClick={handleShareFunction}
          icon="share"
          className="col-span-1 gap-[10px] rounded-[6.4px] px-[35px] py-[16px] border-primary bg-primary-background text-primary hover:text-white hover:bg-primary-hover"
        />
        <ButtonWithIcon
          buttonText={"Save"}
          icon="save"
          className="col-span-1 gap-[10px] rounded-[6.4px] px-[35px] py-[16px] border-orange bg-[rgba(249,93,2,0.1)] text-orange hover:text-orange"
        />
      </div>
      <ButtonWithIcon
        buttonText={"Add to Compare"}
        icon="compare"
        className="flex gap-[10px] rounded-[6.4px] px-[35px] py-[16px] border-primary bg-primary-background text-primary hover:text-primary"
      />
    </div>
  );
};

export default ButtonCluster;
