import _ from "lodash";

export const updateQueryUsingJs = (queryString: string) => {
  let currentURL =
    window &&
    window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      `?${queryString}`;

  window && window.history.pushState({ path: currentURL }, "", currentURL);
};

export const AddFilterToUrlReturnQueryString = (filter: any) => {
  let finalParams: any = {
    min_price: filter?.min_price ?? undefined,
    max_price: filter?.max_price ?? undefined,
    address: filter?.address || undefined,
    bed_room: filter?.bed_room ?? [],
    bath_room: filter?.bath_room ?? [],
    lease_term: filter?.lease_term ?? [],
    property_type: filter?.property_type ?? undefined,
    min_size: filter?.min_size ?? undefined,
    max_size: filter?.max_size ?? undefined,
    min_psf: filter?.min_psf ?? undefined,
    max_psf: filter?.max_psf ?? undefined,
    min_build_year: filter?.min_build_year ?? undefined,
    max_build_year: filter?.max_build_year ?? undefined,
    furnished_status: filter?.furnished_status ?? undefined,
    amenity_id: filter?.amenity_id ?? [],
    property_name: filter?.property_name ?? undefined,
    sort: filter?.sort ?? undefined,
    order: filter?.order ?? undefined,
  };

  const queryString = Object.keys(finalParams)
    .filter(
      (key: any) =>
        !(
          _.isNil(finalParams[key]) ||
          finalParams[key] === "" ||
          finalParams[key] === 0 ||
          (_.isArray(finalParams[key]) && _.isEmpty(finalParams[key]))
        )
    )
    .map((key) => key + "=" + finalParams[key])
    .join("&");

  return queryString;
};

export const AddAgentFilterToUrlReturnQueryString = (filter: any) => {
  let finalParams: any = {
    fullname: filter?.fullname ?? undefined,
    agent_id: filter?.agent_id ?? undefined,
    cea_number: filter?.cea_number ?? undefined,
    estate_agency: filter?.cea_number ?? undefined,
    estate_agency_license: filter?.estate_agency_license ?? undefined,
    sort: filter?.sort ?? undefined,
    order: filter?.order ?? undefined,
  };

  const queryString = Object.keys(finalParams)
    .filter(
      (key: any) =>
        !(
          _.isNil(finalParams[key]) ||
          finalParams[key] === "" ||
          finalParams[key] === 0 ||
          (_.isArray(finalParams[key]) && _.isEmpty(finalParams[key]))
        )
    )
    .map((key) => key + "=" + finalParams[key])
    .join("&");

  return queryString;
};

export const checkStringTypeAndConvertToArray = (data: any, int = true) => {
  if (data && typeof data === "string") {
    return data
      .split(",")
      .map((elem) => (int ? parseInt(elem.trim()) : elem.trim()));
  }
  return [];
};

export const checkStringTypeAndConvertToDate = (data: any) => {
  if (data && typeof data === "string") {
    const decodedParamter = decodeURIComponent(data);
    const dateObject = new Date(decodedParamter);
    dateObject.setUTCHours(0, 0, 0, 0);
    console.log(dateObject);
    return dateObject;
  }
  return new Date().setUTCHours(0, 0, 0, 0);
};

export const checkStringTypeAndParseToInt = (data: any) => {
  if (data && typeof data === "string") {
    return parseInt(data);
  }
  return null;
};
