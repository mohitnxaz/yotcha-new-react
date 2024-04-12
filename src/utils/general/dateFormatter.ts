import dayjs from "dayjs";

export const dateFormatter = (date: string): string => {
  const parsedDate = dayjs(date);
  const formattedDate = parsedDate.format("MM/DD/YYYY");

  return formattedDate;
};
