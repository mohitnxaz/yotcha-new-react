import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PriceInsightsBuying from "./PriceInsightBuying";
import PriceInsightsRenting from "./PriceInsightRenting";

interface PriceInsightsProps {}

const PriceInsignts: React.FC<PriceInsightsProps> = ({}) => (
  <div className="flex flex-col gap-[32px]">
    <div className="flex pt-[10px] pb-[14px] gap-[7px] ">
      <Tabs defaultValue="buying" className="w-full">
        <TabsList className="px-0 gap-[50px]">
          <TabsTrigger
            value="buying"
            className="text-[15.5px] font-[700] leading-[16.5px] border-none px-0 text-black-body data-[state=active]:text-[#000]"
          >
            Buying
          </TabsTrigger>
          <TabsTrigger
            value="renting"
            className="text-[15.5px] font-[700] leading-[16.5px] px-0 text-black-body data-[state=active]:text-[#000]"
          >
            Renting
          </TabsTrigger>
        </TabsList>
        <TabsContent value="buying">
          <PriceInsightsBuying />
        </TabsContent>
        <TabsContent value="renting">
          <PriceInsightsRenting />
        </TabsContent>
      </Tabs>
    </div>
  </div>
);

export default PriceInsignts;
