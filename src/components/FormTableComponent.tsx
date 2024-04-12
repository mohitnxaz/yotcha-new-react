// FormTableComponent.js
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

interface FormTableComponentProp {
  data: any;
}

const FormTableComponent: React.FC<FormTableComponentProp> = ({ data }) => {
  return (
    <div className="">
      <Table>
        <TableHeader className="text-black-body text-[14px] font-[500] leading-[15.8px] bg-black-background ">
          <TableRow className="pl-[7px] border-t-[1px] border-[#00C5B4ED]">
            <TableHead>Date</TableHead>
            <TableHead>Project Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Property Type</TableHead>
            <TableHead>Tenure</TableHead>
            <TableHead>Type of Area</TableHead>
            <TableHead>Area (sqft)</TableHead>
            <TableHead>Price ($)</TableHead>
            <TableHead>Price ($Psf)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-black-body text-[14px] font-[400] leading-[15.8px]">
          {data.map((item: any, index: number) => (
            <TableRow key={index} className="border-none">
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.projectName}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.propertyType}</TableCell>
              <TableCell>{item.tenure}</TableCell>
              <TableCell>{item.typeOfArea}</TableCell>
              <TableCell>{item.areaSqft}</TableCell>
              <TableCell>{item.price.total}</TableCell>
              <TableCell>{item.price.psf}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FormTableComponent;
