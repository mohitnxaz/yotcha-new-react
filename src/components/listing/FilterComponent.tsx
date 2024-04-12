import { Tabs, TabsTrigger, TabsList, TabsContent } from "../ui/tabs";
import BuyFilterTab from "./BuyFilterTab";

interface FilterComponentListingProp {
  isPopUpFilter?: boolean;
}

const FilterComponentListing: React.FC<FilterComponentListingProp> = ({
  isPopUpFilter,
}) => {
  return (
    <div
      className={`flex flex-col bg-[white] border border-[#E6EAF1] rounded-[8px] pt-[20px] ${
        isPopUpFilter ? "border-none" : ""
      }`}
    >
      <div>
        <Tabs defaultValue="buy">
          <TabsList className=" grid grid-cols-3">
            <TabsTrigger
              className="py-[10px] border-b-[1px] data-[state=active]:border-b-primary data-[state=active]:font-[500] font-[400] text-[16px]"
              value="buy"
            >
              Buy
            </TabsTrigger>
            <TabsTrigger
              className="py-[10px]  border-b-[1px] data-[state=active]:border-b-primary data-[state=active]:font-[500] font-[400] text-[16px]"
              value="sell"
            >
              Sell
            </TabsTrigger>
            <TabsTrigger
              className=" py-[10px] border-b-[1px] data-[state=active]:border-b-primary data-[state=active]:font-[500] font-[400] text-[16px]"
              value="rent"
            >
              Rent
            </TabsTrigger>
          </TabsList>
          <TabsContent value="buy">
            <BuyFilterTab />
          </TabsContent>
          <TabsContent value="sell">
            <BuyFilterTab />
          </TabsContent>
          <TabsContent value="rent">
            <BuyFilterTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FilterComponentListing;
