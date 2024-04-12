import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { ReactNode } from "react";

interface PopUpDialogProps {
  buttonTitle: string;
  dialogTitle: string;
  icon?: string;
  body: ReactNode;
}

const PopUpDialog: React.FC<PopUpDialogProps> = ({
  buttonTitle,
  dialogTitle,
  body,
  icon,
}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="font-[400] text-primary-hover text-[16px]">
          {icon && <  img src={icon} alt={""} className="inline mr-[5px] " />}
          {buttonTitle}
        </DialogTrigger>
        <DialogContent className="bg-[white] overflow-scroll h-[85%] overflow-x-hidden ">
          <DialogTitle className="">{dialogTitle}</DialogTitle>
          <div className="">{body}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PopUpDialog;
