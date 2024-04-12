import { Button } from "../components/ui/button";
// import shareIcon from "../../../../public/icons/shareIcon.svg";
import shareIcon from "../../public/icons/shareIcon.svg"
import saveIcon from "../../public/icons/saveIcon.svg";
import compareIcon from "../../public/icons/compareIcon.svg";
import gridIconn from "../../public/icons/unselectedGrid.svg";
import listIcon from "../../public/icons/listIcon.svg";
import selectedListIcon from "../../public/icons/selectedList.svg";
import selectedGridIcon from "../../public/icons/selectedGrid.png";

interface ButtonWithIconProps {
  buttonText: string;
  className: string;
  icon:
    | "grid"
    | "save"
    | "share"
    | "compare"
    | "list"
    | "selectedGrid"
    | "selectedList";
  onButtonClick?: () => void;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  buttonText,
  onButtonClick,
  icon,
  className,
}) => {
  const styleClass = className;
  let imgIcon;
  switch (icon) {
    case "share":
      imgIcon = shareIcon;
      break;
    case "compare":
      imgIcon = compareIcon;
      break;
    case "grid":
      imgIcon = gridIconn;
      break;
    case "list":
      imgIcon = listIcon;
      break;
    case "selectedGrid":
      imgIcon = selectedGridIcon;
      break;
    case "selectedList":
      imgIcon = selectedListIcon;
      break;
    default:
      imgIcon = saveIcon;
  }

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };
  return (
    <Button variant="outline" className={`${styleClass}`} onClick={handleClick}>
      <img src={imgIcon} alt={""} />

      {buttonText}
    </Button>
  );
};

export default ButtonWithIcon;
