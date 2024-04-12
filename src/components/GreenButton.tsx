import { Button } from "../components/ui/button";

interface GreenButtonProps {
  buttonText: string;
  className?: string;
  disabled?: boolean;
  onClick?: any;
  type?: any;
}

const GreenButton: React.FC<GreenButtonProps> = ({
  buttonText,
  className = "",
  disabled,
  onClick,
  type,
}) => {
  const combinedClassName = `rounded-[5px] bg-primary hover:text-primary hover:bg-primary-hover text-[white] ${className}`;
  return (
    <Button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {buttonText}
    </Button>
  );
};

export default GreenButton;
