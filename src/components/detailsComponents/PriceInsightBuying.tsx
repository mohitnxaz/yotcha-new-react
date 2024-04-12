import FormSelect from "../FormSelect";
import { SelectItem } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import YearlyInsight from "./YearlyInsight";
// import infoIcon from "../../../../public/icons/material-symbols_info-outline.png";
import infoIcon from "../../../public/icons/material-symbols_info-outline.png";
const PriceInsightsBuying = () => {
  return (
    <div className="border-t pt-[24px] flex flex-col">
      <div className="flex flex-col gap-[15px]">
        <div className="relative">
          <div className="absolute left-0 ">
            <FormSelect
              title={""}
              placeholder="Select Type"
              className="rounded-[6px] w-[150px]"
            >
              <SelectItem value={"one"}>One</SelectItem>
              <SelectItem value={"two"}>Two</SelectItem>
              <SelectItem value={"three"}>Three</SelectItem>
            </FormSelect>
          </div>
          <Tabs defaultValue="one">
            <div className=" flex mt-[50px] sm:justify-end ">
              <TabsList className="rounded-[30px] gap-[10px] bg-black-background p-0 mb-[15px] min-w-[10px]">
                <TabsTrigger
                  value={"one"}
                  className="text-[14px] w-[93px] h-[36px] font-[400] data-[state=active]:text-[white] data-[state=active]:font-[500] data-[state=active]:bg-[black] data-[state=active]:rounded-[30px] "
                >
                  1 Year
                </TabsTrigger>
                <TabsTrigger
                  value={"three"}
                  className="text-[14px] w-[93px] h-[36px] font-[400] data-[state=active]:text-[white] data-[state=active]:font-[500] data-[state=active]:bg-[black] data-[state=active]:rounded-[30px] "
                >
                  3 Year
                </TabsTrigger>
                <TabsTrigger
                  value={"five"}
                  className="text-[14px] w-[93px] h-[36px] font-[400] data-[state=active]:text-[white] data-[state=active]:font-[500] data-[state=active]:bg-[black] data-[state=active]:rounded-[30px] "
                >
                  5 Year
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value={"one"}>
              <YearlyInsight />
            </TabsContent>
            <TabsContent value={"three"}>three</TabsContent>
            <TabsContent value={"five"}>five</TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="flex gap-[7px] items-center mt-[14px] border-t pt-[14px]">
        <img src={infoIcon} alt={""} />
        <div className="text-black-body text-[13.2px] leading-[15.84px] font-[600]  ">
          Transaction data is sourced from URA. Only showing 50 most recent
          transactions.
        </div>
      </div>
    </div>
  );
};

export default PriceInsightsBuying;
