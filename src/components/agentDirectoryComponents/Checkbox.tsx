import React, { useState } from "react";

const Checkbox = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center justify-start w-full">
      <div className="flex items-center h-5">
        <input
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className={`h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary ${
            checked ? "bg-primary" : ""
          }`}
        />
      </div>
      <label
        htmlFor="checkbox"
        className="ml-2 block font-medium text-gray-600 text-[12px] w-full"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
