import { createAsyncThunk } from "@reduxjs/toolkit";
import * as agentFilterAPI from "../../../api/filter/agentFilterAPI";

export const getAgentFilteredListingsAsync = createAsyncThunk(
  "agentFilter/getFilteredListings",
  async (args: any, { getState }) => {
    let filteredListings = [];
    filteredListings =
      (await agentFilterAPI.getAgentFilteredListing(args))?.data || [];
    return filteredListings;
  }
);
