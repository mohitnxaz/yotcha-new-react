import TableComponent from "../TableComponent";
// import dropdownIcon from "../../../../public/icons/dropDownArrow.svg";
import dropdownIcon from "../../../public/icons/dropDownArrow.svg";
import { useState } from "react";
const YearlyInsight = () => {
  const data = [
    {
      date: "Nov 2023 - 1",
      unit: "#12-XX - Blk 10",
      size: 100,
      price: {
        total: "S$ 1.13M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 2",
      unit: "#12-XX - Blk 20",
      size: 200,
      price: {
        total: "S$ 2.26M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 3",
      unit: "#12-XX - Blk 30",
      size: 300,
      price: {
        total: "S$ 3.39M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 1",
      unit: "#12-XX - Blk 10",
      size: 100,
      price: {
        total: "S$ 1.13M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 2",
      unit: "#12-XX - Blk 20",
      size: 200,
      price: {
        total: "S$ 2.26M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 3",
      unit: "#12-XX - Blk 30",
      size: 300,
      price: {
        total: "S$ 3.39M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 1",
      unit: "#12-XX - Blk 10",
      size: 100,
      price: {
        total: "S$ 1.13M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 2",
      unit: "#12-XX - Blk 20",
      size: 200,
      price: {
        total: "S$ 2.26M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 3",
      unit: "#12-XX - Blk 30",
      size: 300,
      price: {
        total: "S$ 3.39M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 1",
      unit: "#12-XX - Blk 10",
      size: 100,
      price: {
        total: "S$ 1.13M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 2",
      unit: "#12-XX - Blk 20",
      size: 200,
      price: {
        total: "S$ 2.26M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 3",
      unit: "#12-XX - Blk 30",
      size: 300,
      price: {
        total: "S$ 3.39M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 1",
      unit: "#12-XX - Blk 10",
      size: 100,
      price: {
        total: "S$ 1.13M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 2",
      unit: "#12-XX - Blk 20",
      size: 200,
      price: {
        total: "S$ 2.26M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 3",
      unit: "#12-XX - Blk 30",
      size: 300,
      price: {
        total: "S$ 3.39M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 1",
      unit: "#12-XX - Blk 10",
      size: 100,
      price: {
        total: "S$ 1.13M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 2",
      unit: "#12-XX - Blk 20",
      size: 200,
      price: {
        total: "S$ 2.26M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 3",
      unit: "#12-XX - Blk 30",
      size: 300,
      price: {
        total: "S$ 3.39M",
        psf: "S$ 11,300.00 psf",
      },
    },

    {
      date: "Nov 2023 - 1",
      unit: "#12-XX - Blk 10",
      size: 100,
      price: {
        total: "S$ 1.13M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 2",
      unit: "#12-XX - Blk 20",
      size: 200,
      price: {
        total: "S$ 2.26M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 3",
      unit: "#12-XX - Blk 30",
      size: 300,
      price: {
        total: "S$ 3.39M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 1",
      unit: "#12-XX - Blk 10",
      size: 100,
      price: {
        total: "S$ 1.13M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 2",
      unit: "#12-XX - Blk 20",
      size: 200,
      price: {
        total: "S$ 2.26M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 3",
      unit: "#12-XX - Blk 30",
      size: 300,
      price: {
        total: "S$ 3.39M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 1",
      unit: "#12-XX - Blk 10",
      size: 100,
      price: {
        total: "S$ 1.13M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 2",
      unit: "#12-XX - Blk 20",
      size: 200,
      price: {
        total: "S$ 2.26M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 3",
      unit: "#12-XX - Blk 30",
      size: 300,
      price: {
        total: "S$ 3.39M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 1",
      unit: "#12-XX - Blk 10",
      size: 100,
      price: {
        total: "S$ 1.13M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 2",
      unit: "#12-XX - Blk 20",
      size: 200,
      price: {
        total: "S$ 2.26M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 3",
      unit: "#12-XX - Blk 30",
      size: 300,
      price: {
        total: "S$ 3.39M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 1",
      unit: "#12-XX - Blk 10",
      size: 100,
      price: {
        total: "S$ 1.13M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 2",
      unit: "#12-XX - Blk 20",
      size: 200,
      price: {
        total: "S$ 2.26M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 3",
      unit: "#12-XX - Blk 30",
      size: 300,
      price: {
        total: "S$ 3.39M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 1",
      unit: "#12-XX - Blk 10",
      size: 100,
      price: {
        total: "S$ 1.13M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 2",
      unit: "#12-XX - Blk 20",
      size: 200,
      price: {
        total: "S$ 2.26M",
        psf: "S$ 11,300.00 psf",
      },
    },
    {
      date: "Nov 2023 - 3",
      unit: "#12-XX - Blk 30",
      size: 300,
      price: {
        total: "S$ 3.39M",
        psf: "S$ 11,300.00 psf",
      },
    },
  ];

  const [visibleItems, setVisibleItems] = useState(5);
  const showAll = visibleItems === data.length;

  const handleShowAllClick = () => {
    setVisibleItems(showAll ? 5 : data.length);
  };

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[7px]">
        <div className="text-[14px] leading-[15.8px] font-[400] text-[#000]">
          Last Transaction Price
        </div>
        <div className="text-[14px] leading-[16.5px] font-[600] text-[#000]">
          S$ 1.13M
        </div>
        <div className="text-[14px] leading-[16.5px] font-[400] text-black-body">
          21 Transactions
        </div>
      </div>
      <div>
        <TableComponent data={data} visibleItems={visibleItems} />
      </div>
      <div>
        {" "}
        <button onClick={handleShowAllClick}>
          {showAll ? (
            <div className="flex gap-[7px] items-center">
              <img
                src={dropdownIcon}
                alt={""}
                style={{ transform: "scale(1, -1)" }}
              />
              <div className="text-[15.2px] text-black-body leading-[15.8px] font-[600]">
                Show 5 Transactions
              </div>{" "}
            </div>
          ) : (
            <div className="flex gap-[7px] items-center">
              <img src={dropdownIcon} alt={""} />
              <div className="text-[15.2px] text-black-body leading-[15.8px] font-[600]">
                Show All {data.length} Transactions
              </div>{" "}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default YearlyInsight;
