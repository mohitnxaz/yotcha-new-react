import { useDispatch, useSelector } from "react-redux";
import { PriceFilterComponentProps } from "../../types";
// import { setTopFilterFields } from "../../store/slices/filter/filter.reducers";
import { Input } from "../ui/input";
import { setTopFilterFields } from "../../store/slices/filter/filter.reducers";


const PriceFilterComponent: React.FC<PriceFilterComponentProps> = ({
  vertical,
  className = "",
}) => {
  const dispatch = useDispatch();

  const min_price: number =
    useSelector((state: any) => state.filter.topFilters.min_price) || 0;

  const max_price: number =
    useSelector((state: any) => state.filter.topFilters.max_price) || 0;

  const handlemin_priceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    dispatch(
      setTopFilterFields({
        min_price:
          value !== null && !isNaN(parseInt(value)) ? parseInt(value) : 0,
      })
    );
  };

  const handlemax_priceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    dispatch(
      setTopFilterFields({
        max_price:
          value !== null && !isNaN(parseInt(value)) ? parseInt(value) : 0,
      })
    );
  };

  return (
    <div
      className={`grid ${!vertical ? "gap-[16px]" : "gap-[8px]"} grid-cols-${
        vertical ? 1 : 2
      }  w-full min-w-[10px] ${className}`}
    >
      <div className="flex flex-col gap-[8px] w-full ">
        <div className="text-[#2A3C51] text-[14px] font-[400] leading-[16px]">
          Minimum Price
        </div>
        <Input
          value={min_price === null? 0:min_price}
          onChange={handlemin_priceChange}
          className={` ${
            !vertical ? "rounded-[4px]" : ""
          }   min-w-[10px]  border-[rgba(4,77,88,0.20)] text-[#7C828E] text-[14px] font-[400] leading-[18px]`}
          placeholder="$Min"
        />
      </div>
      <div className="flex flex-col gap-[8px] w-full ">
        <div className="text-[#2A3C51] text-[14px] font-[400] leading-[16px]">
          Maximum Price
        </div>

        <Input
          value={max_price ?? 0}
          onChange={handlemax_priceChange}
          className="rounded-[4px] border-[rgba(4,77,88,0.20)]  text-[#7C828E] text-[14px] font-[400] leading-[18px] "
          placeholder="$Maxm"
        />
      </div>
    </div>
  );
};

export default PriceFilterComponent;
