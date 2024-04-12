const capitalizeFirstLetter = (inputString: string): string => {
  if (typeof inputString !== "string" || inputString.length === 0) {
    return inputString;
  }

  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
};

export default capitalizeFirstLetter;
