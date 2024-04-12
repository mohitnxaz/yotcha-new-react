import { Button } from "../components/ui/button";
import { MouseEventHandler } from "react";

interface WhiteButtonProps {
  buttonText: string;
  className?: string;
  click?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({
  buttonText,
  className = "",
  click,
}) => {
  const combinedClassName = ` rounded-[5px] bg-white  text-primary hover:bg-primary hover:text-[white] ${className}`;
  return (
    <Button className={combinedClassName} onClick={click} type="button">
      {buttonText}
    </Button>
  );
};

export default WhiteButton;
