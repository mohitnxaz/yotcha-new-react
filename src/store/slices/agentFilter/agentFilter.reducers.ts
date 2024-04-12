import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AgentListCardProps, PropertyListCardProps } from "../../../types";
import { getAgentFilteredListingsAsync } from "./agentFilterThunk";

export interface TopFilterValuesTypes {
  fullname: string;
  property_type: string;
  transaction_type: string;
  estate_agency: string;
  rating: number | null;
}
export interface FilterValuesTypes {
  agent_id: number;
  id: number;
  cea_number: string;
  fullname: string;
  property_type: string;
  transaction_type: string;
  estate_agency: string;
  albhabet: string;
  rating: number | null;
  offset: number;
  limit: number;
  sort:
    | "ESTATE AGENCY"
    | "AGENT ID"
    | "ESTATE AGENCY NUMBER"
    | "CEA NUMBER"
    | "CREATED AT"
    | "UPDATED AT"
    | null;
  order: "DESC" | "ASC" | null;
}

// export interface FilterValuesTypes2 {
//   address: string;
//   offset: number;
//   limit: number;
//   property_type: [];
//   propertySubType: any[];
//   min_price: number | null;
//   max_price: number | null;
//   propertyStatus: string[];
//   bed_room: number[];
//   bath_room: number[];
//   min_size: number | null;
//   max_size: number | null;
//   min_psf: number | null;
//   max_psf: number | null;
//   lease_term: number[];
//   max_build_year: any;
//   min_build_year: any;
//   furnished_status:
//     | "FULLY_FURNISHED"
//     | "PARTIAL_FURNISHED"
//     | "UNFURNISHED"
//     | null;
//   amenity_id: number[];
//   property_name: string;
//   sort: "PRICE" | "CREATED_AT" | "UPDATED AT" | "AREA" | "PSF" | null;
//   order: "DESC" | "ASC" | null;
// }

export interface FilterState {
  filteredData: {
    total: number | null;
    agent: AgentListCardProps[];
  };

  // filterValues: FilterValuesTypes2;

  selectedFilters: FilterValuesTypes;

  topFilters: TopFilterValuesTypes;

  loading: boolean;
  error: string | null;
}

const initialState: FilterState = {
  filteredData: {
    total: null,
    agent: [],
  },

  //to show all available options to the user (comes from backend)
  // filterValues: {
  //   property_name: "",
  //   offset: 0,
  //   limit: 10,
  //   address: "",
  //   property_type: [],
  //   propertySubType: [],
  //   min_price: 0,
  //   max_price: 0,
  //   propertyStatus: [],
  //   bed_room: [],
  //   bath_room: [],
  //   min_size: 0,
  //   max_size: 0,
  //   min_psf: 0,
  //   max_psf: 0,
  //   lease_term: [],
  //   max_build_year: null,
  //   min_build_year: null,
  //   furnished_status: null,
  //   amenity_id: [],
  //   sort: null,
  //   order: null,
  // },
  topFilters: {
    fullname: "",
    property_type: "",
    transaction_type: "",
    estate_agency: "",
    rating: null,
  },
  //to track the options that are selected so that we can apply this in filter query
  selectedFilters: {
    offset: 0,
    limit: 10,

    sort: null,
    order: null,
    agent_id: 0,
    id: 0,
    cea_number: "",
    fullname: "",
    property_type: "",
    transaction_type: "",
    estate_agency: "",
    albhabet: "",
    rating: null,
  },
  loading: false,
  error: null,
};

export const agentFilterSlice = createSlice({
  name: "agentFilter",
  initialState,
  reducers: {
    setAgentFilterFields: (
      state,
      action: PayloadAction<Partial<FilterValuesTypes>>
    ) => {
      state.selectedFilters = { ...state.selectedFilters, ...action.payload };
      state.loading = true;
    },

    setAgentTopFilterFields: (
      state,
      action: PayloadAction<Partial<FilterValuesTypes>>
    ) => {
      state.topFilters = { ...state.topFilters, ...action.payload };
    },

    transferAgentTopFiltersToSelectedFilters: (state) => {
      const {
        rating,
        fullname,
        property_type,
        estate_agency,
        transaction_type,
      } = state.topFilters;

      state.selectedFilters = {
        ...state.selectedFilters,
        rating,
        fullname,
        property_type,
        estate_agency,
        transaction_type,
      };
      console.log("");
    },

    clearFilters: (state) => {
      state.selectedFilters = { ...initialState.selectedFilters };
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(getFilterOptionsAsync.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(getFilterOptionsAsync.fulfilled, (state, action) => {
    //     const [propertyTypeData, featuresData, propertySubTypeData] =
    //       action.payload;
    //     state.filterValues = {
    //       ...state.filterValues,
    //       property_type: propertyTypeData,
    //       propertySubType: propertySubTypeData,
    //       amenity_id: featuresData,
    //     };
    //     state.loading = false;
    //   })
    //   .addCase(getFilterOptionsAsync.rejected, (state, action) => {
    //     state.error = action.payload as string;
    //     state.loading = false;
    //   });
    builder
      .addCase(getAgentFilteredListingsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAgentFilteredListingsAsync.fulfilled, (state, action) => {
        state.filteredData = action.payload;
        state.loading = false;
      })
      .addCase(getAgentFilteredListingsAsync.rejected, (state, action) => {
        state.error = "Some error occured while fetch data";
        state.loading = false;
      });
  },
});

export const {
  clearFilters,
  setAgentFilterFields,
  setAgentTopFilterFields,
  transferAgentTopFiltersToSelectedFilters,
} = agentFilterSlice.actions;
export default agentFilterSlice.reducer;
