import * as React from "react";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { cn } from "../utils/ui/classNameConcat";



interface DatePickerDemoProps {
  date: any;
  setDate: any;
}

export const DatePickerDemo: React.FC<DatePickerDemoProps> = ({
  date,
  setDate,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[100%] justify-start font-normal rounded-[4px] border-[#DDD] text-[#495057]",
            !date && "text-muted-foreground"
          )}
        >
          {date ? (
            `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
          ) : (
            <span className="text-[#495057]">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 rounded-[5px]">
        <Calendar
          className="bg-[white] rounded-[5px]"
          mode="single"
          //remove +1 part in selected to show the highlighted date: note: highlted date is one day behing
          //acutal selected date due to some reason
          selected={date}
          onSelect={setDate}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerDemo;
