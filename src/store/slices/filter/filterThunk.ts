import { createAsyncThunk } from "@reduxjs/toolkit";
import * as filterAPI from "../../../api/filter/filterAPI";
import { RootState } from "../../store";

export const getFilterOptionsAsync = createAsyncThunk(
  "filter/getFilterOptions",
  async (args, { rejectWithValue }) => {
    try {
      const response1 = await filterAPI.getPropertyType();
      const response2 = await filterAPI.getFeatures();
      const response3 = await filterAPI.getPropertySubType();
      return [response1?.data, response2?.data, response3?.data];
    } catch (error) {
      //incase response api call fails..we can customize what to send to when handling it in filter.reducers.ts
      return rejectWithValue('error happended');
    }
  }
);


export const getFilteredListingsAsync = createAsyncThunk(
  "filter/getFilteredListings",
  async (args: any, { getState }) => {
    let filteredListings = [];
      filteredListings = (await filterAPI.getFilteredListing(args))?.data || [];
    return filteredListings;
   
  }
);