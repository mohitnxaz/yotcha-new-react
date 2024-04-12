import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { ReactNode } from "react";

interface AccordianComponentProp {
  title: string;
  body: ReactNode;
  keepOpen: any;
  classNamee?: string;
}

const AccordianComponent: React.FC<AccordianComponentProp> = ({
  title,
  classNamee,
  body,
  keepOpen,
}) => {
  return (
    <div>
      <Accordion type="multiple" className="mt-[4px]" defaultValue={keepOpen}>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={`${
              classNamee !== undefined ? classNamee : "text-[14px]"
            } mx-[15px] text-black-title leading-[26px] font-[600] `}
          >
            {title.toUpperCase()}
          </AccordionTrigger>
          <AccordionContent className="mx-[15px]">{body}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordianComponent;
