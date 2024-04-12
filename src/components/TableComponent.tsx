// TableComponent.js
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

interface TableComponentProp {
  data: any;
  visibleItems: number;
}

const TableComponent: React.FC<TableComponentProp> = ({
  data,
  visibleItems,
}) => {
  return (
    <div className="border rounded-[8px]">
      <Table>
        <TableHeader className="text-black-body text-[14px] font-[500] leading-[15.8px] bg-black-background ">
          <TableRow className="px-[10px]">
            <TableHead>Date</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Size</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-black-body text-[14px] font-[400] leading-[15.8px]">
          {data.slice(0, visibleItems).map((item: any, index: number) => (
            <TableRow key={index}>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-[7px]">
                  <div>{item.unit}</div>
                </div>
              </TableCell>
              <TableCell>{item.size}</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-col gap-[7px]">
                  <div>{item.price.total}</div>
                  <div>{item.price.psf}</div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
